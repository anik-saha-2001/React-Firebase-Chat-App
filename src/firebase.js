// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkMIJlAWi8IkV6zeWP0NohUck6zcq24Kk",
  authDomain: "anik-react-chatapp.firebaseapp.com",
  projectId: "anik-react-chatapp",
  storageBucket: "anik-react-chatapp.appspot.com",
  messagingSenderId: "416297346516",
  appId: "1:416297346516:web:f797a52755c9e9c9266241",
  measurementId: "G-DMSNKETY36"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);