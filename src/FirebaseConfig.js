import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_API_KEY,
//   authDomain: import.meta.env.VITE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,  // Corrected key name
//   appId: import.meta.env.VITE_APP_ID,
//   measurementId: import.meta.env.VITE_MEASUREMENT_ID
// };

const firebaseConfig = {
  apiKey: "AIzaSyBPvGldo8ATVmbqF2LlTZ99MUOVgl1nBPg",
  authDomain: "jobiverse-dfe88.firebaseapp.com",
  projectId: "jobiverse-dfe88",
  storageBucket: "jobiverse-dfe88.firebasestorage.app",
  messagingSenderId: "652370820744",
  appId: "1:652370820744:web:7f5bd43fd341a664be293d",
  measurementId: "G-Y5X3FR1085"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
console.log(import.meta.env)