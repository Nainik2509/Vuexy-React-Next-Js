// Import the functions you need from the SDKs you need
import Firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyADEswwwrcHdQpkZZ7b-zgcEnVSPJhjvPY',
  authDomain: 'master-nextjs-bdf1d.firebaseapp.com',
  projectId: 'master-nextjs-bdf1d',
  storageBucket: 'master-nextjs-bdf1d.appspot.com',
  messagingSenderId: '248070396679',
  appId: '1:248070396679:web:c4dfd73dfbf7f8c80703a2',
  measurementId: 'G-K5RP8EJ0NC'
}

// Initialize Firebase
if (!Firebase.apps.length) {
  Firebase.initializeApp(firebaseConfig)
}

export default Firebase
