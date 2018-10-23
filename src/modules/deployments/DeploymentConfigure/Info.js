import React from 'react'
import PropTypes from 'prop-types'
import s from './styles.scss'
import { Tag, B, ShowDate } from 'instruments'

const Info = ({ type, version, deployment }) => {
  // return (
  //   <Mini className={s.info}>
  //     <span>{deployment.type}</span> deployment <B>{deployment.releaseName}</B>{' '}
  //     deployed <ShowDate date={deployment.createdAt} />
  //   </Mini>
  // )
  return (
    <div className={s.info}>
      {deployment && (
        <React.Fragment>
          <Tag>
            Domain <B>{deployment.releaseName}</B>
          </Tag>
          <Tag>
            Deployed{' '}
            <B>
              <ShowDate date={deployment.createdAt} />
            </B>
          </Tag>
          <Tag>
            Helm Chart <B>v{deployment.version}</B>
          </Tag>
        </React.Fragment>
      )}
      <Tag>
        <span>{type === 'airflow' ? 'Apache Airflow' : type}</span>{' '}
        <B>v{version}</B>
      </Tag>
    </div>
  )
}

Info.propTypes = {
  deployment: PropTypes.object,
  type: PropTypes.string,
  version: PropTypes.string,
}

export default Info
