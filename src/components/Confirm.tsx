import React from 'react';

import Button from './Button';

interface ConfirmProps {
  action?: any;
}

function Confirm({ action }: ConfirmProps) {
  return (
    <div className="confirm">
      <h2>Вы уверены?</h2>
      <form method="Post" id="delete_order" className="confirm__button">
        <Button
          value="Нет"
          type="button"
          className="button__primary"
          form="delete_order"
          onClick={() => {
            window.location.reload();
          }}
        />

        <Button
          value="Да"
          type="submit"
          className="button__primary"
          form="delete_order"
          onClick={action}
        />
      </form>
    </div>
  );
}

export default Confirm;
