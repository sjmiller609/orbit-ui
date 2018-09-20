import React from 'react'
import PropTypes from 'prop-types'

import Configure from './Configure'
import Module from '../../app/Module'

class New extends React.Component {
  title = 'New Service Account'

  render() {
    const { metaTitle, menu, path } = this.props.module

    const menu2 = {
      ...menu,
      level2: {
        ...menu.level2,
        to: path + '/service-accounts',
      },
      subMenu: null,
    }
    return (
      <Module metaTitle={metaTitle} menu={menu2}>
        <Configure title={this.title} />
      </Module>
    )
  }
}

New.propTypes = {
  location: PropTypes.object,
  module: PropTypes.object,
}

export default New
