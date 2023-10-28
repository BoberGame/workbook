import React from 'react';
import styles from './Question.module.scss';
import { useSelector } from 'react-redux';

const Question = () => {
  const { question } = useSelector((state) => state.lessons);
  console.log(question.imgSrc);
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

export default Question;
