import { useDispatch } from 'react-redux';
import React from 'react';
import styles from './Login.module.scss';
import { Formik } from 'formik';
import Button from '../../components/UI/Button/Button';
import { authActions } from '../../store/slices/authSlice';

const Login = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.wrapper}>
      <div className={styles.window}>
        <h1 className={styles.title}>Вход в систему</h1>
        <Formik
          initialValues={{ fullName: '', group: '' }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              dispatch(authActions.signIn({ userData: values }));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ values, handleSubmit, handleChange, onBlur, isSubmitting }) => (
            <form onSubmit={handleSubmit}>
              <div className={styles.form__item}>
                <label className={styles.form__label} htmlFor="fullName">
                  Фамилия и имя:
                </label>
                <input
                  className={styles.form__control}
                  type="text"
                  id="fullName"
                  name="fullName"
                  onChange={handleChange}
                  onBlur={onBlur}
                  value={values.fullName}
                />
              </div>
              <div className={styles.form__item}>
                <label className={styles.form__label} htmlFor="group">
                  Группа:
                </label>
                <input
                  className={styles.form__control}
                  type="text"
                  id="group"
                  name="group"
                  onChange={handleChange}
                  onBlur={onBlur}
                  value={values.group}
                />
              </div>
              <div className={styles.footer}>
                <Button type="submit" disabled={isSubmitting}>
                  Войти
                </Button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
