import React from 'react';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Modal from './Modal';
import Confirm from './Confirm';
import OrderEdit from './EditOrder';
import { useSelector } from 'react-redux';
import { selectUserData } from '../store/ducks/user/selectors';
import { OrderAPI } from '../services/api/ordersApi';
interface OrderProps {
  _id: string;
  from: string;
  to: string;
  phone: string;
  date: string;
  children: boolean;
  trunsk: boolean;
  price: number;
  add?: boolean;
}

function Order({
  _id,
  from,
  to,
  phone,
  date,
  children,
  trunsk,
  price,
  add,
}: OrderProps) {
  const user = useSelector(selectUserData);
  let adm;
  if (user?.position == 'Оператор') {
    adm = true;
  } else if (user?.position == 'Таксист') {
    adm = false;
  }
  return (
    <div className="order">
      <h2>
        Забрать: {from} Отвезти: {to}
      </h2>
      <p>Номер клиента: {phone}</p>
      <div className="order__data__bool">
        <div className="order__data__bool__child">
          <InsertEmoticonIcon />
          {(children && <p>- да</p>) || <p> -нет</p>}
        </div>
        <div className="order__data__bool__child">
          <LocalMallIcon />
          {(trunsk && <p>- да</p>) || <p> -нет</p>}
        </div>
      </div>
      <div className="order__date">{date}</div>
      <div className="order__date">{price} р.</div>
      <div className="order__pult">
        {(adm && (
          <div className="order__pult__icon">
            <Modal icon={<DeleteIcon />} children={<Confirm />} />
            <Modal
              icon={<EditIcon />}
              children={<OrderEdit id={_id.toString()} />}
            />
          </div>
        )) || (
          <div className="order__pult__icon">
            {(add && (
              <Modal
                icon={<DeleteIcon />}
                children={
                  <Confirm
                    action={async () => {
                      try {
                        await OrderAPI.deleteOrder(_id);
                      } catch (error) {
                        console.log(error);
                      }
                    }}
                  />
                }
              />
            )) || <Modal icon={<AddCircleIcon />} children={<Confirm />} />}
          </div>
        )}
      </div>
    </div>
  );
}

export default Order;
