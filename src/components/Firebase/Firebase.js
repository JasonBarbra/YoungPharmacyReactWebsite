import app from 'firebase';
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_Api_Key,
  authDomain: process.env.REACT_APP_Auth_Domain,
  projectId: process.env.REACT_APP_ProjectId,
  storageBucket: process.env.REACT_APP_StorageBucket,
  messagingSenderId: process.env.REACT_APP_MessagingSenderId,
  appId: process.env.REACT_APP_AppId,
};
// Initialize Firebase
class Firebase {
  lol = 'elo';
  db = null;
  firebase;
  constructor() {
    if (!firebase.apps.length) {
      app.initializeApp(firebaseConfig);
      this.db = firebase.firestore();
      this.lol = 'elo2';
    } else {
      firebase.app();
      console.log(firebase.app());
      this.lol = 'elo3';
    }
  }
}

export default Firebase;
