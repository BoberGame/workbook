import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Lesson.module.scss';
import Instruments from '../../components/Instruments/Instruments';
import { useDispatch, useSelector } from 'react-redux';
import { lessonsActions } from '../../store/slices/lessonsSlice';
import Loader from '../../components/Loader/Loader';
import LessonWindow from '../../components/LessonWindow/LessonWindow';

const Lesson = () => {
  const dispatch = useDispatch();
  const { lessonId } = useParams();
  const lessons = useSelector((state) => state.lessons);
  const { questions } = lessons.lessons[lessonId - 1];

  useEffect(() => {
    // dispatch(lessonsActions.setIsLoading(true));
    dispatch(lessonsActions.setQuestions(questions));
    // dispatch(lessonsActions.setIsLoading(false));
  }, [dispatch, questions]);

  if (lessons.isLoading) {
    return <Loader />;
  }

  return (
    <div className={`${styles.wrapper} container`}>
      <LessonWindow />
      <Instruments />
    </div>
  );
};

export default Lesson;
