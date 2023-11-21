import React from 'react';
import styles from './Question.module.scss';
import PropTypes from 'prop-types';

const Question = ({ question }) => {
  return (
    <div>
      <h1 className={styles.title}>{question.title}</h1>
      {question.imgSrc && (
        <div className={styles.img__wrapper}>
          <img className={styles.img} src={question.imgSrc} alt="" />
        </div>
      )}
    </div>
  );
};

Question.propTypes = {
  question: PropTypes.object.isRequired,
};

export default Question;
