import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import PersonIcon from '@material-ui/icons/Person';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import Field from './Field';
import Form from './Form';
import Button from './Button';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserStatus } from '../store/ducks/user/selectors';
import { fetchSignIn } from '../store/ducks/user/actionCreators';
import { LoadingState } from '../store/types';

const LoginFormSchema = yup.object().shape({
  username: yup.string().required('Enter your username'),
  password: yup.string().min(6, 'At least six characters').required(),
});

export interface LoginProps {
  username: string;
  password: string;
}

function LoginForm() {
  const dispath = useDispatch();
  const loadingStatus = useSelector(selectUserStatus);
  const { register, handleSubmit } = useForm<LoginProps>({
    resolver: yupResolver(LoginFormSchema),
  });
  const onSubmit = async (data: LoginProps) => {
    try {
      dispath(fetchSignIn(data));
    } catch (error) {}
  };
  React.useEffect(() => {
    if (loadingStatus === LoadingState.SUCCESS) {
    } else if (loadingStatus === LoadingState.ERROR) {
    }
  }, [loadingStatus]);
  return (
    <Form
      id="login__form"
      method="POST"
      functionOnSubmit={handleSubmit(onSubmit)}
      title="Авторизация"
      className="form__primory"
    >
      <Field
        type="text"
        placeholder="Логин"
        className="field__primory"
        name="username"
        fieldRef={register}
        icon={<PersonIcon />}
        form="login__form"
      />
      <Field
        type="password"
        placeholder="Пароль"
        className="field__primory"
        name="password"
        fieldRef={register}
        icon={<VpnKeyIcon />}
        form="login__form"
      />

      <Button
        value="Войти"
        type="submit"
        className="button__primary"
        form="login__form"
      />
    </Form>
  );
}

export default LoginForm;
