import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDpGRdESjxzLDyNDAcQJMMcnWVphFdnKHA",
    authDomain: "chat-app-479a0.firebaseapp.com",
    projectId: "chat-app-479a0",
    storageBucket: "chat-app-479a0.appspot.com",
    messagingSenderId: "19176770905",
    appId: "1:19176770905:web:17f0fb7f7ef5b27fbe9048"
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider};