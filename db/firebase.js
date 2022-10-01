// database/firebaseDb.js
import * as firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyB-bUBS0j_yuxGZxGRQ7WsI45vSjG7Svxo",
  authDomain: "interviewpal-a586e.firebaseapp.com",
  projectId: "interviewpal-a586e",
  storageBucket: "interviewpal-a586e.appspot.com",
  messagingSenderId: "561087502698",
  appId: "1:561087502698:web:48374c6a29295ea1ef6d13",
  measurementId: "G-8815FVBJ2P"
};
firebase.initializeApp(firebaseConfig);

export default firebase;