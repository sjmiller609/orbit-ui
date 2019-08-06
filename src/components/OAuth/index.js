import React, {Component} from 'react'

import Button from 'components/Button'

import styles from './styles.module.css';

class OAuth extends Component {
  render() {
    const { action, authConfig } = this.props;

    if (
      (authConfig.initialSignup || authConfig.publicSignup)
      && authConfig.providers.length > 0
    ) {
      return (
        <div className={styles.container}>
          <p>OR</p>
          {authConfig.providers.map(provider => (
            <Button
              className={styles.button}
              key={provider.name}
              href={provider.url}
              title={action + ' with ' + provider.displayName}
              theme={provider.name}
            >
              {action} with {provider.displayName}
            </Button>
          ))}
        </div>
      )
    }

    return null;
  }
}

export default OAuth
