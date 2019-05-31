import React from 'react'
import PropTypes from 'prop-types'
import { GetData } from 'instruments'

import CardInfo from './CardInfo'

// HOC to load a Card
const GetCard = Component => {
  const GetCard = ({ data, ...props }) => {
    const vars = {
      id: data.id,
      stripeCustomerId: data.stripeCustomerId,
    }
    return <CardInfo vars={vars} Component={Component} {...props} />
  }

  GetCard.propTypes = {
    data: PropTypes.object,
  }
  return GetData(GetCard, { workspaceId: true })
}

export default GetCard
