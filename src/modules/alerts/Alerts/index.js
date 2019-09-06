import React from 'react'
import PropTypes from 'prop-types'
import Emails from '../Emails'

const convertEmails = emails => {
  if (!emails) return []
  if (typeof emails === 'string') {
    return emails.split(',')
  }
  return emails
}

class Alerts extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      emails: convertEmails(props.deployment.properties.alert_emails),
    }
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.deployment.properties.alert_emails !=
      this.props.deployment.properties.alert_emails
    ) {
      this.updateEmails(this.props)
    }
  }

  updateEmails = props =>
    this.setState({
      emails: convertEmails(props.deployment.properties.alert_emails),
    })

  render() {
    const { deployment } = this.props
    const { emails } = this.state

    return (
      <Emails
        worksaceId={deployment.workspace.id}
        data={{
          id: deployment.id,
          properties: {
            alert_emails: emails,
          },
        }}
        emails={emails}
      />
    )
  }
}
Alerts.propTypes = {
  deployment: PropTypes.object,
}

export default Alerts
