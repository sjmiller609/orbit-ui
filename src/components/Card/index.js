import React from 'react'

import styles from './styles.module.css'

const Card = ({ header, children, footer }) => {
  return (
    <div className={styles.container}>
      {header && (
        <div className={styles.header}>
          {header}
        </div>
      )}
      <div className={styles.content}>
        {children}
      </div>
      {footer && (
        <div className={styles.footer}>
          {footer}
        </div>
      )}
    </div>
  )
}

export default Card
