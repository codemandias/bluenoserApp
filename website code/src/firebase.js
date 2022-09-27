// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth"
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0xMqR5rKQe-urtVP-CbE3jQeX_bhdW3s",
  authDomain: "beach-bluenoser.firebaseapp.com",
  databaseURL: "https://beach-bluenoser-default-rtdb.firebaseio.com",
  projectId: "beach-bluenoser",
  storageBucket: "beach-bluenoser.appspot.com",
  messagingSenderId: "447744579579",
  appId: "1:447744579579:web:bccc487b8fff5ee6b69d5e",
  measurementId: "G-5VE7HR7146"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
const auth = getAuth(app);
export const storage = getStorage(app);
export default firestore;
