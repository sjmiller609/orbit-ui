import React from 'react'
import PropTypes from 'prop-types'
import { GetData, Header } from 'instruments'
import Data from '../../teams/Data'
import subMenus from './subMenus'

const Nav = ({ getData, teams, menu }) => {
  const teamId = getData.teamId
  if (!teams) return null
  const team = teams.find(team => team.id === teamId)

  const level1 = {
    selected: {
      to: menu.home, //default?
      id: teamId,
      text: team ? team.label : 'All Teams',
    },
    list: teams,
    addNew: {
      to: '/teams/new',
      text: 'New Team',
    },
  }
  const subMenu = menu.subMenu || subMenus[menu.nav]

  return <Header level1={level1} level2={menu.level2} subMenu={subMenu} />
}

Nav.propTypes = {
  getData: PropTypes.object,
  teams: PropTypes.array,
  menu: PropTypes.object,
}

export default GetData(Data(Nav), { teamId: true })
