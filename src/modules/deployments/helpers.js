import semver from 'semver'

// Used to check if a deployment version is less than the latest version
export const lt = (v1, v2) => {
  return semver.lt(v1, v2)
}

// Return true if main version of v1 is
// greater than or equal to the main version of v2
// Used for enabling/disabling features in the deployment UI
// ex: gte("0.7.0", "0.7.0-alpha.1") => true
export const gte = (v1, v2) => {
  return semver.gte(semver.coerce(v1), semver.coerce(v2))
}

// Shorthand to test for 0.7.0 features
export const gteSeven = v1 => {
  return gte(v1, '0.7.0')
}
