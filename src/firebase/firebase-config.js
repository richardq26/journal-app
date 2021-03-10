import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
var firebaseConfig = {
  apiKey: "AIzaSyBHe132ZjuPRwqBaC4EBesUK_5Y2lqkIVY",
  authDomain: "react-app-58ab1.firebaseapp.com",
  projectId: "react-app-58ab1",
  storageBucket: "react-app-58ab1.appspot.com",
  messagingSenderId: "1037029105618",
  appId: "1:1037029105618:web:a022664ec3aa525f67720b",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore;

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export{
    db, googleAuthProvider, firebase
}