import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA2eKZQygoixj3Ux0FtrBxgZWsjuib8vtQ",
  authDomain: "group-chat-d6ad5.firebaseapp.com",
  projectId: "group-chat-d6ad5",
  storageBucket: "group-chat-d6ad5.appspot.com",
  messagingSenderId: "466620684321",
  appId: "1:466620684321:web:e74b105b6207e173c2eb60",
  measurementId: "G-VXFJTGECD6"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
