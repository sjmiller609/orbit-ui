import PropTypes from 'prop-types';
import React from 'react';
import s from './styles.scss';
import { hot } from "react-hot-loader";

const Root = ({ children }) => {
  return (
    <div className={s.container}>
      rootff
      {children}
    </div>
  );
};

Root.propTypes = {
  children: PropTypes.element,
  location: PropTypes.object,
};

export default hot(module)(Root);
