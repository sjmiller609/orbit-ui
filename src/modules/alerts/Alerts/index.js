import React from 'react'
import PropTypes from 'prop-types'
import Emails from '../Emails'

class Alerts extends React.Component {
  render() {
    const { deployment } = this.props
    return (
      <Emails
        data={{
          id: deployment.id,
          properties: {
            alert_emails: JSON.parse(
              deployment.properties.alert_emails ||
                '["peter@astronomer.io", "peter2@astronomer.io"]'
            ),
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
