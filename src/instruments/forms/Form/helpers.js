// faltten and stringify nested keys
export const unpack = (obj, ns, hash) => {
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
    if (key === 'urls') console.log(keys[1])
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
export const pack = obj => {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    const keys = key.split('.')

    return roll(keys, acc, value)
  }, {})
}
