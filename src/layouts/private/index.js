import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'

import Logo from 'components/Icons/AStarsLightBg';
import styles from './styles.module.css';

class PrivateLayout extends Component {
  render() {
    const {authUser, nav, children} = this.props;

    return (
      <div className={styles.layout}>
        <header className={styles.header}>
          <div className={styles.logo}>
            <NavLink to="/workspaces">
              <Logo />
            </NavLink>
          </div>
          <div className={styles.workspacesDropdown}>
            {authUser.fullName || authUser.username }
          </div>
          <div className={styles.userNav}>
            [userNav]
          </div>
        </header>
        <nav className={styles.nav}>
          <div className={styles.navWrap}>
            {nav.map((n, i) =>
              <NavLink key={i} to={n.to} activeClassName={styles.active}>
                {n.name}
              </NavLink>
            )}
          </div>
        </nav>
        <div className={styles.content}>
          {children}
        </div>
      </div>
    )
  }
}

export default PrivateLayout;
