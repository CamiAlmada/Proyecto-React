
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBoPQuBLo8Eh2tvVfVYJApmkPVLlE_MYEI",
  authDomain: "proyecto-react-a1fe8.firebaseapp.com",
  projectId: "proyecto-react-a1fe8",
  storageBucket: "proyecto-react-a1fe8.appspot.com",
  messagingSenderId: "840579319192",
  appId: "1:840579319192:web:c16fd9c3b340f7ac1197ed"
};


const app = initializeApp(firebaseConfig);

export const db= getFirestore(app)