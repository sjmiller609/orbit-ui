import React from 'react'
import PropTypes from 'prop-types'
import LogSearchBar from '../LogSearchBar'

class DeploymentLogsSearch extends React.Component {
  render() {
    const { search } = this.props
    return (
      <LogSearchBar
        search={search.call}
        text={search.text}
        placeholder={search.placeholder}
        noDelay={!search.delay}
      />
    )
  }
}

DeploymentLogsSearch.propTypes = {
  search: PropTypes.object,
}

export default DeploymentLogsSearch
