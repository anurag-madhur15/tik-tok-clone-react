import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAMQyOJk8mre69UrnZgC3oWcWZtN0XTnCU",
    authDomain: "tik-tok-clone-e63f4.firebaseapp.com",
    databaseURL: "https://tik-tok-clone-e63f4.firebaseio.com",
    projectId: "tik-tok-clone-e63f4",
    storageBucket: "tik-tok-clone-e63f4.appspot.com",
    messagingSenderId: "801715353438",
    appId: "1:801715353438:web:d0137e6f3aa10eb4ad41cf",
    measurementId: "G-DMLVDEJCN6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();

  export default db;