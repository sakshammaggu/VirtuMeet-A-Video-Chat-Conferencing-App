// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-virtumeet.firebaseapp.com",
  projectId: "mern-virtumeet",
  storageBucket: "mern-virtumeet.appspot.com",
  messagingSenderId: "499882880863",
  appId: "1:499882880863:web:fecfcb86b314d6a4a710ea"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);