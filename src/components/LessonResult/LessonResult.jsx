import React from 'react';
import styles from './LessonResult.module.scss';
import { useSelector } from 'react-redux';
import { removeSpaces } from '../../utils/utils';
import { QUESTION_TYPES } from '../../constants';

const LessonResult = () => {
  const userData = useSelector((state) => state.auth.userData);
  const lessons = useSelector((state) => state.lessons);
  const { questions, userAnswers } = lessons;

  let totalCorrectAnswers = 0;
  let totalSkipped = 0;
  let totalMistakes = 0;
  const correctAnswers = [];
  const wrongAnswers = [];
  const totalQuestions = questions.length;

  const addCorrectAnswer = (index) => {
    totalCorrectAnswers += 1;
    correctAnswers.push(index);
  };

  const addError = (index) => {
    totalMistakes += 1;
    wrongAnswers.push(index);
  };

  const checkAnswer = (condiiton, questionIndex) => {
    if (condiiton) {
      addCorrectAnswer(questionIndex);
    } else {
      addError(questionIndex);
    }
  };

  for (let questionIndex = 0; questionIndex < totalQuestions; questionIndex++) {
    const { correctAnswers, type } = questions[questionIndex];
    const userAnswer = userAnswers[questionIndex];

    if (!userAnswer.length) {
      totalSkipped += 1;
    } else if (type === QUESTION_TYPES.single) {
      const [{ index }] = userAnswer;
      checkAnswer(correctAnswers[0] === index, questionIndex);
    } else if (type === QUESTION_TYPES.multiple) {
      if (correctAnswers.length !== userAnswer.length) {
        addError(questionIndex);
      } else {
        const isCorrect = correctAnswers.every((answer, index) => answer === userAnswer[index].index);
        checkAnswer(isCorrect, questionIndex);
      }
    } else if (type === QUESTION_TYPES.input) {
      const [{ text }] = userAnswer;
      const isCorrect = removeSpaces(correctAnswers[0]) === removeSpaces(text);
      checkAnswer(isCorrect, questionIndex);
    }
  }

  const result = ((totalCorrectAnswers / totalQuestions) * 100).toFixed(2);

  return (
    <div>
      <h1 className={styles.title}>Итоги</h1>
      <div className={styles.inner}>
        <div className={styles.left}>
          <div className={styles.user__info}>
            <p>Студент: {userData.fullName}</p>
            <p>Группа: {userData.group}</p>
          </div>
          <div className={styles.stats}>
            <p className={styles.stats__item_green}>Выполнено: {totalCorrectAnswers}</p>
            <p className={styles.stats__item_red}>Ошибок: {totalMistakes}</p>
            <p>Пропущено: {totalSkipped}</p>
            <div className={styles.stats__answers}>
              <h2>Верно выполненные задания:</h2>
              {correctAnswers.map((item) => item + 1).join(', ')}
            </div>
            <div className={styles.stats__answers}>
              <h2>Неверно выполненные задания:</h2>
              {wrongAnswers.map((item) => item + 1).join(', ')}
            </div>
          </div>
        </div>
        <div className={styles.result}>
          <h2 className={styles.result__title}>Результативность</h2>
          <h3 className={styles.result__score}>{result}%</h3>
        </div>
      </div>
    </div>
  );
};

export default LessonResult;
