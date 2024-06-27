
import { initializeApp } from "firebase/app";
const apiKey = process.env.API_KEY;


const firebaseConfig = {
    apiKey: apiKey,
    authDomain: "andriitopiicom.firebaseapp.com",
    databaseURL: "https://andriitopiicom-default-rtdb.firebaseio.com",
    projectId: "andriitopiicom",
    storageBucket: "andriitopiicom.appspot.com",
    messagingSenderId: "539154458834",
    appId: "1:539154458834:web:47baf222a08a9865b4a50b"
};


export  const   app = initializeApp(firebaseConfig);