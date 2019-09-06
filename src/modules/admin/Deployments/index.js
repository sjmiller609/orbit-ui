import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { withRouter } from 'react-router-dom'
import { compose, graphql, withApollo } from 'react-apollo'
import gql from 'graphql-tag'

import Module from '../../app/Module'
import { Table } from 'instruments'
import Item from './Item'

class AdminDeployments extends Component {
  static propTypes = {
    getDeployments: PropTypes.object,
    loading: PropTypes.bool,
  }

  constructor(props) {
    super(props)
    this.state = {
      deployments: props.getDeployments.deployments,
      search: '',
    }
  }

  componentDidMount = async () => {
    try {
      await this.props.getDeployments.refetch()
    } catch (err) {
      console.log(err) // eslint-disable-line
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps != this.props) {
      this.setData(this.props)
    }
  }

  search = {
    delay: false,
    placeholder: 'Search Deployments',
    call: search => this.handleSearch(search),
  }

  handleSearch = async search => {
    this.setState({ search })
    try {
      await this.props.getDeployments.refetch({ releaseName: search })
      this.setState({ search })
    } catch (err) {
      console.log(err) // eslint-disable-line
    }
  }

  setData = props =>
    this.setState({
      deployments: props.getDeployments.deployments,
    })

  render() {
    const { deployments, search } = this.state
    const { loading } = this.props

    if (loading) return null

    const menu2 = {
      nav: 'admin',
      level1: {
        selected: {
          to: '/admin',
          text: 'Admin',
        },
        list: [],
        addNew: {},
      },
      level2: {
        text: 'All Deployments',
      },
    }

    return (
      <Module metaTitle="Deployments" menu={menu2}>
        <Table
          search={{
            text: search,
            ...this.search,
          }}>
          {deployments &&
            deployments.map(d => <Item key={d.id} deployment={d} />)}
        </Table>
      </Module>
    )
  }
}

const deployments = gql`
  query deployments {
    deployments {
      id: uuid
      label
      description
      type
      releaseName
      version
      airflowVersion
      workspace {
        id: uuid
        stripeCustomerId
        billingEnabled
      }
      urls {
        type
        url
      }
      createdAt
      updatedAt
      config
      env
      properties
    }
  }
`

export default compose(
  withRouter,
  withApollo,
  graphql(deployments, { name: 'getDeployments' })
)(AdminDeployments)
