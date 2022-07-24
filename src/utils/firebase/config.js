import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

//Configuración de nuestra app en Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCqK2f70xVEmI1axsA73NTlFREwSie5ykM",
  authDomain: "b-nylfactory.firebaseapp.com",
  projectId: "b-nylfactory",
  storageBucket: "b-nylfactory.appspot.com",
  messagingSenderId: "68203450276",
  appId: "1:68203450276:web:1e3e696cc474235e52fb31"
};

//Inicializar Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);