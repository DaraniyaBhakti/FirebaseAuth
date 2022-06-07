// Import the functions you need from the SDKs you need
import * as firebase from "firebase/compat/app";
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCryEicHxL2VvpJFY5eoU4NvRTn-VURpkc",
  authDomain: "fir-auth-db7de.firebaseapp.com",
  projectId: "fir-auth-db7de",
  storageBucket: "fir-auth-db7de.appspot.com",
  messagingSenderId: "522330776946",
  appId: "1:522330776946:web:022d9a909f57ed2f39a9eb"
};

// Initialize Firebase
let app;
if(firebase.apps.length === 0){
    app = initializeApp(firebaseConfig);
}else{
    app = firebase.app();
}

const auth = getAuth(app);
export {auth}