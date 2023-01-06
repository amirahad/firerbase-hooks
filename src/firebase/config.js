import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAWKbnoHtSaEhq15LTWlngWTtci7C2xbSU",
    authDomain: "book-list-d0789.firebaseapp.com",
    projectId: "book-list-d0789",
    storageBucket: "book-list-d0789.appspot.com",
    messagingSenderId: "264418982456",
    appId: "1:264418982456:web:041ee318ec7cb2692dc4cd"
};

// Initialize Firebase
initializeApp(firebaseConfig)

// Initialize Auth
 const auth = getAuth();



// Initialize firestore
const db = getFirestore();

export { db,auth }

