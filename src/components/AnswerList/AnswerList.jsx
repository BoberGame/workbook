import { PropTypes } from 'prop-types';
import React from 'react';
import Answer from './Answer/Answer';
import styles from './AnswerList.module.scss';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const AnswerList = ({ questionIndex, question }) => {
  const lessons = useSelector((state) => state.lessons);
  const { userAnswers, selectedAnswers } = lessons;
  const currentQuestionAnswers = userAnswers[questionIndex];

  const checkIsAnswered = (answerIndex) => {
    const hasAnswers = userAnswers.length > 0;

    if (!hasAnswers || !Array.isArray(currentQuestionAnswers)) {
      return false;
    }

    const userAnswerIndexes = currentQuestionAnswers.map(({ index }) => index);
    const selectedAnswerIndexes = selectedAnswers.map(({ index }) => index);
    const isMatch = userAnswerIndexes.every((index) => selectedAnswerIndexes.includes(index));
    const isPrevAnswer = userAnswerIndexes.includes(answerIndex);
    const isNewAnswer = selectedAnswerIndexes.includes(answerIndex);
    let isAnswered = false;

    if (selectedAnswerIndexes.length > 0) {
      isAnswered = isMatch ? isPrevAnswer : isNewAnswer;
    } else {
      isAnswered = isPrevAnswer;
    }

    const debug = {
      answerIndex,
      isAnswered,
      isMatch,
      userAnswerIndexes,
      selectedAnswerIndexes,
    };
    console.log(debug);
    return isAnswered;
  };

  useEffect(() => {
    console.log('AnswerList render');
  }, []);

  return (
    <ul className={styles.answer__list}>
      {question.answers.map((answer, index) => (
        <li key={answer}>
          <Answer
            text={answer}
            index={index}
            questionType={question.type}
            questionIndex={questionIndex}
            checkIsAnswered={checkIsAnswered}
          />
        </li>
      ))}
    </ul>
  );
};

AnswerList.propTypes = {
  questionIndex: PropTypes.number.isRequired,
  question: PropTypes.object.isRequired,
};

export default AnswerList;
