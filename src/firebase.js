// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA430JSBl9YQx3g_4qaBzID4eGBOcavMYc",
  authDomain: "test-7978c.firebaseapp.com",
  databaseURL: "https://test-7978c-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "test-7978c",
  storageBucket: "test-7978c.appspot.com",
  messagingSenderId: "319846323864",
  appId: "1:319846323864:web:ca99a1a7985099185162ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app)