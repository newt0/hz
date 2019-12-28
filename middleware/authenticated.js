import { auth } from '~/plugins/firebase.js'

export default function({ route, store, redirect }) {
  auth.onAuthStateChanged((user) => {
    if (user) {
      if (route.name === 'login') redirect('/')
      store.dispatch('auth/gotUser', user)
      // store.dispatch('auth/logout')
    } else {
      if (route.name !== 'login') redirect('/login')
    }
  })
}
