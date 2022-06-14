// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJewDCwb4aR_AaW5zBT-7YaKVS_XGLg2Q",
  authDomain: "uploadimage-c974c.firebaseapp.com",
  projectId: "uploadimage-c974c",
  storageBucket: "uploadimage-c974c.appspot.com",
  messagingSenderId: "480819688163",
  appId: "1:480819688163:web:2c90331f182fe481c0cbd6",
  measurementId: "G-VBSKKNK78G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
