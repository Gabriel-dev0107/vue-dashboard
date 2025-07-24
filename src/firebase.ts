// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDh9PN_qk3PM5WMNoLvDgW8HkYUws2CFtM",
  authDomain: "vue-dashboard-0107.firebaseapp.com",
  projectId: "vue-dashboard-0107",
  storageBucket: "vue-dashboard-0107.firebasestorage.app",
  messagingSenderId: "490842069528",
  appId: "1:490842069528:web:c901f9d2668a7e1e66416d",
  measurementId: "G-S61DEP2YBC"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };