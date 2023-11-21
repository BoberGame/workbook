import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import styles from './Breadcrumbs.module.scss';

const dictionary = {
  course: 'Курс',
  lesson: 'Занятие',
};

const Breadcrumbs = () => {
  const course = useSelector((state) => state.lessons.course);
  const { pathname } = useLocation();
  const path = pathname.slice(1).split('/');

  if (path.length > 1 && course.lessons) {
    const lessonNumber = path.at(-1);
    const lessonTitle = course.lessons[lessonNumber - 1].title;
    const crumb = `${dictionary[path[0]]} ${lessonNumber} - ${lessonTitle}`;
    return <h2 className={styles.title}>{crumb}</h2>;
  }
};

export default Breadcrumbs;
