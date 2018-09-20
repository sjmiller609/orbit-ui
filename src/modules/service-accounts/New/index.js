import React from 'react'
import PropTypes from 'prop-types'

import Configure from './Configure'
import Module from '../../app/Module'

class New extends React.Component {
  title = 'New Service Account'

  render() {
    const { module, deploymentId } = this.props
    const { metaTitle, menu, path } = module

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
        <Configure title={this.title} deploymentId={deploymentId} />
      </Module>
    )
  }
}

New.propTypes = {
  deploymentId: PropTypes.string,
  module: PropTypes.object,
}

export default New
