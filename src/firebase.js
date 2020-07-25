import app from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAyHulWkdgHe4TuByyuc3fc2hoYNiyJZ3U",
  authDomain: "test-ffa81.firebaseapp.com",
  databaseURL: "https://test-ffa81.firebaseio.com",
  projectId: "test-ffa81",
  storageBucket: "test-ffa81.appspot.com",
  messagingSenderId: "899230237591",
  appId: "1:899230237591:web:c3d1e7340e26ad6fd0bad2",
  measurementId: "G-3F9H53JBD4",
};

class Firestore {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.firestore = app.firestore();
    this.auth = app.auth();
    // this.auth.signInWithEmailAndPassword();
  }
  doSignInWithEmailAndPassword(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }
}

export default new Firestore();
