import React from 'react';
import AnswerInput from '../AnswerInput/AnswerInput';
import PropTypes from 'prop-types';
import { isFormula } from '../../../utils/isChemicalFormula';
import { formatFormula } from '../../../utils/formatChemicalFormula';
import RadioButton from '../../UI/RadioButton/RadioButton';
import CheckboxButton from '../../UI/CheckboxButton/CheckboxButton';
import { setCurrentUserAnswer } from '../../../store/slices/lessonsSlice';
import { useDispatch, useSelector } from 'react-redux';

const Answer = ({ answerText, answerIndex, questionType, questionIndex }) => {
  const { currentUserAnswer } = useSelector((state) => state.lessons);
  const dispatch = useDispatch();
  const value = isFormula(answerText) ? formatFormula(answerText) : answerText;

  const userAnswer = {
    answerIndex,
    answerText,
    questionIndex,
  };

  const singleAnswerHandler = () => {
    dispatch(setCurrentUserAnswer([userAnswer]));
  };

  const multipleAnswerHandler = () => {
    const isOldAnswer = currentUserAnswer.some(
      ({ answerIndex }) => answerIndex === userAnswer.answerIndex
    );

    if (isOldAnswer) {
      const updatedAnswers = currentUserAnswer.filter(
        (answer) => answer.answerIndex !== userAnswer.answerIndex
      );
      dispatch(setCurrentUserAnswer(updatedAnswers));
    } else {
      dispatch(setCurrentUserAnswer([...currentUserAnswer, userAnswer]));
    }
  };

  const inputAnswerHandler = (answerText) => {
    userAnswer.answerText = answerText;
    dispatch(setCurrentUserAnswer([userAnswer]));
  };

  if (questionType === 'single') {
    return (
      <li>
        <RadioButton
          name="answer"
          index={answerIndex}
          value={value}
          onChangeHandler={singleAnswerHandler}
        />
      </li>
    );
  }
  if (questionType === 'multiple') {
    return (
      <li>
        <CheckboxButton
          name="answer"
          index={answerIndex}
          value={value}
          onChangeHandler={multipleAnswerHandler}
        />
      </li>
    );
  }
  if (questionType === 'input') {
    return <AnswerInput onChangeHandler={inputAnswerHandler} />;
  }
};

Answer.propTypes = {
  answerText: PropTypes.string.isRequired,
  answerIndex: PropTypes.number.isRequired,
  questionIndex: PropTypes.number.isRequired,
};

export default Answer;
