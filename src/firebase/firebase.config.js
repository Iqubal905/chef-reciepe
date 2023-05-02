// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPR4QWhi9tQDd8Wm_96FXZHKLv65wfvF4",
  authDomain: "recipes-assignment-auth.firebaseapp.com",
  projectId: "recipes-assignment-auth",
  storageBucket: "recipes-assignment-auth.appspot.com",
  messagingSenderId: "212903919450",
  appId: "1:212903919450:web:1ff7801b5942054d3efd63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app