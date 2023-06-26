
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCmnBlIvfhNPWqeJIoYuzPdYXtri9Zy-XM",
  authDomain: "react-portfolio-sanskar.firebaseapp.com",
  projectId: "react-portfolio-sanskar",
  storageBucket: "react-portfolio-sanskar.appspot.com",
  messagingSenderId: "261892680672",
  appId: "1:261892680672:web:a2387f3f260053e54e1985"
};

export const app = initializeApp(firebaseConfig);
export const db=getFirestore()