import React from 'react';
import Button from '../../UI/Button/Button';
import styles from './Lesson.module.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const LessonFooter = ({ step, setStep, questions, isLessonEnd, saveUserAnswer }) => {
  const moveOnHandler = async () => {
    await saveUserAnswer();
    setStep(step + 1);
  };

  return (
    <div className={styles.footer}>
      {isLessonEnd ? (
        <Link className={styles.footer__link} to="/home">
          <Button>Вернуться на главную</Button>
        </Link>
      ) : (
        <>
          <Button disabled={step === 0} type="button" onClickHandler={() => setStep(step - 1)}>
            Назад
          </Button>
          <Button disabled={isLessonEnd} type="button" onClickHandler={moveOnHandler}>
            {step === questions.length - 1 ? 'Подвести итоги' : 'Вперёд'}
          </Button>
        </>
      )}
    </div>
  );
};

LessonFooter.propTypes = {
  step: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
  isLessonEnd: PropTypes.bool.isRequired,
  setStep: PropTypes.func.isRequired,
  saveUserAnswer: PropTypes.func.isRequired,
};

export default LessonFooter;
