import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyCeqccc14GlAys8ABMn4mN-pzrS7Yxjrc8",
  authDomain: "whatsapp-clone-e540f.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-e540f.firebaseio.com",
  projectId: "whatsapp-clone-e540f",
  storageBucket: "whatsapp-clone-e540f.appspot.com",
  messagingSenderId: "631914089082",
  appId: "1:631914089082:web:ab7649aaa96fbd86f749c3",
  measurementId: "G-38Y7F0NQEL"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider};
export default db;