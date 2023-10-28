import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProgressBar.module.scss';

const ProgressBar = ({ currentStep, maxSteps }) => {
  return <div className={styles.progress__bar}>{`${currentStep + 1}/${maxSteps}`}</div>;
};

ProgressBar.propTypes = {
  currentStep: PropTypes.number.isRequired,
  maxSteps: PropTypes.number.isRequired,
};

export default ProgressBar;
