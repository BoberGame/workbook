import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import styles from './Header.module.scss';
import Button from '../UI/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../store/slices/authSlice';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
// import homeIcon from '../../assets/images/icons/home.svg';
import { ReactComponent as ArrowIcon } from '../../assets/images/icons/arrow-left.svg';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    // TODO: use Button component and add some button variants
    <button className="btn-clear" type="button" onClick={() => navigate(-1)} title="Вернуться назад">
      <ArrowIcon />
    </button>
  );
};

const Header = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { isAuth, userData } = auth;
  const location = useLocation();
  const isHomePage = location.pathname === '/home';

  return (
    <header className={styles.header}>
      <div className={styles.header__left}>
        {!isHomePage && isAuth && <BackButton />}

        {/* <Link to="/home"> */}
        {/* <img src={homeIcon} alt="Вернуться на главную" width="30" height="30" /> */}
        {/* </Link> */}
        <Breadcrumbs />
      </div>
      <div className={styles.header__right}>
        {isAuth && (
          <>
            <div className={styles.user__info}>
              <span>{userData.fullName}</span>
              <span>{userData.group}</span>
            </div>
            <Button size="sm" clickHandler={() => dispatch(authActions.signOut())}>
              Выйти
            </Button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
