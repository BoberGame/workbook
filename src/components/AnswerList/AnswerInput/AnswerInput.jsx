import React from 'react';
import styles from './AnswerInput.module.scss';
import Input from '../../UI/Input/Input';

const AnswerInput = ({ onChangeHandler }) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor="answerInput">
        Ответ:
      </label>
      <Input
        type="text"
        placeholder="Введите ответ"
        id="answerInput"
        onChangeHandler={onChangeHandler}
      />
    </div>
  );
};

export default AnswerInput;
