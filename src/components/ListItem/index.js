import React from 'react'
import {Link} from 'react-router-dom';

import Arrow from 'components/Icons/Arrow';
import Dag from 'components/Icons/Dag';

import styles from './styles.module.css'

const ListItem = ({ icon, to, type, data }) => {
  return (
    <Link to={to} className={styles.container}>
      <div className={styles.icon}>
        {icon}
      </div>
      <div className={styles.label}>
        <h3>{data.label}</h3>
        {data.releaseName && (<p className={styles.releaseName}>{data.releaseName}</p>)}
      </div>
      <div className={styles.description}>
        <p>{data.description}</p>
      </div>
      {type === 'workspace' && (
        <span className={styles.count}>
          <Dag /> <p>{data.deploymentCount}</p>
        </span>
      )}
      {type === 'deployment' && (
        <span className={styles.date}>
          <p>Deployed</p>
        </span>
      )}
      <Arrow className={styles.arrow} />
    </Link>
  )
}

export default ListItem
