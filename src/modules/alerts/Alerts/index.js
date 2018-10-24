import React from 'react'
import PropTypes from 'prop-types'
import Emails from '../Emails'

class Alerts extends React.Component {
  render() {
    const { deployment } = this.props
    const emails = deployment.properties.alert_emails
    console.log(emails)
    return (
      <Emails
        data={{
          id: deployment.id,
          properties: {
            alert_emails: emails ? emails : null,
          },
        }}
      />
    )
  }
}
Alerts.propTypes = {
  deployment: PropTypes.object,
}

export default Alerts
