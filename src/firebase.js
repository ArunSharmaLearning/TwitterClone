import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyD9TZiJx5-i7HTBJFD0GVySniwZ0Bw_HJY",
  authDomain: "vibra-2e3b7.firebaseapp.com",
  databaseURL: "https://vibra-2e3b7.firebaseio.com",
  projectId: "vibra-2e3b7",
  storageBucket: "vibra-2e3b7.appspot.com",
  messagingSenderId: "450333509415",
  appId: "1:450333509415:web:d424eaf7c0a113bbfa8b02",
  measurementId: "G-SJR1W47E2D"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

var db = firebaseApp.firestore();

export default db;