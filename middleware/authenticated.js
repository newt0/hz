import { auth } from '~/plugins/firebase'

export default async function({ store, route, redirect }) {
  await auth.onAuthStateChanged((user) => {
    if (user) {
      // if (route.name === 'login') redirect('/')
      store.dispatch('auth/setUser', user)
      // store.dispatch('auth/logout')
    }
  })
}
