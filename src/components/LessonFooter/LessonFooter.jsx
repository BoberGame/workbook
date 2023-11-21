import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LessonFooter.module.scss';
import Button from '../UI/Button/Button';

const LessonFooter = ({ step, setStep, lessons, saveHandler }) => {
  const isLessonEnd = step === lessons.questions.length;

  const moveOnHandler = () => {
    saveHandler();
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
          <Button disabled={step === 0} type="button" clickHandler={() => setStep(step - 1)}>
            Назад
          </Button>
          <Button disabled={isLessonEnd} type="button" clickHandler={moveOnHandler}>
            {step === lessons.questions.length - 1 ? 'Подвести итоги' : 'Вперёд'}
          </Button>
        </>
      )}
    </div>
  );
};

LessonFooter.propTypes = {
  step: PropTypes.number.isRequired,
  setStep: PropTypes.func.isRequired,
  lessons: PropTypes.object.isRequired,
  saveHandler: PropTypes.func.isRequired,
};

export default LessonFooter;
