import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDxvZDYEiQLw1FYFIKEojK8dXzQxWiY08s',
  authDomain: 'vue-calendar-a915d.firebaseapp.com',
  databaseURL: 'https://vue-calendar-a915d.firebaseio.com',
  projectId: 'vue-calendar-a915d',
  storageBucket: 'vue-calendar-a915d.appspot.com',
  messagingSenderId: '1011366733158',
  appId: '1:1011366733158:web:8757adca9c1cfadd5f54a7',
};

// init firebase
firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, timestamp };
