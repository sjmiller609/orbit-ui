import React from 'react'
import { shallow } from 'enzyme'
import { mountWrap } from 'helpers/tests'
import { Link } from 'instruments'

import Table from '../index'
import TableRow from '../TableRow'
import NoResults from '../NoResults'

const remove = jest.fn()

const props = {
  children: ['<p>This is a test</p>'],
  className: 'testClassString',
  search: {
    call: jest.fn(),
    text: 'Test search',
    placeholder: 'Test search',
    delay: false,
  },
  button: {},
  Empty: jest.fn(() => React.Fragment),
  headerOptions: <Link>Test</Link>,
  nav: <Link>Test</Link>,
}

const rowProps = {
  columns: ['1', '2', '3'],
  to: '/',
  className: 'testClassString',
  wrap: false,
  remove,
}

const rowPropsElCol = {
  ...rowProps,
  columns: <p key="1">1</p>,
}

const rowPropsNoTo = {
  ...rowProps,
  to: null,
}

describe('Table', () => {
  let wrapper
  let tableRow
  let noResults

  beforeEach(() => {
    wrapper = mountWrap(<Table {...props} />)
    tableRow = shallow(<TableRow {...rowProps} />)
    noResults = mountWrap(<NoResults />)
  })

  it('should be defined', () => {
    expect(Table).toBeDefined()
    expect(TableRow).toBeDefined()
    expect(NoResults).toBeDefined()
  })

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
    expect(tableRow).toMatchSnapshot()
    expect(noResults).toMatchSnapshot()
  })

  it('should render elements for rows', () => {
    tableRow = shallow(<TableRow {...rowPropsElCol} />)
    expect(tableRow).toMatchSnapshot()
  })

  it('should render default to', () => {
    tableRow = shallow(<TableRow {...rowPropsNoTo} />)
    expect(tableRow).toMatchSnapshot()
  })

  it('should handle no button', () => {
    tableRow = shallow(<Table {...props} button={null} />)
    expect(tableRow).toMatchSnapshot()
  })
})
