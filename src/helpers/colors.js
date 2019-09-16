import tinygradient from 'tinygradient'

export const gradient = (l, a, z) => {
  return tinygradient([a, z])
    .rgb(l || 2)
    .map(
      g => `rgb(${Math.round(g._r)}, ${Math.round(g._g)}, ${Math.round(g._b)})`
    )
}

export const colorScale = l => {
  const colors = [
    { a: '#00B35D', z: '#0CBEDB' },
    { a: '#0CBEDB', z: '#302c43' },
    { a: '#ff9a09', z: '#f4362c' },
    { a: '#f4362c', z: '#ff9a09' },
    { a: '#767574', z: '#342f54' },
  ]
  if (l <= colors.length) return colors.slice(0, l)
  const colors2 = []
  /* // repeat colors
  for(let i = 0; i < l; i++) {
    colors2.push(colors[i % colors.length]);
  }
  */
  const stops = Math.ceil(l / colors.length)
  for (let i = 0; i < l; i++) {
    if (i < colors.length) colors2.push(colors[i])
    else {
      const i2 = i % colors.length
      const i3 = i2 < colors.length - 1 ? i2 + 1 : 0

      const a0 = gradient(stops + 1, colors[i2].a, colors[i3].a)
      const z0 = gradient(stops + 1, colors[i2].z, colors[i3].z)

      const stop = Math.floor(l / i)
      colors2.push({ a: a0[stop], z: z0[stop] })
    }
  }
  return colors2
}
