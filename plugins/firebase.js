import firebase from 'firebase/app'
import 'firebase/auth'
import config from '~/firebase.config'

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export const authProviders = {
  Google: firebase.auth.GoogleAuthProvider.PROVIDER_ID
}

export const auth = firebase.auth()
