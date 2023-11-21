import React from 'react';
import { useEffect } from 'react';
import { lessonsActions } from '../../store/slices/lessonsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import Loader from '../Loader/Loader';
import LessonResult from '../LessonResult/LessonResult';
import LessonHeader from '../LessonHeader/LessonHeader';
import AnswerList from '../AnswerList/AnswerList';
import LessonFooter from '../LessonFooter/LessonFooter';
import styles from './LessonWindow.module.scss';

const LessonWindow = () => {
  const dispatch = useDispatch();
  const lessons = useSelector((state) => state.lessons);
  const [step, setStep] = useState(0);
  const { questions, selectedAnswers, userAnswers, isLoading } = lessons;
  const question = questions[step];
  const isLessonEnd = step === questions.length;
  const initialAnswerData = { index: 0, text: '', questionIndex: step, isAnswered: false };

  const saveUserAnswer = () => {
    if (selectedAnswers.length === 0) {
      if (userAnswers.length === 0 || !userAnswers[step]) {
        dispatch(lessonsActions.setUserAnswers([...userAnswers, initialAnswerData]));
      }
    } else {
      dispatch(lessonsActions.replaceUserAnswers({ index: step, newAnswer: selectedAnswers }));
      dispatch(lessonsActions.selectAnswer([]));
    }
  };

  useEffect(() => {
    console.log('Lesson window render');
    return () => {
      dispatch(lessonsActions.refreshUserAnswers());
      console.log('Lessin window umnounted');
    };
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={styles.window}>
      {isLessonEnd ? (
        <LessonResult />
      ) : (
        <>
          <LessonHeader step={step} maxSteps={questions.length} question={question} />
          <AnswerList questionIndex={step} question={question} />
        </>
      )}
      <LessonFooter step={step} setStep={setStep} lessons={lessons} saveHandler={saveUserAnswer} />
    </div>
  );
};

export default LessonWindow;
