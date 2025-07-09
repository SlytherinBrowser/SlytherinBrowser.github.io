import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.153.0/build/three.module.js';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.153.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.153.0/examples/jsm/loaders/GLTFLoader.js';

import { db, signIn } from './firebase-config.js';
import { ref, onValue, set, off } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xa0a0a0);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.set(0, 2, 5);

const renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0,1,0);
controls.enablePan = false;
controls.minDistance = 2;
controls.maxDistance = 6;

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth/window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Osnovna osvetlitev
const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 1);
hemiLight.position.set(0, 20, 0);
scene.add(hemiLight);

const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
dirLight.position.set(5, 10, 7);
scene.add(dirLight);

// Talna plošča
const floorGeometry = new THREE.PlaneGeometry(50, 50);
const floorMaterial = new THREE.MeshStandardMaterial({color: 0x808080});
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.rotation.x = -Math.PI/2;
scene.add(floor);

const loader = new GLTFLoader();

// Igralci v sceni
const players = {};  // key = uid, value = {avatar, chatTimeout, chatSprite, position, rotation}

// Trenutni uporabnik
let localUid = null;
let localPlayer = null;

let inputEnabled = false;
const velocity = new THREE.Vector3();
const direction = new THREE.Vector3();

const chatInput = document.getElementById('chatInput');

async function init() {
  localUid = await signIn();

  // Pridobi avatarURL2 iz Firebase (predpostavimo, da je na poti /users/{uid}/avatarURL2)
  const avatarURLRef = ref(db, `users/${localUid}/avatarURL2`);
  onValue(avatarURLRef, async (snapshot) => {
    const url = snapshot.val();
    if (url && !localPlayer) {
      // Naloži avatar in postavi v sceno
      localPlayer = await loadAvatar(url);
      localPlayer.position.set(0,0,0);
      scene.add(localPlayer);
      players[localUid] = { avatar: localPlayer };
      controls.target.copy(localPlayer.position);
    }
  });

  // Poslušaj spremembe pozicij in chatov ostalih igralcev
  const playersRef = ref(db, 'players');
  onValue(playersRef, (snapshot) => {
    const data = snapshot.val() || {};
    for (const uid in data) {
      if (uid === localUid) continue;
      if (!players[uid]) {
        // naloži avatar ostalih igralcev
        loadAvatar(data[uid].avatarURL).then(avatar => {
          avatar.position.fromArray(data[uid].position);
          scene.add(avatar);
          players[uid] = { avatar, chatTimeout: null, chatSprite: null };
          if(data[uid].chatMessage){
            showChatBubble(uid, data[uid].chatMessage);
          }
        });
      } else {
        // Posodobi položaj
        if (players[uid].avatar) {
          players[uid].avatar.position.fromArray(data[uid].position);
          players[uid].avatar.rotation.y = data[uid].rotationY;
          if (data[uid].chatMessage) {
            showChatBubble(uid, data[uid].chatMessage);
          }
        }
      }
    }
    // Odstrani igralce, ki so se odjavili
    for (const uid in players) {
      if (uid !== localUid && !(uid in data)) {
        scene.remove(players[uid].avatar);
        delete players[uid];
      }
    }
  });

  animate();
}

async function loadAvatar(url) {
  return new Promise((resolve, reject) => {
    loader.load(url, gltf => {
      const avatar = gltf.scene;
      avatar.scale.set(1,1,1);
      avatar.traverse(child => {
        if (child.isMesh) child.castShadow = true;
      });
      resolve(avatar);
    }, undefined, err => {
      console.error('Napaka pri nalaganju avatarja:', err);
      reject(err);
    });
  });
}

function animate() {
  requestAnimationFrame(animate);

  if (localPlayer && inputEnabled) {
    // Osnovni premik WSAD
    velocity.set(0, 0, 0);
    if (keys['KeyW']) velocity.z -= 0.05;
    if (keys['KeyS']) velocity.z += 0.05;
    if (keys['KeyA']) velocity.x -= 0.05;
    if (keys['KeyD']) velocity.x += 0.05;

    // Pomakni avatar glede na smer kamere
    direction.copy(velocity);
    direction.applyAxisAngle(new THREE.Vector3(0,1,0), camera.rotation.y);
    localPlayer.position.add(direction);

    // Pošlji update v Firebase
    set(ref(db, `players/${localUid}`), {
      position: [localPlayer.position.x, localPlayer.position.y, localPlayer.position.z],
      rotationY: localPlayer.rotation.y,
      avatarURL: localPlayer.userData.avatarURL || '', 
      chatMessage: currentChatMessage
    });
  }

  // Kamera sledi avatarju
  if(localPlayer){
    controls.target.copy(localPlayer.position);
    controls.update();
  }

  renderer.render(scene, camera);
}

const keys = {};
window.addEventListener('keydown', e => {
  keys[e.code] = true;

  // Odpri chat input ob pritisku T
  if (e.code === 'KeyT' && !inputEnabled) {
    chatInput.style.display = 'block';
    chatInput.focus();
    inputEnabled = true;
  }

  // Zapri chat input ob Escape
  if (e.code === 'Escape' && inputEnabled) {
    chatInput.style.display = 'none';
    chatInput.value = '';
    inputEnabled = false;
  }
});

window.addEventListener('keyup', e => {
  keys[e.code] = false;
});

let currentChatMessage = null;

chatInput.addEventListener('keydown', e => {
  if (e.key === 'Enter' && chatInput.value.trim() !== '') {
    currentChatMessage = chatInput.value.trim();
    showChatBubble(localUid, currentChatMessage);
    chatInput.value = '';
    chatInput.style.display = 'none';
    inputEnabled = false;

    // Pošlji sporočilo v Firebase
    set(ref(db, `players/${localUid}/chatMessage`), currentChatMessage);

    // Po 10 sekundah skrij bubble in počisti sporočilo v bazi
    setTimeout(() => {
      currentChatMessage = null;
      set(ref(db, `players/${localUid}/chatMessage`), null);
    }, 10000);
  }
});

// Funkcija za prikaz chat bubble nad avatarjem
function showChatBubble(uid, message) {
  if (!players[uid]) return;

  const avatar = players[uid].avatar;
  if (!avatar) return;

  // Če bubble že obstaja, ga odstranimo
  if (players[uid].chatSprite) {
    scene.remove(players[uid].chatSprite);
    clearTimeout(players[uid].chatTimeout);
  }

  // Ustvarimo canvas za tekst
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');
  ctx.font = '28px Arial';
  ctx.fillStyle = 'white';
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 4;
  ctx.textAlign = 'center';
  ctx.strokeText(message, canvas.width/2, 40);
  ctx.fillText(message, canvas.width/2, 40);

  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;
  const spriteMaterial = new THREE.SpriteMaterial({ map: texture, transparent: true });
  const sprite = new THREE.Sprite(spriteMaterial);
  sprite.scale.set(2, 0.5, 1);
  sprite.position.set(0, 2.5, 0);
  avatar.add(sprite);

  players[uid].chatSprite = sprite;
  players[uid].chatTimeout = setTimeout(() => {
    avatar.remove(sprite);
    players[uid].chatSprite = null;
  }, 10000);
}

init();
