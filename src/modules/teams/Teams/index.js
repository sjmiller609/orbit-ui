import React from 'react'
import PropTypes from 'prop-types'

import List from '../List'
import Module from '../../app/Module'
import { SetData } from 'instruments'

class Teams extends React.Component {
  menu = {
    nav: 'teams',
  }
  // state for entire module
  state = { search: '' }
  // search obj constants
  search = {
    delay: false,
    placeholder: 'Search Teams',
    call: search => this.setState({ search }),
  }

  componentWillMount() {
    this.props.setData.teamId(null)
  }

  render() {
    const { search } = this.state

    return (
      <Module metaTitle="Teams" menu={this.menu}>
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

Teams.propTypes = {
  setData: PropTypes.object,
}

export default SetData(Teams)
