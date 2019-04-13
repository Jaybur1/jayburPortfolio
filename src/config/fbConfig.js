  import firebase from 'firebase/app';
  import 'firebase/firestore';
  import 'firebase/auth';
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDVtFs-td2ifMv2Prn7la_6YQfLJmn3hxQ",
    authDomain: "jay-burbyga.firebaseapp.com",
    databaseURL: "https://jay-burbyga.firebaseio.com",
    projectId: "jay-burbyga",
    storageBucket: "jay-burbyga.appspot.com",
    messagingSenderId: "1021460868486"
  };
  firebase.initializeApp(config);

  export default firebase;