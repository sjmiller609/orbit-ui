import React from 'react'
import PropTypes from 'prop-types'
import Module from '../../users/Pending/Module'

class Pending extends React.Component {
  render() {
    const { match } = this.props
    const id = decodeURIComponent(match.params.id)

    const vars = {
      email: id,
    }

    return (
      <Module
        title="Configure Access"
        menu={this.menu}
        vars={vars}
        admin={true}
      />
    )
  }
}

Pending.propTypes = {
  location: PropTypes.object,
  match: PropTypes.object,
}

export default Pending
