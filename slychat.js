import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import { getFirestore, collection, getDocs, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";
    

    // Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyA2l2SEcXPrLGpSOiTyyC55l35OMln1VUM",
        authDomain: "slychat-e0a59.firebaseapp.com",
        projectId: "slychat-e0a59",
        storageBucket: "slychat-e0a59.appspot.com",
        messagingSenderId: "462724887870",
        appId: "1:462724887870:web:72d25e58b20af6e2d2286f",
        measurementId: "G-52CMK3FJYW"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth();
    const db = getFirestore();

    // Elementi
    const chatWindow = document.getElementById('chat-window');
    const chatInput = document.getElementById('chat-input');
    const sendButton = document.getElementById('send-button');
    const codeInput = document.getElementById('code-input');
    const joinButton = document.getElementById('join-button');
    const reserveButton = document.getElementById('reserve-button');
    const googleSignInButton = document.getElementById('google-sign-in-button');
    const googleSignOutButton = document.getElementById('google-sign-out-button');
    const userNamesContainer = document.getElementById('user-names');
    const popupContainer = document.getElementById('popup-container');
    const addEmailButton = document.getElementById('add-email');
    const emailContainer = document.getElementById('email-container');
    const saveButton = document.getElementById('save-button');
    const closeButton = document.getElementById('close-button');

    let currentUser = null;  // Trenutni uporabnik
    let chatRoomCode = 'public'; // Privzeto javna seja
    const localMessages = [];  // Lokalno shranjevanje sporočil
    let emailList = [];

    // Funkcija za prikaz sporočila v oblačku
    function addMessageToChatWindow(message, sender, isSentByCurrentUser, status) {
        const msgElement = document.createElement('div');
        msgElement.classList.add('message-box');

        const senderNameElement = document.createElement('div');
        senderNameElement.classList.add('sender-name');
        senderNameElement.textContent = sender;

        const msgTextElement = document.createElement('div');
        msgTextElement.textContent = message.text;

        const msgStatusElement = document.createElement('div');
        msgStatusElement.classList.add('message-status');
        msgStatusElement.textContent = status;

        if (isSentByCurrentUser) {
            msgElement.classList.add('sent');
        } else {
            msgElement.classList.add('received');
        }

        msgElement.appendChild(senderNameElement);
        msgElement.appendChild(msgTextElement);
        msgElement.appendChild(msgStatusElement);

        chatWindow.appendChild(msgElement);
        chatWindow.scrollTop = chatWindow.scrollHeight;  // Pomakni se navzdol do zadnjega sporočila
    }

    // Google Sign-In
    googleSignInButton.onclick = function() {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider).then((result) => {
            currentUser = result.user;
            updateUI();
            console.log('User signed in: ', currentUser);
        }).catch((error) => {
            console.error('Error during sign in: ', error);
        });
    };

    // Google Sign-Out
    googleSignOutButton.onclick = function() {
        auth.signOut().then(() => {
            currentUser = null;
            updateUI();
            console.log('User signed out.');
        }).catch((error) => {
            console.error('Error during sign out: ', error);
        });
    };

    // Update the UI based on user state
    auth.onAuthStateChanged((user) => {
        if (user) {
            currentUser = user;
            updateUI();
        } else {
            currentUser = null;
            updateUI();
        }
    });

    function updateUI() {
        if (currentUser) {
            userNamesContainer.innerHTML = ''; // Clear existing users
            const userElement = document.createElement('div');
            userElement.textContent = currentUser.displayName || currentUser.email;
            userNamesContainer.appendChild(userElement);

            googleSignInButton.style.display = 'none';
            googleSignOutButton.style.display = 'block';
            chatInput.disabled = false; // Enable chat input
            sendButton.disabled = false; // Enable send button
        } else {
            userNamesContainer.innerHTML = 'No user logged in';
            googleSignInButton.style.display = 'block';
            googleSignOutButton.style.display = 'none';
            chatInput.disabled = true; // Disable chat input
            sendButton.disabled = true; // Disable send button
        }
    }

    // Chat sending functionality
    sendButton.onclick = function() {
        const message = chatInput.value;
        if (message.trim() !== '') {
            const chatMessage = {
                text: message,
                sender: currentUser ? currentUser.displayName || currentUser.email : 'Anonymous'
            };
            db.ref(`chats/${chatRoomCode}`).push(chatMessage);
            addMessageToChatWindow(chatMessage, chatMessage.sender, true, 'Sent');
            chatInput.value = '';
        }
    };

    // Joining a chat room
    joinButton.onclick = function() {
        chatRoomCode = codeInput.value.trim();
        if (chatRoomCode) {
            db.ref(`chats/${chatRoomCode}`).on('child_added', (snapshot) => {
                const message = snapshot.val();
                addMessageToChatWindow(message, message.sender, false, 'Received');
            });
        }
    };

    // Show the popup for reserving a session
    reserveButton.onclick = function() {
        popupContainer.style.display = 'block';
    };

    // Close the popup
    closeButton.onclick = function() {
        popupContainer.style.display = 'none';
    };

    // Add email functionality
    addEmailButton.onclick = function() {
        const emailInput = emailContainer.querySelector('input[type="email"]');
        const email = emailInput.value.trim();
        if (email) {
            emailList.push(email);
            const emailDiv = document.createElement('div');
            emailDiv.textContent = email;
            emailContainer.appendChild(emailDiv);
            emailInput.value = ''; // Clear input field
        }
    };

    // Save session functionality
    saveButton.onclick = function() {
        const reservationCode = document.getElementById('reservation-code').value.trim();
        if (reservationCode) {
            // Save the reservation code and emails to Firebase or any backend
            console.log('Reservation Code:', reservationCode);
            console.log('Email List:', emailList);
            popupContainer.style.display = 'none'; // Close popup after saving
        }
    };