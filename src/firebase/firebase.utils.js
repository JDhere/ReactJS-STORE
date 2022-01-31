import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyAP5g5TGPZfTzs5ELjyUPmb6jE2JahvySY",
    authDomain: "crwn-db-49b7e.firebaseapp.com",
    projectId: "crwn-db-49b7e",
    storageBucket: "crwn-db-49b7e.appspot.com",
    messagingSenderId: "681591489263",
    appId: "1:681591489263:web:70d562957f26d51931d11a",
    measurementId: "G-B6MM2TFH8C"
};

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore =  firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;