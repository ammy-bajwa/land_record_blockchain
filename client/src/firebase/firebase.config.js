// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXVgGW6st-QSpYUj3vGqJZnu-cpT-EJNM",
  authDomain: "landapp-dda97.firebaseapp.com",
  databaseURL: "https://landapp-dda97.firebaseio.com",
  projectId: "landapp-dda97",
  storageBucket: "landapp-dda97.appspot.com",
  messagingSenderId: "342209521856",
  appId: "1:342209521856:web:b6d95a410cb63a40f32525",
  measurementId: "G-DKZCLM1VX0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const fireStore = firebase.firestore();

export default firebase;
