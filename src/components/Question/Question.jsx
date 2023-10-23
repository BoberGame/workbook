import React from 'react';
import styles from './Question.module.scss';

const Question = ({ question, imgSrc }) => {
  return (
    <div>
      <h1 className={styles.title}>{question}</h1>
      {imgSrc && (
        <div className={styles.img__wrapper}>
          <img className={styles.img} src={imgSrc} alt="" />
        </div>
      )}
    </div>
  );
};

export default Question;
