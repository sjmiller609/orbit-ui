import storage from './storage'

// A wrapper around storage.getItem('token') to stringify and include expirey date
// TODO: Remove userId
const auth = {
  set: ({ token, exp, userId }) => {
    storage.setItem(
      'token',
      JSON.stringify({
        token,
        exp,
        userId,
      })
    )
  },
  get: () => {
    const t = storage.getItem('token')
    if (!t) return {}
    try {
      return JSON.parse(t)
    } catch (error) {
      storage.removeItem('token')
      return {}
    }
  },
  remove: () => storage.removeItem('token'),
}

export default auth
