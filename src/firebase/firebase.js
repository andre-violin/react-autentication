import moduleName from 'firebase/app'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBNW2Uyo5A8eK1H2SNbckfZ_v9m75Ih-U4",
  authDomain: "todo-5354b.firebaseapp.com",
  databaseURL: "https://todo-5354b.firebaseio.com",
  projectId: "todo-5354b",
  storageBucket: "todo-5354b.appspot.com",
  messagingSenderId: "1002413178959"
}

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth()

export { auth }