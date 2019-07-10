export const isTrialing = workspace => {
  if (workspace.stripeCustomerId == null) {
    return true
  }
  return false
}
