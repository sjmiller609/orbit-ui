export const isTrialing = stripeCustomerId => {
  if (stripeCustomerId == null) {
    return true
  }
  return false
}
