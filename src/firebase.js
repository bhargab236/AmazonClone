import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCeKZAbQjPJdy4VmTO7F3cDAU4D5aebj68",
  authDomain: "clone-9fb0c.firebaseapp.com",
  projectId: "clone-9fb0c",
  storageBucket: "clone-9fb0c.appspot.com",
  messagingSenderId: "899020660405",
  appId: "1:899020660405:web:134771dff643df8e8228fc",
  measurementId: "G-MCRVJHPSMG"
});

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
