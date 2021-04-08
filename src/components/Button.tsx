import React from 'react';

interface ButtonProps {
  value: string | undefined;
  type: 'button' | 'submit' | 'reset' | undefined;
  form?: string;
  className?: 'button__primary' | 'button__outline';
  onClick?: any;
}

const Button = ({ value, type, form, className, onClick }: ButtonProps) => {
  return (
    <button type={type} form={form} className={className} onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;
