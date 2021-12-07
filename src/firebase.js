import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyABNwp1T4TJzIHNh_hDCy7jnb_zUMgms4s",
    authDomain: "disneyplus-clone-693b2.firebaseapp.com",
    projectId: "disneyplus-clone-693b2",
    storageBucket: "disneyplus-clone-693b2.appspot.com",
    messagingSenderId: "85167849533",
    appId: "1:85167849533:web:094f3df433793f8b3fea54",
    measurementId: "G-XF9560D1YD",
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth , provider, storage} ;
export default db;