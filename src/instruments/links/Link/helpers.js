// check if url is external
export const externalUrl = url => {
  if (typeof url === 'object') return false
  const path = /^https?:\/\/|^\/\//i
  if (path.test(url) && !~url.indexOf(window.location.origin)) return true
  return
}
