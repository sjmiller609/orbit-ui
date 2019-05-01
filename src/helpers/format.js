export const charLimit = (text, chars) => {
  if (!text || text.length <= chars) return text
  return text.substring(0, chars) + '...'
}

export const unCamelCase = str => {
  if (!str) return str
  return (
    str
      // insert a space between lower & upper
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      // space before last upper in a sequence followed by lower
      .replace(/\b([A-Z]+)([A-Z])([a-z])/, '$1 $2$3')
      // uppercase the first character
      .replace(/^./, function(str) {
        return str.toUpperCase()
      })
  )
}

export const capitalize = str =>
  str.replace(
    /\w\S*/g,
    txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  )

export const unConstantize = str => {
  if (!str) return str
  return capitalize(str.replace(/_/g, ' '))
}
