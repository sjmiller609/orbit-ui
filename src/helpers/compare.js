import { inspect } from 'util'

// compare two objects for equality
// use inspect to remove circular references (will error)
export const jsonEqual = (a, b) =>
  JSON.stringify(inspect(a)) === JSON.stringify(inspect(b))
