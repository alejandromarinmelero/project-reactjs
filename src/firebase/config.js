// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqK2f70xVEmI1axsA73NTlFREwSie5ykM",
  authDomain: "b-nylfactory.firebaseapp.com",
  projectId: "b-nylfactory",
  storageBucket: "b-nylfactory.appspot.com",
  messagingSenderId: "68203450276",
  appId: "1:68203450276:web:1e3e696cc474235e52fb31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);