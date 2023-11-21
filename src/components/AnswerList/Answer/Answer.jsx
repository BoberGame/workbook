import React from 'react';
import PropTypes from 'prop-types';
import RadioButton from '../../UI/RadioButton/RadioButton';
import CheckboxButton from '../../UI/CheckboxButton/CheckboxButton';
import { lessonsActions } from '../../../store/slices/lessonsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { formatFormula, isFormula } from '../../../utils/utils';
import { useState } from 'react';
import { useEffect } from 'react';
import styles from './Answer.module.scss';
import Input from '../../UI/Input/Input';
import { QUESTION_TYPES } from '../../../constants';

const SingleAnswer = ({ userAnswer, checkIsAnswered, ...props }) => {
  const dispatch = useDispatch();
  let isAnswered = checkIsAnswered(userAnswer.index);

  const answerHandler = () => {
    isAnswered = checkIsAnswered(userAnswer.index);
    dispatch(lessonsActions.selectAnswer([userAnswer]));
  };

  return <RadioButton changeHandler={answerHandler} isChecked={isAnswered} {...props} />;
};

SingleAnswer.propTypes = {
  userAnswer: PropTypes.object.isRequired,
  checkIsAnswered: PropTypes.func.isRequired,
};

const MultipleAnswer = ({ userAnswer, checkIsAnswered, ...props }) => {
  const dispatch = useDispatch();
  const selectedAnswers = useSelector((state) => state.lessons.selectedAnswers);
  let isAnswered = checkIsAnswered(userAnswer.index);

  const answerHandler = () => {
    const isNewAnswer = selectedAnswers.some(({ index }) => index === userAnswer.index);
    isAnswered = checkIsAnswered(userAnswer.index);

    if (isNewAnswer) {
      const newAnswers = selectedAnswers.filter(({ index }) => index !== userAnswer.index);
      dispatch(lessonsActions.selectAnswer(newAnswers));
    } else {
      dispatch(lessonsActions.selectAnswer([...selectedAnswers, userAnswer]));
    }
  };

  return <CheckboxButton changeHandler={answerHandler} isChecked={isAnswered} {...props} />;
};

MultipleAnswer.propTypes = {
  userAnswer: PropTypes.object.isRequired,
  checkIsAnswered: PropTypes.func.isRequired,
};

const InputAnswer = ({ userAnswer }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const userAnswers = useSelector((state) => state.lessons.userAnswers);
  const prevAnswer = userAnswers[userAnswer.questionIndex];
  const hasAnswer = !!prevAnswer && prevAnswer.length > 0;

  useEffect(() => {
    setValue('');
    if (hasAnswer) {
      setValue(prevAnswer[0].text);
    }
  }, [hasAnswer, prevAnswer, userAnswer.questionIndex]);

  const answerHandler = (target) => {
    setValue(target.value);
    userAnswer.text = target.value;
    dispatch(lessonsActions.selectAnswer([userAnswer]));
  };

  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor="inputAnswer">
        Ответ:
      </label>
      <Input
        type="text"
        placeholder="Введите ответ"
        id="inputAnswer"
        value={value}
        changeHandler={answerHandler}
      />
    </div>
  );
};

InputAnswer.propTypes = {
  userAnswer: PropTypes.object.isRequired,
};

const Answer = ({ text, index, questionType, questionIndex, checkIsAnswered }) => {
  const value = isFormula(text) ? formatFormula(text) : text;

  useEffect(() => {
    // console.log('Answer render');
  }, []);

  const userAnswer = { index, text, questionIndex };
  const answerProps = { name: 'answer', index, value };

  if (questionType === QUESTION_TYPES.single) {
    return <SingleAnswer userAnswer={userAnswer} {...answerProps} checkIsAnswered={checkIsAnswered} />;
  }
  if (questionType === QUESTION_TYPES.multiple) {
    return <MultipleAnswer userAnswer={userAnswer} checkIsAnswered={checkIsAnswered} {...answerProps} />;
  }
  if (questionType === QUESTION_TYPES.input) {
    return <InputAnswer userAnswer={userAnswer} questionIndex={questionIndex} />;
  }
};

Answer.propTypes = {
  text: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  questionType: PropTypes.string.isRequired,
  questionIndex: PropTypes.number.isRequired,
  checkIsAnswered: PropTypes.func.isRequired,
};

export default Answer;
