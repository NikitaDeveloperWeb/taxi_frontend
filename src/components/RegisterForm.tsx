//libs
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

//components
import Field from './Field';
import Form from './Form';
import Button from './Button';
import Stepper from './Stepper';
import Select from './Select';
//icons
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PersonIcon from '@material-ui/icons/Person';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import FaceIcon from '@material-ui/icons/Face';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';
import MailIcon from '@material-ui/icons/Mail';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import ScheduleIcon from '@material-ui/icons/Schedule';
import WorkIcon from '@material-ui/icons/Work';
import { usersAPI } from '../services/api/usersApi';

//chema form
const RegisterFormSchema = yup.object().shape({
  inn: yup.string(),
  password: yup.string(),
  password2: yup.string(),
  firstName: yup.string(),
  lastName: yup.string(),
  date: yup.string(),
  car: yup.string(),
  phone: yup.string(),
  vo: yup.string(),
  position: yup.string(),
  passport: yup.string(),
  address: yup.string(),
});

export interface RegisterProps {
  inn: string;
  firstName: string;
  lastName: string;
  date: string;
  vo: string;
  username: string;
  car: string;
  position: 'Оператор' | 'Таксист';
  address: string;
  passport: string;
  password: string;
  password2: string;
}

function RegisterForm() {
  const { register, handleSubmit } = useForm<RegisterProps>({
    resolver: yupResolver(RegisterFormSchema),
  });
  const onSubmit = async (data: RegisterProps) => {
    if (data.position == 'Оператор') {
      data.position = 'Оператор';
    } else {
      data.position = 'Таксист';
    }
    try {
      await usersAPI.addUser(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const [activeStep, setActiveStep] = React.useState('stepper__one');

  return (
    <Form
      id="User_add_form"
      method="POST"
      functionOnSubmit={handleSubmit(onSubmit)}
      title="Добавить работника"
      className="form__primory"
    >
      <Stepper
        childrenOne={
          <div>
            <Field
              type="text"
              placeholder="Имя"
              className="field__primory"
              name="firstname"
              fieldRef={register}
              icon={<FaceIcon />}
              form="User_add_form"
            />
            <Field
              type="text"
              placeholder="Фамилия"
              className="field__primory"
              name="lastname"
              fieldRef={register}
              icon={<SupervisedUserCircleIcon />}
              form="User_add_form"
            />
            <Field
              type="text"
              placeholder="ИНН"
              className="field__primory"
              name="inn"
              fieldRef={register}
              icon={<PersonIcon />}
              form="User_add_form"
            />
            <Field
              type="text"
              placeholder="Водительское удостовер."
              className="field__primory"
              name="vo"
              fieldRef={register}
              icon={<PersonPinCircleIcon />}
              form="User_add_form"
            />
            <span onClick={() => setActiveStep('stepper__two')}>
              <Button
                value="Далее"
                type="button"
                className="button__primary"
                form="User_add_form"
              />
            </span>
          </div>
        }
        childrenTwo={
          <div>
            <Field
              type="text"
              placeholder="Пасспорт"
              className="field__primory"
              name="passport"
              fieldRef={register}
              icon={<MailIcon />}
              form="User_add_form"
            />
            <Field
              type="text"
              placeholder="Phone"
              className="field__primory"
              name="username"
              fieldRef={register}
              icon={<PhoneAndroidIcon />}
              form="User_add_form"
            />
            <Field
              type="date"
              placeholder="Date"
              className="field__primory"
              name="date"
              fieldRef={register}
              icon={<ScheduleIcon />}
              form="User_add_form"
            />
            <Field
              type="text"
              placeholder="Адрес"
              className="field__primory"
              name="address"
              fieldRef={register}
              icon={<LocationOnIcon />}
              form="User_add_form"
            />
            <span onClick={() => setActiveStep('stepper__one')}>
              <Button
                value="Назад"
                type="button"
                className="button__primary"
                form="User_add_form"
              />
            </span>
            <span onClick={() => setActiveStep('stepper__three')}>
              <Button
                value="Далее"
                type="button"
                className="button__primary"
                form="User_add_form"
              />
            </span>
          </div>
        }
        childrenThree={
          <div>
            <Select
              name="position"
              placeholder="Позиция"
              option={['Оператор', 'Таксист']}
              icon={<WorkIcon />}
              className="select__primory"
              id="action_sel"
              form="User_add_form"
            />
            <Field
              type="password"
              placeholder="Password"
              className="field__primory"
              name="password"
              fieldRef={register}
              icon={<VpnKeyIcon />}
              form="User_add_form"
            />
            <Field
              type="password"
              placeholder="Repeat password"
              className="field__primory"
              name="password2"
              fieldRef={register}
              icon={<VpnKeyIcon />}
              form="User_add_form"
            />

            <span onClick={() => setActiveStep('stepper__two')}>
              <Button
                value="Назад"
                type="button"
                className="button__primary"
                form="User_add_form"
              />
            </span>
            <Button
              value="Добавить"
              type="submit"
              className="button__primary"
              form="User_add_form"
            />
          </div>
        }
        step={activeStep}
      />
    </Form>
  );
}

export default RegisterForm;
