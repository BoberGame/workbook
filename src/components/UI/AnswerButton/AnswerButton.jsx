import React from 'react';
import styles from './AnswerButton.module.scss';
import PropTypes from 'prop-types';

const AnswerButton = ({ name, index, value, type, changeHandler, isChecked, ...props }) => {
  const id = `${type}Option-${index}`;
  const classNames = [styles.form__input];
  isChecked && classNames.push(styles.form__input_checked);

  const onChange = ({ target }) => {
    changeHandler(target);
  };

  return (
    <>
      <input
        tabIndex="0"
        className={classNames.join(' ')}
        type={type}
        id={id}
        name={`${name}-${type}-option`}
        value={value}
        onChange={onChange}
        {...props}
      />
      <label className={styles.form__control} htmlFor={id}>
        {value}
      </label>
    </>
  );
};

AnswerButton.propTypes = {
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  type: PropTypes.string.isRequired,
  changeHandler: PropTypes.func.isRequired,
};

export default AnswerButton;
