import React from 'react';
import { reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

const customForm = ({ handleSubmit, valid, onSubmit, children }) => {
  const SubmitForm = (values) => onSubmit(values);
  return (
    <form onSubmit={handleSubmit(SubmitForm)} className='ui form'>
      {children}
      <button
        className={`ui animated fade button primary ${!valid && 'disabled'}`}
        tabIndex='0'>
        <div className='visible content'>SUBMIT</div>
        <div className='hidden content'>NOW</div>
      </button>
    </form>
  );
};

customForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

const Form = reduxForm()(customForm);

export default Form;
