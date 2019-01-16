import app from 'firebase/app';
import 'firebase/auth';

var config = {
  apiKey: "AIzaSyD9dEdfBmvk0YHiViVCz6kOTR97Sc6C61U",
  authDomain: "test-authenticate-25b99.firebaseapp.com",
  databaseURL: "https://test-authenticate-25b99.firebaseio.com",
  projectId: "test-authenticate-25b99",
  storageBucket: "test-authenticate-25b99.appspot.com",
  messagingSenderId: "548699867712"
};

export default class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
  }

  doCreateUserWithEmailAndPassword = (email, password) =>
      this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
      this.auth.signInWithEmailAndPassword(email, password);
  
  doSignOut = () => {
    console.log('signing out user');
    this.auth.signOut();
  }

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);

}
