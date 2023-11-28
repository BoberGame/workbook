import { useDispatch } from 'react-redux';
import React from 'react';
import styles from './Login.module.scss';
import { Field, Formik } from 'formik';
import Button from '../../components/UI/Button/Button';
import { authActions } from '../../store/slices/authSlice';
import { genSalt, hash } from 'bcryptjs';

const FormField = ({ label, ...props }) => {
  console.log(props.errors);
  return (
    <div className={styles.form__item}>
      <label className={styles.form__label} htmlFor={props.id}>
        {label}:
      </label>
      <Field className={styles.form__control} {...props} />
      {/* {props.errors[props.name] && props.touched[props.name]} */}
    </div>
  );
};

const initialValues = {
  firstName: '',
  lastName: '',
  password: '',
  group: '',
};

const Login = () => {
  const dispatch = useDispatch();

  const hashPassword = async (password, newPassword) => {
    const salt = await genSalt(10);
    const hashedPassword = await hash(password, salt);
    const hashedNewPassword = await hash(newPassword, salt);
    const passwordsMatch = hashedPassword === hashedNewPassword;
  };

  return (
    <div className={`${styles.wrapper} container`}>
      <div className={styles.window}>
        <h1 className={styles.title}>Вход в систему</h1>
        <Formik
          initialValues={initialValues}
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
                <label className={styles.form__label} htmlFor="firstName">
                  Имя:
                </label>
                <input
                  className={styles.form__control}
                  type="text"
                  id="firstName"
                  name="firstName"
                  onChange={handleChange}
                  onBlur={onBlur}
                  value={values.fullName}
                  autoComplete="firstName"
                />
              </div>
              <FormField type="text" name="lastName" id="lastName" label="Фамилия" />
              <div className={styles.form__item}>
                <label className={styles.form__label} htmlFor="password">
                  Пароль:
                </label>
                <input
                  className={styles.form__control}
                  type="password"
                  id="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={onBlur}
                  value={values.password}
                  autoComplete="password"
                />
              </div>
              <div className={styles.footer}>
                <Button variant="outline" type="submit" disabled={isSubmitting}>
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
