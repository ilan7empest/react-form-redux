import React from 'react';
import Form from './components/Form/Form';
import { Field } from 'redux-form';

import FormField from './components/Form/FormField';
import { validate } from './components/Form/validate';

const INPUTS = [
  {
    name: 'email',
    type: 'email',
    control: 'input',
    label: 'Email',
    validate: [validate.require, validate.minLength(4), validate.email],
  },
  {
    name: 'password',
    type: 'password',
    control: 'input',
    label: 'Password',
    validate: [validate.require, validate.minLength(4)],
    warn: validate.alphaNumeric,
  },
  {
    name: 'description',
    type: 'text',
    control: 'textarea',
    rows: 5,
    label: 'Something about yourself...',
    validate: validate.require,
    warn: validate.alphaNumeric,
  },
];

const handleOnSubmit = (values) => {
  // Do something...
  console.log('Form', values);
};

const App = () => {
  return (
    <div className='ui container'>
      <Form form='contact' onSubmit={handleOnSubmit}>
        <Field
          name='firstName'
          label='First Name'
          control='input'
          component={FormField}
          type='text'
          validate={[
            validate.require,
            validate.minLength(5),
            validate.maxLength(10),
          ]}
          warn={validate.alphaNumeric}
        />
        {INPUTS.map((input) => (
          <Field key={input.name} {...input} component={FormField} />
        ))}
      </Form>
    </div>
  );
};

export default App;
