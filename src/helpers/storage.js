// necessary because safari mobile errors on localStorage

// implement memory store spec'd to Storage prototype
// eslint-disable-next-line
;(function(window) {
  const items = {}

  function MemoryStorage() {}

  MemoryStorage.prototype.getItem = function(key) {
    return items[key]
  }

  MemoryStorage.prototype.setItem = function(key, value) {
    items[key] = value
  }

  MemoryStorage.prototype.removeItem = function(key) {
    items[key] = undefined
  }

  MemoryStorage.prototype.key = function(index) {
    return Object.keys(items)[index]
  }

  MemoryStorage.prototype.get = function() {
    return items
  }

  Object.defineProperty(MemoryStorage.prototype, 'length', {
    get: function length() {
      return Object.keys(items).length
    },
  })

  window.memoryStorage = new MemoryStorage()
})(window)

// helper function to swap to memory storage

function getStorage(storage) {
  const x = '__storage_test__'
  try {
    storage.setItem(x, x)
    storage.removeItem(x)
    return storage
  } catch (e) {
    return getStorage.prototype.FALLBACK_STORAGE
  }
}

getStorage.prototype.FALLBACK_STORAGE = window.memoryStorage

// Browser sync doesn't work correctly without local storage.
const foo = window.localStorage
// const foo = localStorage; // force fallback

const storage = getStorage(foo)

export default storage
