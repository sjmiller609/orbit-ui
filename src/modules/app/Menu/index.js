import React from 'react'
import PropTypes from 'prop-types'
import { GetData } from '../../../instruments'

const Menu = ({ getData }) => {
  return null
}

Menu.propTypes = {
  getData: PropTypes.object,
}

export default GetData(Menu, { teamId: true })
