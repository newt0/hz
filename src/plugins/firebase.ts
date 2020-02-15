import firebase from 'firebase'
require('firebase/firestore')

const firebaseConfig = {
  apiKey: process.env.FRB_API_KEY,
  authDomain: process.env.FRB_AUTH_DOMAIN,
  databaseURL: process.env.FRB_DATABASE_URL,
  projectId: process.env.FRB_PROJECT_ID,
  storageBucket: process.env.FRB_STORAGE_BUCKET,
  messagingSenderId: process.env.FRB_MESSAGING_SENDER_ID,
  appId: process.env.FRB_APP_ID,
  measurementId: process.env.FRB_MESSAGING_SENDER_ID,
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
