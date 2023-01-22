import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'

//const firebaseConfig = {
  //apiKey: "AIzaSyD5Kj7NU256TKVncdOCy_TELSmdRrEAH4c",
  //authDomain: "task-manager-1e712.firebaseapp.com",
  //projectId: "task-manager-1e712",
  //storageBucket: "task-manager-1e712.appspot.com",
  //messagingSenderId: "935257286219",
  //appId: "1:935257286219:web:d88cfe3837e8e9a4e2cfce"
//};
const firebaseConfig = {
  apiKey: "AIzaSyDAk3DCgtBbjYhIiQRB4TSrje1EP6CnM4k",
  authDomain: "react-todo-eb3ae.firebaseapp.com",
  projectId: "react-todo-eb3ae",
  storageBucket: "react-todo-eb3ae.appspot.com",
  messagingSenderId: "529319946390",
  appId: "1:529319946390:web:d371e10788b58d054f3ab7",
  measurementId: "G-0GYQT5Y7RF"
};
// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {db}