// js/firebase-config.js
const firebaseConfig = {
  apiKey: "AIzaSyADk_VRBvOU5ZYU1uwKnnc1mVJ_Y1vRvJs",
  authDomain: "flower-d8b31.firebaseapp.com",
  projectId: "flower-d8b31",
  storageBucket: "flower-d8b31.firebasestorage.app",
  messagingSenderId: "68069184847",
  appId: "1:68069184847:web:f62559172990d6ba25e13a"
};

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
