
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZv5xrfNCO8SVgqGE0ktCbHpTDeFLR5A4",
  authDomain: "achievement-unlocked-df26f.firebaseapp.com",
  projectId: "achievement-unlocked-df26f",
  storageBucket: "achievement-unlocked-df26f.appspot.com",
  messagingSenderId: "150388278665",
  appId: "1:150388278665:web:cdc527ac95f19774a94d58",
  measurementId: "G-2RLBBDDLT4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
