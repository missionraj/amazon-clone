import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAmAaR-pSGRqpzR5mcERdTu6bUB9wUGWHY",
    authDomain: "clone-f8ff9.firebaseapp.com",
    databaseURL: "https://clone-f8ff9.firebaseio.com",
    projectId: "clone-f8ff9",
    storageBucket: "clone-f8ff9.appspot.com",
    messagingSenderId: "994369649462",
    appId: "1:994369649462:web:496cab4b031ebf7c835197"
})

const auth = firebase.auth();

export { auth  };