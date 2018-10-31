import { jsonEqual } from 'helpers/compare'
import reserved from '../info/envVars/reserved'

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

export const validateEnvVar = (key, values) => {
  // check if is in reserved list
  if (typeof reserved[key.toUpperCase()] !== 'undefined')
    return key + ' is a reserved variable name.'
  // check ig matches regex pattern
  const regex = RegExp(/^[a-zA-Z_][a-zA-Z0-9_]*$/)
  if (!regex.test(key))
    return 'Variable names must only contain alpha-numeric characters aand underscores'

  if (values.filter(v => v.key === key).length > 1)
    return 'This variable is already set.'
}

export const convertCpu = (v, l = true) =>
  (Math.round(v / 10) / 100).toString() + (l ? ' CPU' : '')

export const convertMem = (v, l = true) =>
  v < 1024
    ? v.toString() + (l ? ' MB' : '')
    : (Math.round(v / 10.24) / 100).toString() + (l ? ' GB' : '')

export const calcAU = (r, au) => {
  const auCpu = Math.ceil(r.cpu / au.cpu)
  const auMem = Math.ceil(r.memory / au.memory)
  return Math.max(auCpu, auMem)
}

export const resourceConvert = (v, out, scale) => {
  if (!v) return
  if (out)
    return {
      cpu: scale.cpu * v,
      memory: scale.memory * v,
    }

  return calcAU(v, scale)
}
