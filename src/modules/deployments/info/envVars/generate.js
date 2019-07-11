// script to generate env vars from airflow.cjg

import { blob } from './blob'

const g = blob.match(/\[(.*?)]/g)

const g2 = []
const g3 = []
g.forEach((g, i) => {
  if (g === '[%%(asctime)s]') return
  if (g === '[core]' && i > 0) return
  g2.push(blob.indexOf(g))
  g3.push(g.slice(1, -1))
})

const m1 = blob.match(/\n(.*?) =/g)
const m2 = m1.map(m =>
  m
    .slice(1)
    .replace(' =', '')
    .replace('#', '')
    .trim()
)

const grouped = {}
const named = {}
m2.forEach(m => {
  if (~m.indexOf('Ex:')) return
  const i = blob.indexOf(`${m} =`)
  const gi = Math.max.apply(null, g2.filter(v => v <= i))
  const group = g3[g2.indexOf(gi)]
  if (!grouped[group]) grouped[group] = {}

  grouped[group][m] = ''
  named['AIRFLOW__' + group.toUpperCase() + '__' + m.toUpperCase()] = ''
})

// Copy from console and paste into .json file
console.log(JSON.stringify(named)) // eslint-disable-line no-console
