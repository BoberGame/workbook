import React from 'react';
import ContentList from '../../components/ContentList/ContentList';
import styles from './Home.module.scss';
import { useSelector } from 'react-redux';

const Home = () => {
  const course = useSelector((state) => state.lessons.course);
  return (
    <div className={`${styles.wrapper} container`}>
      <div className={styles.window}>
        <h1 className={styles.title}>{course.title}</h1>
        <ContentList />
      </div>
    </div>
  );
};

export default Home;
