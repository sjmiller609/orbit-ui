import React from 'react';

import Logo from 'components/Icons/AStarsLightBg';
import styles from './styles.module.css';

const PublicLayout = ({ nav, children }) => (
  <div className={styles.layout}>
    <header className={styles.header}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <nav className={styles.nav}>
        {nav}
      </nav>
    </header>
    {children}
  </div>
);

export default PublicLayout;
