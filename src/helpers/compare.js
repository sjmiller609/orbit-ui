import { inspect } from 'util'

export const isEqual = (a, b) => {
  if ((!a && !b) || a === b) return true
  return false
}

// compare two objects for equality
// use inspect to remove circular references (will error)
export const jsonEqual = (a, b) => {
  if (typeof a !== 'object' && typeof b !== 'object') return isEqual(a, b)
  return JSON.stringify(inspect(a)) === JSON.stringify(inspect(b))
}

// use this to search for matches of a query inside text,
// but rather than just exact match, search for each word independently
export const searchText = (query, text) => {
  const q = query.trim()
  //The parenthesis in the regex creates a captured group within the quotes
  const myRegexp = /[^\s"]+|"([^"]*)"/gi
  const arr = []

  let match
  do {
    // Each call to exec returns the next regex match as an array
    match = myRegexp.exec(q)
    if (match != null) {
      //Index 1 in the array is the captured group if it exists
      //Index 0 is the matched text, which we use if no captured group exists
      arr.push(match[1] ? match[1] : match[0])
    }
  } while (match != null)

  return arr.every(a => ~text.toLowerCase().indexOf(a.toLowerCase()))
}
