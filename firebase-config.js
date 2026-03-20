import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyBh_oi61f3geQXrrisZvtCQqJQAHSNfQ84",
  authDomain: "novique-events.firebaseapp.com",
  projectId: "novique-events",
  storageBucket: "novique-events.firebasestorage.app",
  messagingSenderId: "440586667375",
  appId: "1:440586667375:web:f07261f85c963ca164549a",
  measurementId: "G-4FZY76M4CV"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };
