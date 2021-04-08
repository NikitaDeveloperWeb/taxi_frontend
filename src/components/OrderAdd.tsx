//libs
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
//components
import Field from './Field';
import Form from './Form';
import Button from './Button';

//icons
import GpsFixedIcon from '@material-ui/icons/GpsFixed';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import MoneyIcon from '@material-ui/icons/Money';
import Select from './Select';
import { OrderAPI } from '../services/api/ordersApi';
import { useSelector } from 'react-redux';
import { selectUserData } from '../store/ducks/user/selectors';

//chema form
const OrderFormSchema = yup.object().shape({
  from: yup.string(),
  to: yup.string(),
  price: yup.number(),
  phone: yup.string(),
  operator: yup.string(),
  child: yup.string(),
  bagage: yup.string(),
  date: yup.string(),
  time: yup.string(),
  fulfilled: yup.string(),
});

export interface OrderProps {
  operator?: string;
  from?: string;
  to?: string;
  price: number;
  child?: string | boolean;
  bagage?: string | boolean;
  phone?: string;
  date?: string;
  time?: string;
  fulfilled?: string;
}

function OrderAdd() {
  const user = useSelector(selectUserData);

  const { register, handleSubmit } = useForm<OrderProps>({
    resolver: yupResolver(OrderFormSchema),
  });

  const onSubmit = async (data: OrderProps) => {
    if (data.child === 'Да') {
      data.child = true;
    } else {
      data.child = false;
    }

    if (data.bagage === 'Да') {
      data.bagage = true;
    } else {
      data.bagage = false;
    }
    // eslint-disable-next-line no-underscore-dangle
    data.operator = user?._id;
    let date = new Date();
    data.date =
      date.getUTCDate().toString() +
      '/' +
      date.getMonth().toString() +
      '/' +
      date.getFullYear().toString();
    data.time = date.getHours().toString() + ':' + date.getMinutes().toString();
    data.fulfilled = '';
    data.price *= 1;

    try {
      await OrderAPI.addOrder(data);
      window.location.reload();
    } catch (error) {
      console.log(error, 'error');
    }
  };

  return (
    <Form
      id="order__form"
      method="POST"
      functionOnSubmit={handleSubmit(onSubmit)}
      title="Добавить заказ"
      className="form__primory"
    >
      <Field
        type="text"
        placeholder="От куда"
        className="field__primory"
        name="from"
        fieldRef={register}
        icon={<PersonPinCircleIcon />}
        form="order__form"
      />
      <Field
        type="text"
        placeholder="Куда"
        className="field__primory"
        name="to"
        fieldRef={register}
        icon={<GpsFixedIcon />}
        form="order__form"
      />
      <Field
        type="text"
        placeholder="Телефон"
        className="field__primory"
        name="phone"
        fieldRef={register}
        icon={<PhoneAndroidIcon />}
        form="order__form"
      />
      <Field
        type="text"
        placeholder="Цена"
        className="field__primory"
        name="price"
        fieldRef={register}
        icon={<MoneyIcon />}
        form="order__form"
      />
      <Select
        name="child"
        placeholder="Дети"
        option={['Да', 'Нет']}
        icon={<InsertEmoticonIcon />}
        className="select__primory"
        id="action_sel"
        form="order__form"
      />
      <Select
        name="bagage"
        placeholder="Багаж"
        option={['Да', 'Нет']}
        icon={<LocalMallIcon />}
        className="select__primory"
        id="action_sel"
        form="order__form"
      />

      <Button
        value="Оформить"
        type="submit"
        className="button__primary"
        form="order__form"
      />
    </Form>
  );
}

export default OrderAdd;
