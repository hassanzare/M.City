// import firebase from "firebase/app";
// import "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB1sNW4y3XBXIz1xVAfjw6tPcr-JaNQ6j4",
  authDomain: "mcity-a972a.firebaseapp.com",
  projectId: "mcity-a972a",
  storageBucket: "mcity-a972a.appspot.com",
  messagingSenderId: "303398376837",
  appId: "1:303398376837:web:ed111e63503cfcfff0a0ec",
  measurementId: "G-EJE477SGSV",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export { firebase };
