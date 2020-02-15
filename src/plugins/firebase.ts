import firebase from 'firebase'
require('firebase/firestore')

// const config = {
//   apiKey: process.env.FRB_API_KEY,
//   authDomain: process.env.FRB_AUTH_DOMAIN,
//   databaseURL: process.env.FRB_DATABASE_URL,
//   projectId: process.env.FRB_PROJECT_ID,
//   storageBucket: process.env.FRB_STORAGE_BUCKET,
//   messagingSenderId: process.env.FRB_MESSAGING_SENDER_ID,
//   appId: process.env.FRB_APP_ID,
//   measurementId: process.env.FRB_MESSAGING_SENDER_ID,
// }
const firebaseConfig = {
  apiKey: 'AIzaSyC_iqe3dxnC29ccwUiexazBqBXQ3VJUGmI',
  authDomain: 'hz-healing-music.firebaseapp.com',
  databaseURL: 'https://hz-healing-music.firebaseio.com',
  projectId: 'hz-healing-music',
  storageBucket: 'hz-healing-music.appspot.com',
  messagingSenderId: '1060518047944',
  appId: '1:1060518047944:web:eb358cf9cd184d1c79f5fd',
  measurementId: 'G-WPGLH004RN',
}

if (!firebase.apps.length) {
  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const firestore = firebaseApp.firestore()
  firestore.enablePersistence()
}

export const authProviders = {
  Google: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
}
export default firebase
// export const auth = firebase.auth()
