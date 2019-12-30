import { auth } from '~/plugins/firebase'

export default async function({ store, route, redirect }) {
  await auth.onAuthStateChanged((user) => {
    if (user) {
      store.dispatch('auth/setUser', user)
    }
  })
}
