import React from 'react';
import styles from './Input.module.scss';
import PropTypes from 'prop-types';

const Input = ({ changeHandler, ...props }) => {
  const onChange = (event) => {
    changeHandler(event.target);
  };

  return <input className={styles.form__control} onChange={(e) => onChange(e)} {...props} />;
};

Input.propTypes = {
  changeHandler: PropTypes.func,
};

export default Input;
