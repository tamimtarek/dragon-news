// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD59AxqaIz-WpTXFn52Or-oopIv-_UMa0Q",
  authDomain: "dragon-news-3200a.firebaseapp.com",
  projectId: "dragon-news-3200a",
  storageBucket: "dragon-news-3200a.appspot.com",
  messagingSenderId: "325527418427",
  appId: "1:325527418427:web:1a7a14b28dbe6d31438e1e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth