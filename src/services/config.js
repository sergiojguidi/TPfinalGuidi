import { initializeApp } from "firebase/app";
import {getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY_FIREBASE_CONFIG,
  authDomain: "ivess-tiendavirtual.firebaseapp.com",
  projectId: "ivess-tiendavirtual",
  storageBucket: "ivess-tiendavirtual.appspot.com",
  messagingSenderId: "821202649272",
  appId: "1:821202649272:web:1850e38b789b742085744d"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);