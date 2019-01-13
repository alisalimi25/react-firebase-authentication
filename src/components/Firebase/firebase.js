import app from 'firebase/app';

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
  }
}
