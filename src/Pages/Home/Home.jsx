import React, { useContext } from 'react';
import ContentList from '../../components/ContentList/ContentList';
import styles from './Home.module.scss';
import { UserContext } from '../../context';

const Home = () => {
  const { course } = useContext(UserContext);
  // console.log(course);
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
