/** @jsxImportSource @emotion/react */
import React, { useCallback, useRef, VFC } from 'react';
import { useForm } from 'react-hook-form';
import { Link, Redirect } from 'react-router-dom';
import KaKaoLogin from './KaKaoLogin';
import NaverLogin from './NaverLogin';
import {
  AuthButton,
  AuthButtonStyles,
  AuthError,
  Form,
  FormStyles,
  Input,
  InputStyle,
} from './styles';
import { useQuery, useQueryClient } from 'react-query';
import axios from 'axios';
import { useTheme } from '@emotion/react';
import { IUser } from '../../dto/IUser';
import { fetcher } from '../../lib/api/fetch';

interface PropsTypes {
  type?: string;
  user?: IUser;
}

interface FormData {
  email: string;
  nickname: string;
  passwordConfirm: string;
  password: string;
}

const Auth: VFC<PropsTypes> = ({ type }) => {
  const queryClient = useQueryClient();
  const { data: userData } = useQuery<IUser>('users', fetcher);
  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const password = useRef<string>();
  password.current = watch('password');
  const theme = useTheme();

  const onSubmit = useCallback(
    (data: FormData) => {
      const { email, nickname, password } = data;
      const fetch = async () => {
        try {
          if (type !== 'signup') {
            await axios
              .post(
                'http://localhost:4000/api/users/login',
                { email, password },
                { withCredentials: true },
              )
              .then((res) => {
                queryClient.refetchQueries('users');
              })
              .catch((e) => console.log(e));
          } else {
            await axios
              .post(
                'http://localhost:4000/api/users/register',
                { email, nickname, password },
                { withCredentials: true },
              )
              .then((res) => {
                queryClient.refetchQueries('users');
              })
              .catch((e) => console.log(e));
          }
        } catch (e) {
          console.log(e);
        }
      };
      fetch();
      reset({
        email: '',
        nickname: '',
        passwordConfirm: '',
        password: '',
      });
    },
    [queryClient, reset, type],
  );

  if (userData) {
    return <Redirect to="/main" />;
  }
  return (
    <Form css={FormStyles(theme)} onSubmit={handleSubmit(onSubmit)}>
      <Input
        css={InputStyle(theme)}
        {...register('email', {
          required: true,
          pattern:
            /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
        })}
        placeholder="EMAIL"
      />
      {errors.email && errors.email.type === 'required' && (
        <AuthError>
          <p>??? ???????????? ??????????????????.</p>
        </AuthError>
      )}
      {errors.email && errors.email.type === 'pattern' && (
        <AuthError>
          <p>??? ???????????? ????????? ??????????????????.</p>
        </AuthError>
      )}
      {type === 'signup' && (
        <Input
          css={InputStyle(theme)}
          placeholder="NICKNAME"
          {...register('nickname', { required: true, minLength: 2 })}
        />
      )}
      {errors.nickname && errors.nickname.type === 'required' && (
        <AuthError>
          <p>??? ???????????? ??????????????????.</p>
        </AuthError>
      )}
      {errors.nickname && errors.nickname.type === 'minLength' && (
        <AuthError>
          <p>??? 2?????? ?????? ??????????????????.</p>
        </AuthError>
      )}
      <Input
        css={InputStyle(theme)}
        type="password"
        placeholder="PW"
        {...register('password', { required: true, minLength: 5 })}
      />
      {errors.password && errors.password.type === 'required' && (
        <AuthError>
          <p>??? ??????????????? ??????????????????.</p>
        </AuthError>
      )}
      {errors.password && errors.password.type === 'minLength' && (
        <AuthError>
          <p>??? 5?????? ?????? ??????????????????.</p>
        </AuthError>
      )}
      {type === 'signup' && (
        <Input
          css={InputStyle(theme)}
          type="password"
          placeholder="PW CONFIRM"
          {...register('passwordConfirm', {
            required: true,
            validate: (value) => value === password.current,
          })}
        />
      )}
      {errors.passwordConfirm && errors.passwordConfirm?.type === 'required' && (
        <AuthError>
          <p>??? ??????????????? ??????????????????.</p>
        </AuthError>
      )}
      {errors.passwordConfirm && errors.passwordConfirm !== errors.password && (
        <AuthError>
          <p>??? ??????????????? ??????????????????.</p>
        </AuthError>
      )}
      <AuthButton css={AuthButtonStyles(theme)} type="submit">
        ?????????
      </AuthButton>
      <div className="box">
        {type !== 'signup' ? (
          <p>
            ????????? ???????????????? <Link to="/signup">????????????</Link>
          </p>
        ) : (
          <p>
            ?????? ??????????????????? <Link to="/login">?????????</Link>
          </p>
        )}
      </div>
      {type !== 'signup' && (
        <>
          <KaKaoLogin />
          <NaverLogin />
        </>
      )}
    </Form>
  );
};

export default Auth;
