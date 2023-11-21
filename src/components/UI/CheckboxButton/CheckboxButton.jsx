import React from 'react';
import styles from './CheckboxButton.module.scss';
import PropTypes from 'prop-types';

const CheckboxButton = ({ name, index, value, changeHandler, isChecked, ...props }) => {
  const id = `checkboxOption-${index}`;

  const onChange = () => {
    changeHandler();
  };

  const classNames = [styles.form__input];
  isChecked && classNames.push(styles.form__input_checked);

  return (
    <label className={styles.form__control} htmlFor={id}>
      <input
        className={classNames.join(' ')}
        type="checkbox"
        id={id}
        name={`${name}-checkbox-option`}
        value={value}
        onChange={onChange}
        {...props}
      />
      {value}
    </label>
  );
};

CheckboxButton.propTypes = {
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  changeHandler: PropTypes.func.isRequired,
};

export default CheckboxButton;
