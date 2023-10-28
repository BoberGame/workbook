import React from 'react';
import styles from './RadioButton.module.scss';
import PropTypes from 'prop-types';

const RadioButton = ({ name, index, value, onChangeHandler }) => {
  const id = `radioOption-${index}`;

  const onChange = () => {
    onChangeHandler();
  };

  return (
    <label className={styles.form__control} htmlFor={id}>
      <input
        className={styles.form__input}
        type="radio"
        id={id}
        name={`${name}-radio-option`}
        value={value}
        onChange={onChange}
      />
      {value}
    </label>
  );
};

RadioButton.propTypes = {
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  onChangeHandler: PropTypes.func.isRequired,
};

export default RadioButton;
