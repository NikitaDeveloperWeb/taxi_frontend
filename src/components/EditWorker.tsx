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

import Select from './Select';
import { usersAPI } from '../services/api/usersApi';
interface WorkerEditProps {
  id: string;
}

//chema form
const EditWorkerSchema = yup.object().shape({
  inn: yup.string(),
  password: yup.string(),
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

export interface EditProps {
  inn?: string;
  firstName?: string;
  lastName?: string;
  date?: string;
  vo?: string;
  phone?: string;
  car?: string;
  position?: 'Оператор' | 'Таксист';
  address?: string;
  passport?: string;
  password?: string;
}

function EditWorker({ id }: WorkerEditProps) {
  const { register, handleSubmit } = useForm<EditProps>({
    resolver: yupResolver(EditWorkerSchema),
  });
  const onSubmit = async (data: EditProps) => {
    try {
      await usersAPI.editUser(data, id);
    } catch (error) {}
  };
  const [activeStep, setActiveStep] = React.useState('stepper__one');

  return (
    <Form
      id="Edit_Worker_Props"
      method="POST"
      functionOnSubmit={handleSubmit(onSubmit)}
      title="Редактировать работника"
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
              form="Edit_Worker_Props"
            />
            <Field
              type="text"
              placeholder="Фамилия"
              className="field__primory"
              name="lastname"
              fieldRef={register}
              icon={<SupervisedUserCircleIcon />}
              form="Edit_Worker_Props"
            />
            <Field
              type="text"
              placeholder="ИНН"
              className="field__primory"
              name="inn"
              fieldRef={register}
              icon={<PersonIcon />}
              form="Edit_Worker_Props"
            />
            <Field
              type="text"
              placeholder="Водительское удостовер."
              className="field__primory"
              name="vo"
              fieldRef={register}
              icon={<PersonPinCircleIcon />}
              form="Edit_Worker_Props"
            />
            <span onClick={() => setActiveStep('stepper__two')}>
              <Button
                value="Далее"
                type="button"
                className="button__primary"
                form="Edit_Worker_Props"
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
              form="Edit_Worker_Props"
            />
            <Field
              type="text"
              placeholder="Phone"
              className="field__primory"
              name="phone"
              fieldRef={register}
              icon={<PhoneAndroidIcon />}
              form="Edit_Worker_Props"
            />
            <Field
              type="date"
              placeholder="Date"
              className="field__primory"
              name="date"
              fieldRef={register}
              icon={<ScheduleIcon />}
              form="Edit_Worker_Props"
            />
            <Field
              type="text"
              placeholder="Адрес"
              className="field__primory"
              name="address"
              fieldRef={register}
              icon={<LocationOnIcon />}
              form="Edit_Worker_Props"
            />
            <span onClick={() => setActiveStep('stepper__one')}>
              <Button
                value="Назад"
                type="button"
                className="button__primary"
                form="Edit_Worker_Props"
              />
            </span>
            <span onClick={() => setActiveStep('stepper__three')}>
              <Button
                value="Далее"
                type="button"
                className="button__primary"
                form="Edit_Worker_Props"
              />
            </span>
          </div>
        }
        childrenThree={
          <div>
            <Select
              name="action"
              placeholder="Позиция"
              option={['Оператор', 'Таксист']}
              icon={<WorkIcon />}
              className="select__primory"
              id="action_sel"
            />
            <Field
              type="password"
              placeholder="Password"
              className="field__primory"
              name="password"
              fieldRef={register}
              icon={<VpnKeyIcon />}
              form="Edit_Worker_Props"
            />
            <Field
              type="password"
              placeholder="Repeat password"
              className="field__primory"
              name="repeat__password"
              fieldRef={register}
              icon={<VpnKeyIcon />}
              form="Edit_Worker_Props"
            />

            <span onClick={() => setActiveStep('stepper__two')}>
              <Button
                value="Назад"
                type="button"
                className="button__primary"
                form="Edit_Worker_Props"
              />
            </span>
            <Button
              value="Редактировать"
              type="submit"
              className="button__primary"
              form="Edit_Worker_Props"
            />
          </div>
        }
        step={activeStep}
      />
    </Form>
  );
}

export default EditWorker;
