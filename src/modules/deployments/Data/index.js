"use strict";
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { graphql, compose } from 'react-apollo';
import { pushMessage } from '../../../redux/snackbarActions';
import { browserHistory } from 'react-router';

import api from './api';
import { track } from '../tracking';

const OrgData = (Component) => {
  class OrgData extends React.Component {
    constructor(props){
      super(props);
      this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(data) {
      const { orgs, snackbarMessage } = this.props;
      if (orgs.length && ~orgs.findIndex(org => org.name.toLowerCase() === data.name.toLowerCase())) {
        snackbarMessage('You already have an organization with that name. Try a different name.');
        return;
      }
      this.props.createOrg(data);
    }
    render () {
      /* eslint-disable no-unused-vars  */
      const { createOrg, orgs, loading, snackbarMessage, ...otherProps } = this.props;
      const newProps = {
        ...otherProps,
        onSubmit: this.onSubmit,
      };
      return <Component {...newProps} />;
    }
  }

  OrgData.propTypes = {
    createOrg: PropTypes.func,
    snackbarMessage: PropTypes.func,
    orgs: PropTypes.array,
    loading: PropTypes.bool,
  };

  const DataContainer = compose(
    graphql(api.FindUserOrgs, {
      options:(ownProps) => ({variables: {userId: ownProps.userId}}),
      props: ({data: {organizations, loading} }) => ({
        orgs: organizations,
        loading
      }),
    }),
    graphql(api.CreateOrg, {
      props: ({ ownProps, mutate }) => ({
        createOrg: ({ name }) =>
          mutate({
            variables: { name, userId: ownProps.userId },
            refetchQueries: [{
              query: api.FindUserOrgs, variables: {userId: ownProps.userId}
            }],
          }).then((data)=>{
            if (data.data.response.success) {
              track('Company Created');
              browserHistory.replace("/");
              ownProps.snackbarMessage("Company created. Welcome to Astronomer.");
            } else ownProps.snackbarMessage(data.data.response.message);
          })
      }),
    }),
  )(OrgData);


  return connect(
    (state) => ({
      userId: state.users.user.decoded.id,
    }),
    (dispatch) => ({
      snackbarMessage: (msg) => dispatch(pushMessage(msg))
    })
  )(DataContainer);
};

export default OrgData;
