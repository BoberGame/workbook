import React from 'react';
import ContentList from '../../components/ContentList/ContentList';
import styles from './Home.module.scss';
import { useSelector } from 'react-redux';

const Home = () => {
  const { course } = useSelector((state) => state.lessons);
  return (
    <div className={styles.wrapper}>
      <div className={styles.window}>
        <h1 className={styles.title}>{course.title}</h1>
        {/* <h2 className={styles.subtitle}>Список занятий:</h2> */}
        <ContentList />
      </div>
    </div>
  );
};

export default Home;
