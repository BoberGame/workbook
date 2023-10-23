import React from 'react';
import Answer from './Answer/Answer';
import PropTypes from 'prop-types';
import styles from './AnswerList.module.scss';

const AnswerList = ({
  answers,
  answersType,
  currentAnswer,
  setCurrentAnswer,
  userAnswers,
  questionIndex,
  setUserAnswers,
}) => {
  return (
    <ul className={styles.answer__list}>
      {answers.map((answer, index) => (
        <Answer
          key={answer}
          answerText={answer}
          answerIndex={index}
          answerType={answersType}
          currentAnswer={currentAnswer}
          setCurrentAnswer={setCurrentAnswer}
          userAnswers={userAnswers}
          questionIndex={questionIndex}
          setUserAnswers={setUserAnswers}
        />
      ))}
    </ul>
  );
};

AnswerList.propTypes = {
  answers: PropTypes.array.isRequired,
  answersType: PropTypes.string.isRequired,
  currentAnswer: PropTypes.array,
  setCurrentAnswer: PropTypes.func,
  questionIndex: PropTypes.number.isRequired,
};

export default AnswerList;
