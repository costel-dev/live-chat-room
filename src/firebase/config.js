import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDPkFCmF-ySB_6lptr3cKr2cHVK-88c6PU',
  authDomain: 'chat-4friends.firebaseapp.com',
  projectId: 'chat-4friends',
  storageBucket: 'chat-4friends.appspot.com',
  messagingSenderId: '120323012726',
  appId: '1:120323012726:web:2e7e2440cbd55203020757',
};

// init firebase
firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, timestamp };
