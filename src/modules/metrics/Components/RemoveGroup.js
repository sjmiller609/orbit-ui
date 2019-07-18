import React from 'react'
import PropTypes from 'prop-types'
import { Dropdown, H5, MenuList, Item } from 'instruments'

import s from './styles.scss'

class RemoveGroup extends React.Component {
  handleRemoveGroup = e => {
    this.props.types.set(e)
  }

  render() {
    const { type } = this.props
    return (
      <Dropdown
        className={s.removeOption}
        small={true}
        right
        selector={<H5>...</H5>}>
        <MenuList>
          <Item
            className={s.optionItem}
            onClick={() => this.handleRemoveGroup(type)}>
            Remove metric group
          </Item>
        </MenuList>
      </Dropdown>
    )
  }
}

RemoveGroup.propTypes = {
  types: PropTypes.object,
  type: PropTypes.string,
}

export default RemoveGroup
