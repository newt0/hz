// // cookie storage による store の永続化

// import createPersistedState from 'vuex-persistedstate'
// import * as Cookies from 'js-cookie'
// import cookie from 'cookie'

// export default ({ store, req, isDev }) => {
//   createPersistedState({
//     key: 'hz-healing-music',
//     storage: {
//       getItem: (key) =>
//         process.client
//           ? Cookies.getJSON(key)
//           : cookie.parse(req.headers.cookie || '')[key],
//       setItem: (key, value) =>
//         Cookies.set(key, value, { expires: 365, secure: !isDev }), // 365日間 cookie storage を保持する
//       removeItem: (key) => Cookies.remove(key)
//     }
//   })(store)
// }
