import { jsonEqual } from 'helpers/compare'

// functions that convert the value into a display value
export const workerTerminationConvert = (v, out) => {
  if (out) return v * 60
  return Math.round(v / 60 * 10) / 10
}
export const workerTerminationUnits = v => {
  if (v >= 60) {
    const hrs = Math.round(v / 60 * 10) / 10
    return 'min (' + hrs.toString() + 'h)'
  }
  return 'min'
}
export const workerSizeConvert = (v, out, sizes) => {
  if (out) return sizes[v]
  let size
  Object.keys(sizes).some(k => {
    if (jsonEqual(sizes[k], v)) {
      size = k
      return true
    }
  })
  return size
}
