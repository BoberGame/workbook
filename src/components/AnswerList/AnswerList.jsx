import React from 'react';
import Answer from './Answer/Answer';
import styles from './AnswerList.module.scss';
import { useSelector } from 'react-redux';

const AnswerList = ({ questionIndex }) => {
  const { questions } = useSelector((state) => state.lessons);

  const question = questions[questionIndex];
  return (
    <ul className={styles.answer__list}>
      {question.answers.map((answer, index) => (
        <Answer
          key={answer}
          answerText={answer}
          answerIndex={index}
          questionType={question.type}
          questionIndex={questionIndex}
        />
      ))}
    </ul>
  );
};

AnswerList.propTypes = {};

export default AnswerList;
