import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCv4EtrOyBDHrdLwwK1XLQe1KvKKNOo4jk",
  authDomain: "food-order-app-1a612.firebaseapp.com",
  projectId: "food-order-app-1a612",
  storageBucket: "food-order-app-1a612.appspot.com",
  messagingSenderId: "776860964495",
  appId: "1:776860964495:web:e7a1a8152b12f795d582fa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// init services
export const db = getFirestore();
export const auth = getAuth();

export const colRef = collection(db, "menu");
