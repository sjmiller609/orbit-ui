const has = (str, find) => ~str.toLowerCase().indexOf(find.toLowerCase())

export const formErrors = ({ error, errors }) => {
  if (!error) return

  let err = JSON.stringify(error).toLowerCase()
  return errors.find(e => {
    if (e.key && has(err, e.key)) return e
    else if (e.allKeys && e.allKeys.every(k => has(err, k))) return e
    else if (e.someKeys && e.someKeys.some(k => has(err, k))) return e
  })
}
