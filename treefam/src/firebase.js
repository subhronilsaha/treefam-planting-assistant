import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDthy2mb-wLYd_Z9SwE6jEuxfEPLKg18RU",
    authDomain: "tree-fam.firebaseapp.com",
    databaseURL: "https://tree-fam.firebaseio.com",
    projectId: "tree-fam",
    storageBucket: "tree-fam.appspot.com",
    messagingSenderId: "1036769347273",
    appId: "1:1036769347273:web:aec075c24f7db61acd6f18",
    measurementId: "G-5C1J8ZJSL9"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;