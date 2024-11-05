// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAVs3_vyHJzraCVnRTZW73Tavjer6nmnqw",
  authDomain: "react-curd-opretion.firebaseapp.com",
  projectId: "react-curd-opretion",
  storageBucket: "react-curd-opretion.appspot.com",
  messagingSenderId: "459847486057",
  appId: "1:459847486057:web:cef346cdcb0f6961a830f8",
  measurementId: "G-ZE5MKSTB5S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
