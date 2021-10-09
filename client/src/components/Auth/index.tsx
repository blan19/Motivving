import React, { useCallback, useRef, VFC } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import KaKaoLogin from './KaKaoLogin';
import NaverLogin from './NaverLogin';
import { AuthButton, AuthError, Form, Input } from './styles';
import { useQuery, useQueryClient } from 'react-query';
import axios from 'axios';
import { fetcher } from '../../lib/api/fetch';

interface PropsTypes {
  type?: string;
}

interface FormData {
  email: string;
  nickname: string;
  passwordConfirm: string;
  password: string;
}

const Auth: VFC<PropsTypes> = ({ type }) => {
  const queryClient = useQueryClient();
  const { data: userData } = useQuery('users', fetcher);
  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const password = useRef<string>();
  password.current = watch('password');

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
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register('email', {
          required: true,
          pattern:
            /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
        })}
        placeholder="EMAIL"
      />
      {errors.email && errors.email.type === 'required' && (
        <AuthError>
          <p>❌ 이메일을 입력해주세요.</p>
        </AuthError>
      )}
      {errors.email && errors.email.type === 'pattern' && (
        <AuthError>
          <p>❌ 이메일을 정확히 입력해주세요.</p>
        </AuthError>
      )}
      {type === 'signup' && (
        <Input
          placeholder="NICKNAME"
          {...register('nickname', { required: true, minLength: 2 })}
        />
      )}
      {errors.nickname && errors.nickname.type === 'required' && (
        <AuthError>
          <p>❌ 닉네임을 입력해주세요.</p>
        </AuthError>
      )}
      {errors.nickname && errors.nickname.type === 'minLength' && (
        <AuthError>
          <p>❌ 2글자 이상 입력해주세요.</p>
        </AuthError>
      )}
      <Input
        type="password"
        placeholder="PW"
        {...register('password', { required: true, minLength: 5 })}
      />
      {errors.password && errors.password.type === 'required' && (
        <AuthError>
          <p>❌ 비밀번호를 입력해주세요.</p>
        </AuthError>
      )}
      {errors.password && errors.password.type === 'minLength' && (
        <AuthError>
          <p>❌ 5글자 이상 입력해주세요.</p>
        </AuthError>
      )}
      {type === 'signup' && (
        <Input
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
          <p>❌ 비밀번호를 입력해주세요.</p>
        </AuthError>
      )}
      {errors.passwordConfirm && errors.passwordConfirm !== errors.password && (
        <AuthError>
          <p>❌ 비밀번호를 확인해주세요.</p>
        </AuthError>
      )}
      <AuthButton type="submit">로그인</AuthButton>
      <div className="box">
        {type !== 'signup' ? (
          <p>
            회원이 아니신가요? <Link to="/signup">회원가입</Link>
          </p>
        ) : (
          <p>
            이미 회원이신가요? <Link to="/login">로그인</Link>
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
