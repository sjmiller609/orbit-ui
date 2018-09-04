export const formErrors = ({ error, errors }) => {
  if (!error) return
  const err = JSON.stringify(error).toLowerCase()

  return errors.find(e => {
    if (e.key && ~err.indexOf(e.key)) return e
    else if (e.allKeys && e.allKeys.every(k => ~err.indexOf(k))) return e
    else if (e.someKeys && e.someKeys.some(k => ~err.indexOf(k))) return e
  })
}
