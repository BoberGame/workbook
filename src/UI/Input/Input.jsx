import React from 'react';
import styles from './Input.module.scss';

const Input = ({ onChangeHandler, ...props }) => {
  const onChange = ({ target }) => {
    onChangeHandler(target.value);
  };

  return <input className={styles.form__control} {...props} onChange={onChange} />;
};

export default Input;
