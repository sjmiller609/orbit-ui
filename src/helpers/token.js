import storage from './storage'

// A wrapper around storage.getItem('token') to stringify and include expirey date

const auth = {
  set: ({ token, exp }) => {
    storage.setItem(
      'token',
      JSON.stringify({
        token,
        exp,
      })
    )
  },
  get: () => {
    const t = storage.getItem('token')
    return JSON.parse(t)
  },
  remove: () => storage.removeItem('token'),
}

export default auth
