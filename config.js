import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDysAoH1PIs9ZVl0txRT_6JkDi8ACYggyQ",
  authDomain: "e-ride-57c5b.firebaseapp.com",
  databaseURL: "https://e-ride-57c5b-default-rtdb.firebaseio.com",
  projectId: "e-ride-57c5b",
  storageBucket: "e-ride-57c5b.appspot.com",
  messagingSenderId: "322721778490",
  appId: "1:322721778490:web:8fb8b4d533bd925d29de03"
};
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
