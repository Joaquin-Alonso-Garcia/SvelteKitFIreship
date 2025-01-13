// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_MTGZ9L-YMvyL8tvNuEhVD-5o7LxlVdE",
  authDomain: "sveltekitcourse-8cdd8.firebaseapp.com",
  projectId: "sveltekitcourse-8cdd8",
  storageBucket: "sveltekitcourse-8cdd8.firebasestorage.app",
  messagingSenderId: "497574348690",
  appId: "1:497574348690:web:14e68da7c5d9180f96634b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();