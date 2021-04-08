import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Modal from './Modal';
import Confirm from './Confirm';
import EditWorker from './EditWorker';

interface WorkerProps {
  _id: string;
  name: string;
  inn: string;
  vo?: string;
  date: string;
  car?: string;
  address: string;
  phone: string;
  passport: string;
  position: string;
}

function Worker({
  _id,
  name,
  inn,
  vo,
  date,
  car,
  address,
  phone,
  passport,
  position,
}: WorkerProps) {
  return (
    <div className="worker">
      <h2 className="worker__name">{name}</h2>
      <div className="worker__documents">
        <ul>
          <li>
            ИНН: <p>{inn}</p>
          </li>
          <li>
            Водительское удостоверение: <p>{vo}</p>
          </li>
          <li>
            Серия и номер пасспорта: <p>{passport}</p>
          </li>
          <li>
            Адресс проживания: <p>{address}</p>
          </li>
          <li>
            Контактный номер: <p>{phone}</p>
          </li>
          <li>
            Автомобиль: <p>{car}</p>
          </li>
          <li>
            Дата рождения: <p>{date}</p>
          </li>
          <li>
            Позиция: <p>{position}</p>
          </li>
        </ul>
      </div>
      <div className="worker__pult">
        <div className="worker__pult__icon">
          <Modal icon={<EditIcon />} children={<EditWorker id={_id} />} />
          <Modal icon={<DeleteIcon />} children={<Confirm />} />
        </div>
      </div>
    </div>
  );
}

export default Worker;
