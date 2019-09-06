import storage from './storage';
import decode from 'jwt-decode';

// A wrapper around storage.getItem('token') to stringify
const auth = {
  set: ({ token }) => {
    storage.setItem(
      'token',
      JSON.stringify({
        token,
      }),
    );
  },
  get: () => {
    const t = storage.getItem('token');
    if (!t) return {};
    try {
      return JSON.parse(t);
    } catch (error) {
      storage.removeItem('token');
      return {};
    }
  },
  remove: () => storage.removeItem('token'),
  isExpired: (token) => {
    let exp = 0;
    try {
      const jwt = decode(token);
      exp = jwt.exp || 0;
    } catch (e) {
      return true;
    }
    const now = Math.round(new Date().getTime() / 1000);
    return exp <= now;
  },
};

export default auth;
