import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAe6fbL87crDTdXvDPnHJKZ0ZMrGmKTvv4",
  authDomain: "grocery-stor-7ec99.firebaseapp.com",
  projectId: "grocery-stor-7ec99",
  storageBucket: "grocery-stor-7ec99.appspot.com",
  messagingSenderId: "909637689584",
  appId: "1:909637689584:web:d84f487ff7d37ab36be235",
  measurementId: "G-JX2BPX0SW2"
};
  firebase.initializeApp(firebaseConfig);
  let auth =firebase.auth();
  export {auth};