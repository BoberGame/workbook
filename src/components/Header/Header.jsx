import React from 'react';
import styles from './Header.module.scss';
import Button from '../UI/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../../store/slices/authSlice';

const Header = () => {
  const dispatch = useDispatch();
  const { isAuth, userData } = useSelector((state) => state.auth);

  return (
    <header className={styles.header}>
      <h2 className={styles.header__title}>Электронная тетрадь</h2>
      <div className={styles.header__right}>
        {isAuth && (
          <>
            <div className={styles.user__info}>
              <span>{userData.fullName}</span>
              <span>{userData.group}</span>
            </div>
            <Button size="sm" onClickHandler={() => dispatch(signOut())}>
              Выйти
            </Button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
