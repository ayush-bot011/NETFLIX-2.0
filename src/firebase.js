import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBdjTToTir5EM1bJVfCmhk7Kj_tzFzCiLs",
  authDomain: "netflix-clone-72a47.firebaseapp.com",
  projectId: "netflix-clone-72a47",
  storageBucket: "netflix-clone-72a47.appspot.com",
  messagingSenderId: "745480277766",
  appId: "1:745480277766:web:bf0df6244f6ff4c1b29887"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };