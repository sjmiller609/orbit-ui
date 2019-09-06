import React, { Component } from 'react';

import Form from 'components/Form';
import TextInput from 'components/Form/TextInput';
import Search from 'components/Icons/Search';

import styles from './styles.module.css';

class SearchForm extends Component {
  state = {
    payload: {
      search: '',
    },
  }

  handleChange = (e, isValid) => {
    this.setState({
      payload: {
        ...this.state.payload,
        [e.target.name]: e.target.value,
      },
    });
  }

  render() {
    const { handleSubmit, error, placeholder } = this.props;
    const { payload } = this.state;

    return (
      <div className={styles.container}>
        <Form handleSubmit={e => handleSubmit(payload, e)} error={error}>
          <span>
            <Search />
          </span>
          <TextInput
            name="search"
            placeholder={placeholder}
            type="text"
            value={payload.search}
            handleChange={this.handleChange}
            required
          />
        </Form>
      </div>
    );
  }
}

export default SearchForm;
