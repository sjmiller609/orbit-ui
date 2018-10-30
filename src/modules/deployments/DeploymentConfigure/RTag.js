import React from 'react'
import PropTypes from 'prop-types'
import { B, Tag } from 'instruments'

const RTag = ({ n, l }) => (
  <Tag>
    <B>{n}</B>
    {l}
  </Tag>
)

RTag.propTypes = {
  n: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  l: PropTypes.string,
}

export default RTag
