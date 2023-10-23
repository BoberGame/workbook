import React from 'react';
import styles from './CheckboxButton.module.scss';
import PropTypes from 'prop-types';

const CheckboxButton = ({ name, index, value, onChangeHandler }) => {
  const id = `checkboxOption-${index}`;

  const onChange = ({ target }) => {
    onChangeHandler();
  };

  return (
    <label className={styles.form__control} htmlFor={id}>
      <input
        className={styles.form__input}
        type="checkbox"
        id={id}
        name={`${name}-checkbox-option`}
        value={value}
        onChange={onChange}
      />
      {value}
    </label>
  );
};

CheckboxButton.propTypes = {
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  onChangeHandler: PropTypes.func.isRequired,
};

export default CheckboxButton;
