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

//chema form
const OrderEditSchema = yup.object().shape({
  from: yup.string(),
  to: yup.string(),
  price: yup.number(),
  phone: yup.string(),
  child: yup.string(),
  bagege: yup.string(),
  fulfilled: yup.string(),
});

interface OrderEditProps {
  id: string;
}

export interface RegisterProps {
  from?: string;
  to?: string;
  price: number;
  child?: string | boolean;
  bagege?: string | boolean;
  phone?: string;
  fulfilled: string;
}

function OrderEdit({ id }: OrderEditProps) {
  const { register, handleSubmit } = useForm<RegisterProps>({
    resolver: yupResolver(OrderEditSchema),
  });
  const onSubmit = async (data: RegisterProps) => {
    if (data.child === 'Да') {
      data.child = true;
    } else {
      data.child = false;
    }

    if (data.bagege === 'Да') {
      data.bagege = true;
    } else {
      data.bagege = false;
    }

    // eslint-disable-next-line no-underscore-dangle
    data.fulfilled = '';
    data.price *= 1;
    try {
      await OrderAPI.editOrder(data, id);
    } catch (error) {
      console.log(error, 'error');
    }
  };

  return (
    <Form
      id="edit_order__form"
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
        form="edit_order__form"
      />
      <Field
        type="text"
        placeholder="Куда"
        className="field__primory"
        name="to"
        fieldRef={register}
        icon={<GpsFixedIcon />}
        form="edit_order__form"
      />
      <Field
        type="text"
        placeholder="Телефон"
        className="field__primory"
        name="phone"
        fieldRef={register}
        icon={<PhoneAndroidIcon />}
        form="edit_order__form"
      />
      <Field
        type="text"
        placeholder="Цена"
        className="field__primory"
        name="price"
        fieldRef={register}
        icon={<MoneyIcon />}
        form="edit_order__form"
      />
      <Select
        name="child"
        placeholder="Дети"
        option={['Да', 'Нет']}
        icon={<InsertEmoticonIcon />}
        className="select__primory"
        id="action_sel"
        form="edit_order__form"
      />
      <Select
        name="bagege"
        placeholder="Багаж"
        option={['Да', 'Нет']}
        icon={<LocalMallIcon />}
        className="select__primory"
        id="action_sel"
        form="edit_order__form"
      />
      <Button
        value="Редактировать"
        type="submit"
        className="button__primary"
        form="edit_order__form"
      />
    </Form>
  );
}

export default OrderEdit;
