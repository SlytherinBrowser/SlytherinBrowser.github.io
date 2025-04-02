import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDoc, doc, query, orderBy, getDocs, deleteDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWX0bC74nQM4K5zkgnN1u9mfZtt62UAMg",
  authDomain: "slychat-d75a2.firebaseapp.com",
  databaseURL: "https://slychat-d75a2-default-rtdb.firebaseio.com",
  projectId: "slychat-d75a2",
  storageBucket: "slychat-d75a2.firebasestorage.app",
  messagingSenderId: "134982403709",
  appId: "1:134982403709:web:aea347d62b313668e79314",
  measurementId: "G-1C0H5L72J1"
};
// Inicializacija Firebase
let app, db;
try {
  app = initializeApp(firebaseConfig);
  console.log("Firebase initialized:", app);
  db = getFirestore(app);
  console.log("Firestore initialized:", db);
} catch (error) {
  console.error("Error initializing Firebase:", error);
}

let mutedUsers = [];
let bannedUsers = [];
let isChatPaused = false;
let customNicknames = {};  // Za shranjevanje vzdevkov uporabnikov
let userRoles = {
  "Sly": "owner",
};

const allowedClearChatUsers = ["Sly"];
const allowedPauseChatUsers = ["Sly"];
const allowedBanUsers = ["Sly"];
const allowedUnbanUsers = ["Sly"];
const allowedSetRoleUsers = ["Sly"]; // Dovoljenje za uporabo /setrole

// Funkcija za registracijo uporabnika in shranjevanje imena v Firestore
async function registerUser() {
  const username = prompt("Vpiši svoje ime uporabnika:");
  if (username && username.trim()) {
    try {
      const userRef = collection(db, "users");
      const docRef = await addDoc(userRef, {
        username: username.trim(),
        createdAt: new Date()
      });

      localStorage.setItem("userId", docRef.id); // Shranimo ID uporabnika v localStorage
      showAlert(`Dobrodošel/a, ${username}!`, true);
    } catch (error) {
      showAlert("Napaka pri registraciji. Poskusite znova.", false);
    }
  } else {
    showAlert("Prosim, vpišite veljavno ime.", false);
  }
}

// Funkcija za pridobivanje uporabniškega imena iz Firestore
async function getUsername() {
  const userId = localStorage.getItem("userId");
  if (!userId) {
    showAlert("Niste registrirani. Prosimo, registrirajte se.", false);
    return null;
  }

  try {
    const userRef = doc(db, "users", userId);
    const userSnap = await getDoc(userRef);
    
    if (userSnap.exists()) {
      return userSnap.data().username; // Vrne ime uporabnika
    } else {
      showAlert("Uporabnik ni najden v bazi.", false);
      return null;
    }
  } catch (error) {
    showAlert("Napaka pri pridobivanju imena uporabnika.", false);
    return null;
  }
}

// Funkcija za pošiljanje sporočila
async function sendMessage(message) {
  try {
    const username = await getUsername(); // Pridobimo ime uporabnika iz Firestore
    if (!username) {
      throw new Error("Uporabniško ime ni na voljo.");
    }

    if (mutedUsers.includes(username)) {
      throw new Error("Tvoj račun je utišan.");
    }

    if (bannedUsers.includes(username)) {
      throw new Error("Tvoj račun je banan.");
    }

    if (isChatPaused) {
      showAlert("Chat je trenutno ustavljen. Počakajte, da ga nekdo znova omogoči.", false);
      return;
    }

    // Dodajanje sporočila v Firestore
    await addDoc(collection(db, "messages"), {
      username,
      message,
      timestamp: new Date()
    });

    document.getElementById("message").value = "";
    showAlert("Sporočilo je bilo poslano!", true);
  } catch (error) {
    console.error("Error sending message:", error.message);
    showAlert(error.message, false);
  }
}

// Funkcija za prikaz obvestil
function showAlert(message, isSuccess) {
  const alertDiv = document.createElement("div");
  alertDiv.classList.add("alert");
  alertDiv.style.backgroundColor = isSuccess ? "green" : "red";
  alertDiv.textContent = message;
  document.body.appendChild(alertDiv);

  setTimeout(() => {
    alertDiv.remove();
  }, 5000);
}

// Funkcija za brisanje klepeta
async function clearChat() {
  const currentUser = await getUsername();
  const userRole = userRoles[currentUser];

  // Preverimo, ali je uporabnik owner
  if (userRole !== "owner") {
    showAlert("Za to dejanje morate biti lastnik!", false);
    return;
  }

  const chatWindow = document.getElementById("chat-window");

  // Prikažemo obvestilo v klepetu, da bo klepet očiščen
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message");

  const usernameSpan = document.createElement("span");
  usernameSpan.classList.add("username");
  usernameSpan.textContent = "[HOST] Host: ";

  const messageSpan = document.createElement("span");
  messageSpan.classList.add("message-text");
  messageSpan.textContent = "Chat will be cleared in 5 seconds!";

  messageDiv.appendChild(usernameSpan);
  messageDiv.appendChild(messageSpan);
  chatWindow.appendChild(messageDiv);

  // Odštevanje 5 sekund
  let countdown = 5;
  const countdownInterval = setInterval(() => {
    if (countdown <= 0) {
      clearInterval(countdownInterval);
      // Počisti klepet na strani
      chatWindow.innerHTML = "";

      // Izbriši vse sporočila iz Firestore
      deleteMessagesFromFirestore();

      showAlert("Klepeto je bilo očiščeno.", true);
    } else {
      // Posodobi obvestilo
      messageSpan.textContent = `Chat will be cleared in ${countdown} seconds.`;
      countdown--;
    }
  }, 1000);
}

async function deleteMessagesFromFirestore() {
  const q = query(collection(db, "messages"));
  const snapshot = await getDocs(q);

  snapshot.forEach((doc) => {
    deleteDoc(doc.ref);
  });
}

// Funkcija za nastavitev vloge uporabnika
async function setRole(username, newRole) {
  const currentUser = await getUsername();
  const userRole = userRoles[currentUser];

  // Preverimo, ali je uporabnik owner
  if (userRole !== "owner") {
    showAlert("Za to dejanje morate biti lastnik!", false);
    return;
  }

  userRoles[username] = newRole;
  showAlert(`${username} je dobil novo vlogo: ${newRole}.`, true);
}

// Funkcija za poslušanje sporočil
function listenToMessages() {
  const chatWindow = document.getElementById("chat-window");
  const q = query(collection(db, "messages"), orderBy("timestamp", "asc"));

  onSnapshot(q, (snapshot) => {
    chatWindow.innerHTML = "";

    snapshot.forEach((doc) => {
      const { username, message, timestamp, color, isNotification } = doc.data();
      const messageDiv = document.createElement("div");
      messageDiv.classList.add("message");

      const usernameSpan = document.createElement("span");
      const { rolePrefix, role, color: userColor } = getUserRole(username);
      usernameSpan.classList.add("username", role);
      usernameSpan.textContent = rolePrefix + " " + username;

      const messageSpan = document.createElement("span");
      messageSpan.classList.add("message-text");
      messageSpan.textContent = message;

      if (userColor) {
        messageSpan.style.color = userColor;
      } else if (color) {
        messageSpan.style.color = color;
      }

      if (isNotification) {
        messageDiv.classList.add("notification");
      }

      const timestampSpan = document.createElement("span");
      timestampSpan.classList.add("timestamp");
      if (timestamp?.seconds) {
        timestampSpan.textContent = new Date(timestamp.seconds * 1000).toLocaleString();
      } else {
        timestampSpan.textContent = new Date().toLocaleString();
      }

      messageDiv.appendChild(usernameSpan);
      messageDiv.appendChild(messageSpan);
      messageDiv.appendChild(timestampSpan);
      chatWindow.appendChild(messageDiv);
    });

    chatWindow.scrollTop = chatWindow.scrollHeight;
  });
}

listenToMessages();
