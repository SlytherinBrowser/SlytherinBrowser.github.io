// Vnesi svojo Firebase konfiguracijo tukaj in izvozi firebase app
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
import { getAuth, signInAnonymously } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

 const firebaseConfig = {
      apiKey: "AIzaSyBXOP6VYKpaM0Zwa_l0KPZl6Q1z-xpgzX8",
      authDomain: "chater-cf682.firebaseapp.com",
      databaseURL: "https://chater-cf682-default-rtdb.firebaseio.com",
      projectId: "chater-cf682",
      storageBucket: "chater-cf682.appspot.com",
      messagingSenderId: "233632075480",
      appId: "1:233632075480:web:fbf5101a3fda63fdfb51ad"
    };

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

async function signIn() {
  await signInAnonymously(auth);
  return auth.currentUser.uid;
}

export { db, auth, signIn };
