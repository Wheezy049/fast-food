// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5b3GQNrJnCQJXNBYAyma76zJgYcv1xRE",
  authDomain: "fast-food-37a59.firebaseapp.com",
  projectId: "fast-food-37a59",
  storageBucket: "fast-food-37a59.appspot.com",
  messagingSenderId: "866488665053",
  appId: "1:866488665053:web:6021559da1164f658e2c34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export { auth }

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)