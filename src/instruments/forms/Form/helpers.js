// faltten and stringify nested keys
export const unpack = (obj, ns, hash) => {
  if (!obj) return
  return Object.entries(obj).reduce((acc, [key, value]) => {
    const keypath = ns ? `${ns}.${key}` : key
    if (value && typeof value === 'object') {
      return unpack(value, keypath, acc)
    }
    acc[keypath] = value
    return acc
  }, hash || {})
}

const roll = (keys, obj, value) => {
  const key = keys[0]
  // case 1 - not obj
  if (keys.length === 1) {
    obj[key] = value
    return obj
  }
  // case 2 - doesn't exist
  if (!obj[key]) {
    obj[key] = isNaN(keys[1]) ? {} : []
  }
  // case 3 - exists
  obj[key] = roll(
    keys.slice(1),
    Array.isArray(obj[key]) ? [...obj[key]] : { ...obj[key] },
    value
  )

  return obj
}

// convert back into obj
export const pack = (obj, type = {}) => {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    const keys = key.split('.')

    return roll(keys, acc, value)
  }, type)
}

export const packChild = ({ name, obj }) => {
  const obj2 = {}
  let isArray
  Object.entries(obj).forEach(k => {
    if (name.length < k[0].length && k[0].indexOf(name) === 0) {
      const n = k[0].slice(name.length + 1)
      // must be true for all matching
      isArray = !isNaN(n.slice(0, n.indexOf('.')))
      obj2[n] = k[1]
    }
  })
  if (Object.keys(obj2).length) return pack(obj2, isArray ? [] : {})
  return null
}

export const removeChild = ({ name, obj = {} }) => {
  const obj2 = {}
  Object.entries(obj).forEach(k => {
    if (name.length >= k[0].length || k[0].indexOf(name) !== 0) {
      obj2[k[0]] = k[1]
    }
  })
  return obj2
}
