import React, { useContext } from 'react';
import styles from './ContentList.module.scss';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../context';

const ContentList = () => {
  const { course } = useContext(UserContext);

  return (
    <ul className={styles.list}>
      {course.lessons.map(({ title }, index) => (
        <li className={styles.list__item} key={title}>
          <NavLink to={`/lesson/${index + 1}`}>{title}</NavLink>
          <span className={styles.list__count}>{index + 1}</span>
        </li>
      ))}
    </ul>
  );
};

export default ContentList;
