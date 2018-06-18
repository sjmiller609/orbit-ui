import analytics from './analytics'

export const Track = event => {
  let e
  let p
  // event param can be either a string (just event name), or object with { name, props }
  if (typeof event === 'string') e = event
  else {
    e = event.name
    p = {
      ...event.props,
    }

    if (p && p.goal && !p.category) p.category = event.goal
    if (p && p.on && !p.label) p.label = event.on
  }

  analytics.track(e, p)
}

export const Identify = (userId, traits) => analytics.identify(userId, traits)

export const Group = (groupId, traits) => analytics.group(groupId, traits)
