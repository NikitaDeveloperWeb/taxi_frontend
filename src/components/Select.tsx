import React from 'react';

interface SelectProps {
  name: string;
  id?: string;
  placeholder: string;
  SelectRef?: any;
  className: string;
  form?: string;
  option: Array<string>;
  icon?: JSX.Element;
  children?: string;
}

function Select({
  name,
  id,
  placeholder,
  SelectRef,
  className,
  form,
  option,
  icon,
  children,
}: SelectProps) {
  const [focus, setFocus] = React.useState(false);
  const SelectReferens = React.useRef<HTMLDivElement>(null);

  const handleFocusSelect = (state: boolean) => {
    setFocus(!state);
  };

  //outside click listener
  const handleOutsideClick = (event: any) => {
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(SelectReferens.current)) {
      setFocus(false);
    }
  };
  React.useEffect(() => {
    document
      .querySelector('.modal__open')
      ?.addEventListener('click', handleOutsideClick);
  });

  return (
    <div
      className={!focus ? className : `${className}__focus`}
      onFocus={() => handleFocusSelect(focus)}
      ref={SelectReferens}
    >
      <div className="icon">{icon}</div>
      <select name={name} form={form}>
        {option.map((opt) => (
          <option key={`${opt}+${id}`}>{opt}</option>
        ))}
      </select>
    </div>
  );
}

export default Select;
