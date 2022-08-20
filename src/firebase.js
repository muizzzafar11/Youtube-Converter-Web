import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {

};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp
