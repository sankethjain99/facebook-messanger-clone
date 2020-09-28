import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
apiKey: "AIzaSyCyB0v1fU8K1i2mLs601pDYDHqmAK_UVG4",
  authDomain: "messanger-clone-a57f9.firebaseapp.com",
  databaseURL: "https://messanger-clone-a57f9.firebaseio.com",
  projectId: "messanger-clone-a57f9",
  storageBucket: "messanger-clone-a57f9.appspot.com",
  messagingSenderId: "198487656939",
  appId: "1:198487656939:web:a60b0bb42504e7300a71ae",
  measurementId: "G-KDYD3B3YNR"
});

const db=firebase.firestore();

export default db;