import firebase from "firebase/compat/app"
import "firebase/compat/database"
import ReduxSagaFirebase from "redux-saga-firebase"

const firebaseConfig = {
  apiKey: "AIzaSyD36leSi1E6bid9xZ3i9cHXMDq_37OT5Kg",
  authDomain: "myquickprofile-7b829.firebaseapp.com",
  projectId: "myquickprofile-7b829",
  storageBucket: "myquickprofile-7b829.appspot.com",
  messagingSenderId: "166842178962",
  appId: "1:166842178962:web:7690d3e8137705abc1354b",
  databaseURL:
    "https://myquickprofile-7b829-default-rtdb.europe-west1.firebasedatabase.app",
  measurementId: "G-0KE5ZB618N",
}

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)
const rsf = new ReduxSagaFirebase(app)
const databaseRef = app.database().ref().child(process.env.NODE_ENV)
export { app, databaseRef, rsf }
