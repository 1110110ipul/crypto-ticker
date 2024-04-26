import firebase from "firebase/compat/app";
import {  getApps , initializeApp } from "firebase/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebaseConfig from "../firebaseConfig";

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const auth = firebase.auth();

export { auth };
export default firebase;
