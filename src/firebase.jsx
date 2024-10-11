// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB-VIMzvH0bEA0e15gQF5PJbaNBG3JEw7U",
  authDomain: "bynry-89b9b.firebaseapp.com",
  projectId: "bynry-89b9b",
  storageBucket: "bynry-89b9b.appspot.com",
  messagingSenderId: "157666783639",
  appId: "1:157666783639:web:f174a5f1748271edea14d2",
  measurementId: "G-F5HE1PTCRX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const auth = getAuth(app);

export { auth, storage };
