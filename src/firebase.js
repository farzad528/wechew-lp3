import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAsCKpBRb13PKExWkczOGQk1pMISSFprDA",
  authDomain: "wechew-4dbb8.firebaseapp.com",
  projectId: "wechew-4dbb8",
  storageBucket: "wechew-4dbb8.appspot.com",
  messagingSenderId: "622349207110",
  appId: "1:622349207110:web:5ae0ab070a666b6f876c47",
  measurementId: "G-BMWYRW1F3N",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export { database };
