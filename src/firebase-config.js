import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyA3IYvNdooXjERdBmb7fDB1JI0DM7mCYIQ",
    authDomain: "warehouse-management-3b344.firebaseapp.com",
    projectId: "warehouse-management-3b344",
    storageBucket: "warehouse-management-3b344.appspot.com",
    messagingSenderId: "950931636123",
    appId: "1:950931636123:web:2b8a98ef43cd7d4dc72b3e",
    measurementId: "G-VGM6ESM59W"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);