import axios from 'axios';
// eslint-disable-next-line import/no-cycle
import { RegisterProps } from '../../components/EditOrder';
// eslint-disable-next-line import/no-cycle
import { OrderProps } from '../../components/OrderAdd';
import { OrderState } from '../../store/ducks/orders/contracts/state';
// eslint-disable-next-line import/no-cycle

// eslint-disable-next-line import/prefer-default-export
export const OrderAPI = {
  async fetchOrder(): Promise<OrderState['data']> {
    const config = {
      headers: {
        ContentType: `application/json`,
      },
    };
    const { data } = await axios.get(
      'https://taxi-backend-ru.herokuapp.com/orders',
      config
    );
    return data;
  },
  async addOrder(data: RegisterProps) {
    const config = {
      headers: {
        ContentType: `application/json`,
      },
    };
    // eslint-disable-next-line react-hooks/rules-of-hooks

    await axios.post(
      'https://taxi-backend-ru.herokuapp.com/orders',
      data,
      config
    );
  },
  async editOrder(data: OrderProps, id: string) {
    const config = {
      headers: {
        ContentType: `application/json`,
      },
    };
    // eslint-disable-next-line react-hooks/rules-of-hooks

    await axios.put(
      `https://taxi-backend-ru.herokuapp.com/orders/${id}`,
      data,
      config
    );
  },
  async deleteOrder(id: string) {
    // eslint-disable-next-line react-hooks/rules-of-hooks

    await axios.delete(`https://taxi-backend-ru.herokuapp.com/orders/${id}`);
  },
};
