import firebase from 'firebase';

var config = {
  apiKey: 'AIzaSyBoI_GMKEmv-UJaNeG_EfwpLLOjAMnGiSY',
  authDomain: 'databrokerdao-presale.firebaseapp.com',
  databaseURL: 'https://databrokerdao-presale.firebaseio.com',
  storageBucket: 'databrokerdao-presale.appspot.com',
};
firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();

export default database;
