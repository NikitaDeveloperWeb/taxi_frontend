/* eslint-disable import/no-cycle */
import axios from 'axios';
import { EditProps } from '../../components/EditWorker';
import { RegisterProps } from '../../components/RegisterForm';
import { UsersState } from '../../store/ducks/users/contracts/state';
// eslint-disable-next-line import/extensions

// eslint-disable-next-line import/prefer-default-export
export const usersAPI = {
  async fetchUser(): Promise<UsersState['data']> {
    const config = {
      headers: {
        ContentType: `application/json`,
      },
    };
    const { data } = await axios.get(
      'https://taxi-backend-ru.herokuapp.com/users',
      config
    );
    return data;
  },
  async addUser(datas: RegisterProps) {
    const config = {
      headers: {
        ContentType: `application/json`,
      },
    };
    const { data } = await axios.post(
      'https://taxi-backend-ru.herokuapp.com/users',
      datas,
      config
    );
    return data;
  },
  async editUser(datas: EditProps, id: string) {
    const config = {
      headers: {
        ContentType: `application/json`,
      },
    };
    const { data } = await axios.put(
      `https://taxi-backend-ru.herokuapp.com/users/${id}`,
      datas,
      config
    );
    return data;
  },
  async deleteWorker(id: string) {
    // eslint-disable-next-line react-hooks/rules-of-hooks

    await axios.delete(`https://taxi-backend-ru.herokuapp.com/users/${id}`);
  },
};
