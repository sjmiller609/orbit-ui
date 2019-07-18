import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { startCase } from 'lodash'
import { Dropdown, H5, MenuList, Item } from 'instruments'

import s from './styles.scss'

class AddGroup extends React.Component {
  handleAddGroup = e => {
    this.props.types.set(e)
  }

  render() {
    const { types } = this.props
    const allGroups = types.all
    const activeGroups = types.get()

    return (
      <div className={classnames(s.container, s.ghost)}>
        <Dropdown
          className={s.options}
          center
          selector={<H5>+ Add a metrics group</H5>}>
          <MenuList>
            {allGroups.filter(g => !activeGroups.includes(g)).map(g => (
              <Item
                key={g}
                className={s.optionItem}
                onClick={() => this.handleAddGroup(g)}>
                {startCase(g.toLowerCase())}
              </Item>
            ))}
          </MenuList>
        </Dropdown>
      </div>
    )
  }
}

AddGroup.propTypes = {
  types: PropTypes.object,
}

export default AddGroup
