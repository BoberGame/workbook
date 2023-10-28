import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './LessonFooter.module.scss';
import Button from '../UI/Button/Button';

const LessonFooter = ({ step, setStep, saveUserAnswer }) => {
  const { questions } = useSelector((state) => state.lessons);
  const isLessonEnd = step === questions.length;

  const moveOnHandler = () => {
    saveUserAnswer();
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
  setStep: PropTypes.func.isRequired,
  saveUserAnswer: PropTypes.func.isRequired,
};

export default LessonFooter;
