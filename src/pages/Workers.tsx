import React from 'react';
import Modal from '../components/Modal';
import Navigation from '../components/Navigation';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Worker from '../components/Worker';
import RegisterForm from '../components/RegisterForm';
import { useDispatch, useSelector } from 'react-redux';
import { SelectUserItems } from '../store/ducks/users/selectors';
import { fetchUsers } from '../store/ducks/users/actionCreators';
function Workers() {
  const dispatch = useDispatch();
  const users = useSelector(SelectUserItems);
  React.useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="wrapper">
      <Navigation active={1} />
      <main className="main">
        <div className="main__aside">
          <h2>
            Выбирите
            <br /> действие
          </h2>
          <aside>
            <Modal
              children={<RegisterForm />}
              valueButton="Добавить"
              typeButton="button"
              classNameButton="button__primary"
            />
          </aside>
          <div className="main__logout">
            <ExitToAppIcon
              onClick={() => {
                window.localStorage.clear();
                window.location.reload();
              }}
            />
          </div>
        </div>
        <div className="main__content">
          <h2>Список работников:</h2>
          <div className="main__content__list">
            {users.map((user) => (
              <span key={user._id}>
                <Worker
                  _id={user._id}
                  name={user.firstname + ' ' + user.lastname}
                  inn={user.inn}
                  address={user.address}
                  passport={user.passport}
                  car={user.car}
                  vo={user.vo}
                  date={user.date}
                  phone={user.username}
                  position={user.position}
                />
              </span>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Workers;
