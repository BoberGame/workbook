import React from 'react';
import styles from './RadioButton.module.scss';
import PropTypes from 'prop-types';

const RadioButton = ({ name, index, value, changeHandler, isChecked, ...props }) => {
  const id = `radioOption-${index}`;

  const onChange = ({ target }) => {
    changeHandler(target);
  };
  const classNames = [styles.form__input];

  isChecked && classNames.push(styles.form__input_checked);

  return (
    <label className={styles.form__control} htmlFor={id}>
      <input
        className={classNames.join(' ')}
        type="radio"
        id={id}
        name={`${name}-radio-option`}
        value={value}
        onChange={onChange}
        {...props}
      />
      {value}
    </label>
  );
};

RadioButton.propTypes = {
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  changeHandler: PropTypes.func.isRequired,
};

export default RadioButton;
