import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAvMs3orPqclDtUUMEl7GwYDvuZ6DMajUQ",
    authDomain: "darkclothing-db.firebaseapp.com",
    databaseURL: "https://darkclothing-db.firebaseio.com",
    projectId: "darkclothing-db",
    storageBucket: "darkclothing-db.appspot.com",
    messagingSenderId: "316870922182",
    appId: "1:316870922182:web:0683a02c89a0776882acc7",
    measurementId: "G-H9Q493G87Y"
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// setup google authentication utility
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;