import React from 'react';
import { useEffect } from 'react';
import {
  replaceUserAnswers,
  setCurrentUserAnswer,
  setQuestion,
  setUserAnswers,
} from '../../store/slices/lessonsSlice';
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
  const [step, setStep] = useState(0);
  const { questions, currentUserAnswer, isLoaded, userAnswers } = useSelector((state) => state.lessons);

  const question = questions[step];
  const isLessonEnd = step === questions.length;
  const initialAnswerData = { answerIndex: 0, answerText: '', questionIndex: step };

  const saveUserAnswer = () => {
    if (currentUserAnswer.length === 0) {
      if (userAnswers.length === 0 || !userAnswers[step]) {
        dispatch(setUserAnswers([...userAnswers, initialAnswerData]));
      }
    } else {
      dispatch(replaceUserAnswers({ index: step, newAnswer: currentUserAnswer }));
      dispatch(setCurrentUserAnswer([]));
    }
  };

  useEffect(() => {
    dispatch(setQuestion({ question }));
  }, [dispatch, question]);

  if (!isLoaded) {
    return <Loader />;
  }

  return (
    <div className={styles.window}>
      {isLessonEnd ? (
        <LessonResult />
      ) : (
        <>
          <LessonHeader step={step} maxSteps={questions.length} />
          <AnswerList questionIndex={step} />
        </>
      )}
      <LessonFooter step={step} setStep={setStep} saveUserAnswer={saveUserAnswer} />
    </div>
  );
};

export default LessonWindow;
