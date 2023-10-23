import React, { useContext } from 'react';
import styles from './Header.module.scss';
import { UserContext } from '../../context';
import Button from '../../UI/Button/Button';

const Header = () => {
  const { userData, isAuth, setIsAuth, setUserData } = useContext(UserContext);
  const logout = () => {
    setIsAuth(false);
    setUserData({ fullName: '', group: '' });
    localStorage.removeItem('userData');
  };

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
            <Button size="sm" onClickHandler={logout}>
              Выйти
            </Button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
