// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBHfBSjY2KmCLcdeT2OTMBduMs2M4UNzdY",
  authDomain: "whatsapp-clone123.firebaseapp.com",
  projectId: "whatsapp-clone123",
  storageBucket: "whatsapp-clone123.appspot.com",
  messagingSenderId: "116604427626",
  appId: "1:116604427626:web:8fda414dd58c6ae8235913",
  measurementId: "G-X32EWTV60H",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;
