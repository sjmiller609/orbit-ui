import React from 'react'
import List from '../List'
import { Module } from '../../../instruments'

class Main extends React.Component {
  subMenu = [
    {
      to: '/deployments',
      text: 'Deployments',
    },
    {
      to: '/users',
      text: 'Users',
    },
    {
      to: '/team/settings',
      text: 'Team Settings',
    },
  ]
  // state for entire module
  state = { search: '' }
  // search obj constants
  search = {
    delay: false,
    placeholder: 'Search Deployments',
    call: search => this.setState({ search }),
  }

  render() {
    const { search } = this.state
    const menu = {
      subMenu: this.subMenu,
    }
    return (
      <Module metaTitle="Deployments" menu={menu}>
        <List
          search={{
            text: search,
            ...this.search,
          }}
        />
      </Module>
    )
  }
}

export default Main
