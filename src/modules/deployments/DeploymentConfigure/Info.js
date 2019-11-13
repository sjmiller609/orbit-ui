import React from 'react'
import PropTypes from 'prop-types'
import s from './styles.scss'
import { Tag, B, ShowDate } from 'instruments'

const Info = ({ deployment }) => {
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
            Release <B>{deployment.releaseName}</B>
          </Tag>
          <Tag>
            Deployed{' '}
            <B>
              <ShowDate date={deployment.createdAt} />
            </B>
          </Tag>
          <Tag>
            <span>Astronomer </span>
            <B>v{deployment.version}</B>
          </Tag>
          {deployment.deployInfo.current && (
            <Tag>
              <span>Image Version </span>
              <B>v{deployment.deployInfo.current}</B>
            </Tag>
          )}
        </React.Fragment>
      )}
      {/* <Tag>
        <span>Airflow </span>
        <B>
          v{deployment && deployment.airflowVersion
            ? deployment.airflowVersion
            : '1.10.2'}
        </B>
      </Tag> */}
    </div>
  )
}

Info.propTypes = {
  deployment: PropTypes.object,
  type: PropTypes.string,
  version: PropTypes.string,
}

export default Info
