// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD77OK4Mn9eiBQ_IuF9wEn5UKt5YmWzo2o",
  authDomain: "proyectofinal-salgado.firebaseapp.com",
  projectId: "proyectofinal-salgado",
  storageBucket: "proyectofinal-salgado.appspot.com",
  messagingSenderId: "605585032695",
  appId: "1:605585032695:web:87d883b4b3acbc77ecdaf2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);