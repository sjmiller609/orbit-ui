import React from 'react';

import styles from './styles.module.css';

const Container = ({ children }) => (
  <div className={styles.row}>
    {React.Children.map(children, (c, i) => (
      <div key={`col-${i}`} className={styles.col}>
        {c}
      </div>
      ))}
  </div>
);

export default Container;
