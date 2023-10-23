import React, { useContext } from 'react';
import styles from './LessonResult.module.scss';
import { removeSpaces } from '../../utils/formatChemicalFormula';
import { UserContext } from '../../context';

const LessonResult = ({ userAnswers, questions }) => {
  const { userData } = useContext(UserContext);

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

  for (let index = 0; index < totalQuestions; index++) {
    const { correctAnswers, type } = questions[index];
    const userAnswer = userAnswers[index];

    if (!userAnswer.length) {
      totalSkipped += 1;
    } else if (type === 'single') {
      const [{ answerIndex }] = userAnswer;
      checkAnswer(correctAnswers[0] === answerIndex, index);
    } else if (type === 'multiple') {
      if (correctAnswers.length !== userAnswer.length) {
        addError(index);
      } else {
        const isCorrect = correctAnswers.every(
          (answer, index) => answer === userAnswer[index].answerIndex
        );
        checkAnswer(isCorrect, index);
      }
    } else if (type === 'input') {
      const [{ answerText }] = userAnswer;
      const isCorrect = removeSpaces(correctAnswers[0]) === removeSpaces(answerText);
      checkAnswer(isCorrect, index);
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
