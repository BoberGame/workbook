import React from 'react';
import styles from './LessonHeader.module.scss';
import ProgressBar from '../ProgressBar/ProgressBar';
import Question from '../Question/Question';

const LessonHeader = ({ step, maxSteps }) => {
  return (
    <div className={styles.header}>
      <ProgressBar currentStep={step} maxSteps={maxSteps} />
      <Question />
    </div>
  );
};

export default LessonHeader;
