import React from 'react'
import s from './styles.scss'
import List from '../List'
import { Module } from '../../../instruments'

const Main = () => {
  return (
    <Module metaTitle="Deployments">
      <List />
    </Module>
  )
}

export default Main
