import React from 'react';
import styles from './LessonHeader.module.scss';
import ProgressBar from '../ProgressBar/ProgressBar';
import Question from '../Question/Question';
import PropTypes from 'prop-types';

const LessonHeader = ({ step, maxSteps, question }) => {
  return (
    <div className={styles.header}>
      <ProgressBar currentStep={step} maxSteps={maxSteps} />
      <Question question={question} />
    </div>
  );
};

LessonHeader.propTypes = {
  step: PropTypes.number.isRequired,
  maxSteps: PropTypes.number.isRequired,
  question: PropTypes.object.isRequired,
};

export default LessonHeader;
