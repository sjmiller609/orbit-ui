'use strict'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { compose, graphql, withApollo } from 'react-apollo'
import gql from 'graphql-tag'

import { Avatar, MenuList, Item, Dropdown } from 'instruments'
import s from './styles.scss'

class ProfileMenu extends Component {
  static propTypes = {
    config: PropTypes.object,
    name: PropTypes.string,
    avatar: PropTypes.string,
    platform: PropTypes.bool,
    className: PropTypes.string,
  }

  componentWillMount = async () => {
    try {
      await this.props.config.refetch()
    } catch (err) {
      console.log(err) // eslint-disable-line
    }
  }

  render() {
    const { name, avatar, platform, className, config } = this.props
    if (config.loading) return null
    const { version, baseDomain } = config.appConfig

    return (
      <Dropdown
        className={classnames(s.menu, className)}
        right
        selector={<Avatar url={avatar} title={name} className={s.profile} />}>
        <MenuList label={name}>
          <Item to="/profile">Personal Settings</Item>
          {platform && <Item to="/admin">Admin Settings</Item>}
          {platform && (
            <Item to={`https://kibana.${baseDomain}`} className={s.small}>
              Global Logs →
            </Item>
          )}
          {platform && (
            <Item to={`https://grafana.${baseDomain}`} className={s.small}>
              Global Metrics →
            </Item>
          )}
          <Item to="https://www.astronomer.io/docs/" target="_blank">
            Documentation
          </Item>
          <Item to="https://www.astronomer.io/guides/" target="_blank">
            Guides
          </Item>
          <Item to="/logout">Logout</Item>
        </MenuList>
        {version && <p className={s.version}>v{version}</p>}
      </Dropdown>
    )
  }
}

const config = gql`
  query config {
    appConfig {
      version
      baseDomain
    }
  }
`

export default compose(withApollo, graphql(config, { name: 'config' }))(
  ProfileMenu
)
