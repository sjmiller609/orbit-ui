export const charLimit = (text, chars) => {
  if (!text || text.length <= chars) return text
  return text.substring(0, chars) + '...'
}
