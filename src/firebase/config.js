import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBRSPlOqdoQwCZchUxRtOJp7j-QQNAUn1g",
  authDomain: "hype-eea93.firebaseapp.com",
  projectId: "hype-eea93",
  storageBucket: "hype-eea93.appspot.com",
  messagingSenderId: "447319643964",
  appId: "1:447319643964:web:a33a6ff70c28080939f039",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const firestore = firebase.firestore();
const firebaseAuth = firebase.auth();
const firebaseStorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { firestore, firebaseAuth, firebaseStorage, timestamp };
