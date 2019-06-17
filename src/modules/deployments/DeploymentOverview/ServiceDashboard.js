import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { CardForm, P, Icon, Box } from 'instruments'
import s from './styles.scss'

const ServiceDashboard = ({ url, title, icon, text, loading }) => {
  const to = !loading ? url : null

  return (
    <CardForm
      title={title}
      className={s.card}
      button={{
        text: `Open ${title}`,
        save: !!to,
        to,
      }}>
      <Box className={classnames(s.icon, loading && s.loading)}>
        <Icon icon={icon} />
      </Box>
      <P>{text}</P>
    </CardForm>
  )
}

ServiceDashboard.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.string,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  loading: PropTypes.bool,
}

export default ServiceDashboard
