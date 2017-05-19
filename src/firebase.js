import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCagxaydgRXthu5iwOl54QxSYOddW96nhM',
  authDomain: 'vue-photow.firebaseapp.com',
  databaseURL: 'https://vue-photow.firebaseio.com',
  projectId: 'vue-photow',
  storageBucket: 'vue-photow.appspot.com',
  messagingSenderId: '882721060227',
};

const firebaseApp = firebase.initializeApp(config);

export default firebaseApp;
