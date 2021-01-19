import React from 'react';

const FormField = (props) => {
  const {
    input,
    meta: { error, touched, warning },
    type,
    label,
    control,
    rows,
  } = props;
  let field = (control) => {
    switch (control) {
      case 'textarea':
        return (
          <textarea name={input.name} {...input} type={type} rows={rows || 3} />
        );
      default:
        return (
          <input id={input.name} {...input} type={type} autoComplete='off' />
        );
    }
  };
  return (
    <div className={`field ${(touched && error) || warning ? 'error' : ''}`}>
      <label htmlFor={input.name}>{label}</label>
      {field(control)}
      {(touched && error && <label className=''>{error}</label>) ||
        (warning && <label className=''>{warning}</label>)}
    </div>
  );
};

export default FormField;
