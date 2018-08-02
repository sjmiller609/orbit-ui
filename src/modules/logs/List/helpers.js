import React from 'react'

const isDate = date => {
  return !!(d => d !== 'Invalid Date' && !isNaN(d))(new Date(date))
}

export const format = (log, s) => {
  if (!log) return null
  const log2 = log.split(/(\[.*?\]|\{.*?\})/)
  if (log2.length === 1) return log
  let type
  const log3 = log2.map((l, i) => {
    // format dates in brackets
    if (l[0] === '[' && l[l.length - 1] === ']') {
      let date = l.slice(1, -1)
      // some date formats have comma
      const c = l.indexOf(',')
      if (~c) date = l.slice(1, c)
      // some have colon inbetween date and time
      else date = date.split(':')[0]

      // check if is date
      if (isDate(date))
        return (
          <span key={`date-${i}`} className={s.date}>
            {l}
          </span>
        )
      return l

      // format filenames in {}
    } else if (
      l[0] === '{' &&
      l[l.length - 1] === '}' &&
      ~l.indexOf('.') &&
      ~l.indexOf(':')
    ) {
      type = i + 1
      return (
        <span key={`file-${i}`} className={s.file}>
          {l}
        </span>
      )
    }
    return l
  })

  if (type) {
    const t = log3[type].split(/( .*? - )/)
    if (t.length > 1) {
      if (t[0] === '') t.shift()
      const t1 = t.shift().slice(0, -2)
      const style = ~t1.indexOf('err') ? 'error' : 'type'
      log3.splice(type, 1, [
        <span key={`type-${type}`} className={s[style]}>
          {t1}
        </span>,
        '- ' + t[0],
      ])
    }
  }

  return log3
}
