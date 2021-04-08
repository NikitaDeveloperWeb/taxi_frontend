import React from 'react';
import ClearIcon from '@material-ui/icons/Clear';
import Button from './Button';

interface ModalProps {
  children?: JSX.Element | Element | JSX.Element[] | Element[];
  valueButton?: string;
  typeButton?: 'button' | 'submit' | 'reset' | undefined;
  formButton?: string;
  classNameButton?: 'button__primary' | 'button__outline';
  icon?: JSX.Element | Element | JSX.Element[] | Element[];
}

function Modal({
  children,
  valueButton,
  typeButton,
  formButton,
  classNameButton,
  icon,
}: ModalProps) {
  //state modal window
  const [open, setOpen] = React.useState(false);
  //refirens modal window
  const modalRef = React.useRef<HTMLDivElement>(null);
  //close modal window
  const handleClose = () => {
    setOpen(false);
  };
  //open modal window
  const handleOpen = () => {
    setOpen(true);
  };
  //outside click listener
  const handleOutsideClick = (event: any) => {
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(modalRef.current) || event.target.id === 'no') {
      handleClose();
    }
  };
  React.useEffect(() => {
    document
      .querySelector('.modal__open')
      ?.addEventListener('click', handleOutsideClick);
  });

  return (
    <div>
      <span onClick={() => handleOpen()} className="modal__button">
        {(icon && icon) || (
          <Button
            value={valueButton}
            type={typeButton}
            className={classNameButton}
            form={formButton}
          />
        )}
      </span>
      <div className={open ? 'modal__open' : 'modal__close'}>
        <div className="modal" ref={modalRef}>
          <div className="modal__top">
            <ClearIcon onClick={() => handleClose()} />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
