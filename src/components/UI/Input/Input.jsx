import React from 'react';
import styles from './Input.module.scss';
import PropTypes from 'prop-types';

const Input = ({ onChangeHandler, ...props }) => {
  const onChange = ({ target }) => {
    onChangeHandler(target.value);
  };

  return <input className={styles.form__control} {...props} onChange={onChange} />;
};

Input.propTypes = {
  onChangeHandler: PropTypes.func,
};

export default Input;
