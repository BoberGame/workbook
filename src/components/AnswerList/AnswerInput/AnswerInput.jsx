import React from 'react';
import Input from '../../../UI/Input/Input';
import styles from './AnswerInput.module.scss';

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
