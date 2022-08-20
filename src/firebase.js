import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBuwebJgQWGKUdO2Y3DI3BhYpQXxQLRpRQ",
    authDomain: "firestore-database-a2257.firebaseapp.com",
    projectId: "firestore-database-a2257",
    storageBucket: "firestore-database-a2257.appspot.com",
    messagingSenderId: "540551890671",
    appId: "1:540551890671:web:ad794cad13c87e90b1bd1a",
    measurementId: "G-4CD5TRD9JV"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp
