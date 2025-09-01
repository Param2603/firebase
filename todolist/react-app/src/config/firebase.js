import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDLPgkr5ZoGfVD9RC-e5YWAo36No1EOAy4",
  authDomain: "fir-todo-68842.firebaseapp.com",
  projectId: "fir-todo-68842",
  storageBucket: "fir-todo-68842.firebasestorage.app",
  messagingSenderId: "767454856373",
  appId: "1:767454856373:web:21f7ae9a3cb1194d1b2afc",
  measurementId: "G-T1DRS9PCVJ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };