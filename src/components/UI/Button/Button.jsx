import React from 'react';
import styles from './Button.module.scss';
import PropTypes from 'prop-types';

const Button = ({ variant, size, clickHandler, type, ...props }) => {
  const classes = [styles.btn];
  size === 'sm' ? classes.push(styles.sm) : classes.push(styles.md);

  return (
    <button className={classes.join(' ')} type={type} {...props} onClick={clickHandler}>
      {props.children}
    </button>
  );
};

Button.propTypes = {
  size: PropTypes.oneOf(['sm', 'md']),
  clickHandler: PropTypes.func,
  children: PropTypes.node,
  type: PropTypes.oneOf(['button', 'submit']),
};

Button.defaultProps = {
  size: 'md',
  type: 'button',
};

export default Button;
