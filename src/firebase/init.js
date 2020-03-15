// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC5BcRxRhKOVWZNwP2zXCTWkZzxKbKeuVs",
    authDomain: "leadapp-2b408.firebaseapp.com",
    databaseURL: "https://leadapp-2b408.firebaseio.com",
    projectId: "leadapp-2b408",
    storageBucket: "leadapp-2b408.appspot.com",
    messagingSenderId: "76011264680",
    appId: "1:76011264680:web:bf64d2b3c1bf2d2303009d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const firebaseApp = firebase.firestore();
  export default firebaseApp