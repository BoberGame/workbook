import React from 'react';
import styles from './Button.module.scss';
import PropTypes from 'prop-types';

const Button = ({ variant, size, clickHandler, type, ...props }) => {
  const classes = [styles.btn];
  size === 'sm' ? classes.push(styles.sm) : classes.push(styles.md);

  if (variant === 'icon') {
    classes.push(styles.with__icon);
  } else if (variant === 'outline') {
    classes.push(styles.outline);
  } else {
    classes.push(styles.default);
  }

  return (
    <button className={classes.join(' ')} type={type} {...props} onClick={clickHandler}>
      {props.children}
    </button>
  );
};

Button.propTypes = {
  size: PropTypes.oneOf(['sm', 'md']),
  variant: PropTypes.oneOf(['default', 'outline', 'icon']),
  clickHandler: PropTypes.func,
  children: PropTypes.node,
  type: PropTypes.oneOf(['button', 'submit']),
};

Button.defaultProps = {
  size: 'md',
  type: 'button',
  variant: 'default',
};

export default Button;
