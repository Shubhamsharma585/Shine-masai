import firebase from "firebase/app";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyCFC5rWZHdsDcC3Fe6edJYFKM6sZmGk8LE",
  authDomain: "fire-login-react.firebaseapp.com",
  projectId: "fire-login-react",
  storageBucket: "fire-login-react.appspot.com",
  messagingSenderId: "624213465070",
  appId: "1:624213465070:web:eb38f4cb13ea8ef6dea0ff"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const google = new firebase.auth.GoogleAuthProvider();

export { auth, google };