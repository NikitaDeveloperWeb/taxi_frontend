import React from 'react';

interface FormProps {
  id: string | undefined;
  title?: string;
  method: 'POST' | 'GET';
  action?: string;
  enctype?: string;
  className?: string;
  children?: JSX.Element | Element | JSX.Element[] | Element[];
  functionOnSubmit?: any;
}

const Form = ({
  id,
  method,
  action,
  enctype,
  className,
  title,
  children,
  functionOnSubmit,
}: FormProps) => {
  return (
    <form
      action={action}
      method={method}
      encType={enctype}
      className={className}
      id={id}
      onSubmit={functionOnSubmit}
    >
      <h2>{title}</h2>
      {children}
    </form>
  );
};

export default Form;
