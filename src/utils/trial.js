export const isTrialing = (workspace) => {
  if (workspace.stripeCustomerId == null && workspace.billingEnabled == true) {
    return true;
  }
  return false;
};
