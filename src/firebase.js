// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACzKcfwbNjhmh1dA8ufFdrlaJmH0m-oAk",
  authDomain: "dessert-shop-641cc.firebaseapp.com",
  projectId: "dessert-shop-641cc",
  storageBucket: "dessert-shop-641cc.firebasestorage.app",
  messagingSenderId: "333894261194",
  appId: "1:333894261194:web:94d8e5bab64306b412d733",
  measurementId: "G-SHVJ3ZZZEK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);