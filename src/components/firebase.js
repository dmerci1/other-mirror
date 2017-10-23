import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyAlmOqNqL0-tO75zFiVedv9cV4am61QoSA",
    authDomain: "mirror-assistant-55fdd.firebaseapp.com",
    databaseURL: "https://mirror-assistant-55fdd.firebaseio.com",
    projectId: "mirror-assistant-55fdd",
    storageBucket: "",
    messagingSenderId: "624776421400"
  };
  firebase.initializeApp(config);
  export const provider = new firebase.auth.GoogleAuthProvider();
  export const auth = firebase.auth();
  export default firebase;