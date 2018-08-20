import Async from 'react-imported-component'
import React from 'react'
/* eslint-disable react/display-name */
const LoadImg = importFunction => {
  if (!importFunction) return
  return Async(importFunction, {
    render: (Icon, state, { className, title }) => {
      const newProps = {
        className,
        title,
        src:
          Icon ||
          'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
      }
      return <img {...newProps} />
    },
  })
}

export default LoadImg
