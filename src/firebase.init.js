// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTX5BhWnMMQoSXhfrmnw-GfzJrwqBxEqo",
  authDomain: "as-sunnah-store.firebaseapp.com",
  projectId: "as-sunnah-store",
  storageBucket: "as-sunnah-store.appspot.com",
  messagingSenderId: "1000940797240",
  appId: "1:1000940797240:web:fcab3992d61294d76815cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;