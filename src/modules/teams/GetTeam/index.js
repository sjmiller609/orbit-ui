import React from 'react'
import PropTypes from 'prop-types'
import { GetData } from '../../../instruments'

import Team from './Team'

// HOC to load a team
const GetTeam = Component => {
  const GetTeam = ({ getData, ...props }) => {
    const vars = {
      teamId: getData.teamId,
    }
    return <Team vars={vars} Component={Component} {...props} />
  }

  GetTeam.propTypes = {
    getData: PropTypes.object,
  }
  return GetData(GetTeam, { teamId: true })
}

export default GetTeam
