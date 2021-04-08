import { axios } from '../../core/axios';
// eslint-disable-next-line import/no-cycle
import { LoginProps } from '../../components/LoginForm';

export interface ResponseApi {
  [x: string]: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
}

// eslint-disable-next-line import/prefer-default-export
export const AuthApi = {
  async signIn(postData: LoginProps): Promise<ResponseApi> {
    const config = {
      headers: {
        // eslint-disable-next-line prettier/prettier
        // Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios.post<ResponseApi>(
      'https://taxi-backend-ru.herokuapp.com/auth/login',
      {
        username: postData.username,
        password: postData.password,
      },
      config
    );
    localStorage.setItem('token', data.access_token.toString());
    localStorage.setItem('data', JSON.stringify(data.data).toString());
    return data;
  },

  async getMe(): Promise<ResponseApi> {
    const config = {
      headers: {
        // eslint-disable-next-line prettier/prettier
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios.get<ResponseApi>(
      'https://taxi-backend-ru.herokuapp.com/profile',
      config
    );
    return data;
  },
};
