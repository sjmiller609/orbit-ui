export const track = (e, p) => {
  // map properties to google analytics Category and Label
  const p2 = {
    ...p,
  }
  if (p && p.goal) p2.category = p.goal
  if (p && p.on && !p.label) p2.label = p.on

  // NOTE: Warn devs while working on prod api before deleting!
  if (~e.toLowerCase().indexOf('delete') && e.toLowerCase().indexOf('button')) {
    if (window.location.hostname === 'localhost')
      window.alert(
        "Hi developer! This is just a friendly reminder that you're about to delete production data. So CHECK THE ORG you're on and make sure all is good before hitting the big red button! (Because I've made that mistake.) Thanks!"
      )
  }
  // console.log(e + ': ' + JSON.stringify(p2));
  window.analytics.track(e, p2)
}

export const identify = (userId, traits) =>
  window.analytics.identify(userId, traits)

export const group = (groupId, traits) =>
  window.analytics.group(groupId, traits)

export const page = () => window.analytics.page()
