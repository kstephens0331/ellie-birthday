// /src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCc3bRTmGSy4bkm9n6kLnlXxDt4BGTrxEI",
  authDomain: "ellies-guestbook.firebaseapp.com",
  projectId: "ellies-guestbook",
  storageBucket: "ellies-guestbook.firebasestorage.app",
  messagingSenderId: "364330227714",
  appId: "1:364330227714:web:6c2114e77055cf53692f1b"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
