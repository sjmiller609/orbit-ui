const isDate = date => {
  return !!(d => d !== 'Invalid Date' && !isNaN(d))(new Date(date))
}

export const normalize = log => {
  // strip out date if is in brackets as first part of message
  const matches = log.match(/\[(.*?)\]/)
  if (!matches) return log
  if (matches[0] !== log.slice(0, matches[0].length)) return log
  // get date
  let date = matches[0].slice(1, matches[0].length - 1)
  // remove comma and everything after
  const c = date.indexOf(',')
  if (~c) date = date.slice(0, c)
  if (isDate(date)) return log.slice(matches[0].length)
  return log
}
