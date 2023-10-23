import React from 'react';
import styles from './Button.module.scss';

const Button = ({ variant, size = 'md', onClickHandler, ...props }) => {
  const classes = [styles.btn];
  size === 'sm' ? classes.push(styles.sm) : classes.push(styles.md);
  return (
    <button className={classes.join(' ')} {...props} onClick={onClickHandler}>
      {props.children}
    </button>
  );
};

export default Button;
