export const validate = {
  require: (value) => {
    return value && value.trim() !== '' ? null : "Field can't be empty";
  },
  minLength: (min) => (value) => {
    return value && value.trim().length < min
      ? `You must enter at least ${min} characters`
      : null;
  },
  maxLength: (max) => (value) => {
    return value && value.trim().length > max
      ? `You can't exceed ${max} characters`
      : null;
  },
  alphaNumeric: (value) => {
    return value && /[^a-zA-Z0-9 ]/i.test(value)
      ? 'Only alphanumeric characters'
      : undefined;
  },
  email: (value) => {
    return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
      ? 'Invalid email address'
      : undefined;
  },
};
