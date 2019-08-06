import React, {Component} from 'react'

import styles from './styles.module.css'

class Form extends Component {
  formSubmit = e => {
    const { handleSubmit } = this.props;
    e.preventDefault();
    handleSubmit(e);
  }

  submitErrors = (error) => {
    if(error != null && error != {}) {
      const errors = JSON.parse(error).graphQLErrors;
      if (errors.length > 0) {
        return errors.map((e, i) =>
          <p className={styles.error} key={`error-${i}`}>⚠️ {e.message}</p>
        )
      }
    }
  }

  render() {
    const { children, handleSubmit, error } = this.props;

    return (
      <form onSubmit={e => this.formSubmit(e)}>
        {children}
      </form>
    )
  }
}

export default Form
