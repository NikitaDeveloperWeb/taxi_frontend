import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectUserData } from '../store/ducks/user/selectors';

interface NavigationProps {
  active: number;
}

function Navigation({ active }: NavigationProps) {
  const user = useSelector(selectUserData);

  const Links = [
    {
      element:
        user?.position === 'Таксист' ? (
          <Link to="/homeworkers">Заказы</Link>
        ) : (
          <Link to="/home">Заказы</Link>
        ),
    },
    {
      element:
        user?.position === 'Таксист' ? (
          <Link to="/myorders">Мои заказы</Link>
        ) : (
          <Link to="/workers">Работники</Link>
        ),
    },
    {
      element:
        user?.position === 'Таксист' ? (
          <Link to="/mystatistic">Моя статистика</Link>
        ) : (
          <Link to="/graph">Статистика</Link>
        ),
    },
  ];
  return (
    <div className="navigation">
      <ul>
        {Links.map((link, index) => (
          <li
            key={`${link}+${index}`}
            className={active === index ? 'active' : ''}
          >
            {link.element}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navigation;
