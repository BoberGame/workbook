import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Lesson.module.scss';
import Instruments from '../../components/Instruments/Instruments';
import { useDispatch, useSelector } from 'react-redux';
import { setQuestions } from '../../store/slices/lessonsSlice';
import Loader from '../../components/Loader/Loader';
import LessonWindow from '../../components/LessonWindow/LessonWindow';

const Lesson = () => {
  const dispatch = useDispatch();
  const { lessonId } = useParams();
  const { lessons, isLoaded } = useSelector((state) => state.lessons);
  const { questions } = lessons[lessonId - 1];

  useEffect(() => {
    dispatch(setQuestions(questions));
  }, [dispatch, questions]);

  if (!isLoaded) {
    return <Loader />;
  }

  return (
    <div className={styles.wrapper}>
      <LessonWindow />
      <Instruments />
    </div>
  );
};

export default Lesson;
