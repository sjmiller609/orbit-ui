import React from 'react'
import PropTypes from 'prop-types'

import Form from '../Configure/Configure'
import Module from '../../app/Module'
import Create from '../Data/Create'

const Configure = Create(Form)

class New extends React.Component {
  title = 'New Service Account'

  render() {
    const { module, deploymentId } = this.props
    const { metaTitle, menu } = module

    const menu2 = {
      ...menu,
      subMenu: null,
    }
    return (
      <Module metaTitle={metaTitle} menu={menu2}>
        <Configure
          title={this.title}
          deploymentId={deploymentId}
          path={module.path}
        />
      </Module>
    )
  }
}

New.propTypes = {
  deploymentId: PropTypes.string,
  module: PropTypes.object,
}

export default New
