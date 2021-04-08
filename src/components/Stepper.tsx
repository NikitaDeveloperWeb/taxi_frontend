import React from 'react';

interface StepperProps {
  childrenOne?: JSX.Element | Element | JSX.Element[] | Element[];
  childrenTwo?: JSX.Element | Element | JSX.Element[] | Element[];
  childrenThree?: JSX.Element | Element | JSX.Element[] | Element[];
  step?: string;
}

function Stepper({ childrenOne, childrenTwo, childrenThree, step }: StepperProps) {
  return (
    <div className="stepper">
      <div className={step === 'stepper__one' ? 'visable' : 'hidden'}>{childrenOne}</div>
      <div className={step === 'stepper__two' ? 'visable' : 'hidden'}>{childrenTwo}</div>
      <div className={step === 'stepper__three' ? 'visable' : 'hidden'}>{childrenThree}</div>
    </div>
  );
}

export default Stepper;
