import workers from './workers'
import { blob } from './env'

export default {
  ...workers,
}

const m1 = blob.match(/\n(.*?) =/g)
const m2 = m1.map(m =>
  m
    .slice(1)
    .replace(' =', '')
    .replace('#', '')
    .trim()
)

const m3 = {}
m2.forEach(m => {
  if (!~m.indexOf('Ex:')) m3[m] = ''
})
console.log(JSON.stringify(m3))
