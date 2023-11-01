import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Lesson.module.scss';
import Instruments from '../../components/Instruments/Instruments';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoading, setQuestions } from '../../store/slices/lessonsSlice';
import Loader from '../../components/Loader/Loader';
import LessonWindow from '../../components/LessonWindow/LessonWindow';

const Lesson = () => {
  const dispatch = useDispatch();
  const { lessonId } = useParams();
  const { lessons, isLoading } = useSelector((state) => state.lessons);
  const { questions } = lessons[lessonId - 1];

  useEffect(() => {
    dispatch(setIsLoading(true));
    dispatch(setQuestions(questions));
    dispatch(setIsLoading(false));
  }, [dispatch, questions]);

  if (isLoading) {
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
