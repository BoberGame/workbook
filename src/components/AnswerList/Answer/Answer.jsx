import React from 'react';
import RadioButton from '../../../UI/RadioButton/RadioButton';
import CheckboxButton from '../../../UI/CheckboxButton/CheckboxButton';
import AnswerInput from '../AnswerInput/AnswerInput';
import PropTypes from 'prop-types';
import { isFormula } from '../../../utils/isChemicalFormula';
import { formatFormula } from '../../../utils/formatChemicalFormula';

const getAnswerData = (answerIndex, answerText, questionIndex) => ({
  answerIndex,
  answerText,
  questionIndex,
});

const Answer = ({
  answerText,
  answerIndex,
  answerType,
  currentAnswer,
  setCurrentAnswer,
  questionIndex,
}) => {
  const value = isFormula(answerText) ? formatFormula(answerText) : answerText;
  const singleAnswerHandler = () => {
    const userAnswer = getAnswerData(answerIndex, answerText, questionIndex);
    setCurrentAnswer([userAnswer]);
  };

  const multipleAnswerHandler = () => {
    const userAnswer = getAnswerData(answerIndex, answerText, questionIndex);
    const isOldAnswer = currentAnswer.some(({ answerIndex }) => answerIndex === userAnswer.answerIndex);

    if (isOldAnswer) {
      const updatedAnswers = currentAnswer.filter(
        (answer) => answer.answerIndex !== userAnswer.answerIndex
      );
      setCurrentAnswer(updatedAnswers);
    } else {
      setCurrentAnswer([...currentAnswer, userAnswer]);
    }
  };

  const inputAnswerHandler = (answerText) => {
    const userAnswer = getAnswerData(answerIndex, answerText, questionIndex);
    setCurrentAnswer([userAnswer]);
  };

  if (answerType === 'single') {
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
  if (answerType === 'multiple') {
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
  if (answerType === 'input') {
    return <AnswerInput onChangeHandler={inputAnswerHandler} />;
  }
};

Answer.propTypes = {
  answerText: PropTypes.string.isRequired,
  answerIndex: PropTypes.number.isRequired,
  answerType: PropTypes.string.isRequired,
  currentAnswer: PropTypes.array,
  setCurrentAnswer: PropTypes.func,
  questionIndex: PropTypes.number.isRequired,
};

export default Answer;
