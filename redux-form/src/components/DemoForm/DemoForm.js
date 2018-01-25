import React from 'react';
import { reduxForm, Field } from 'redux-form';

import './DemoForm.css'


let DemoForm = ({handleSubmit, submitting}) => (

  <form onSubmit={handleSubmit(logResults)}>
    <div>
      <Field label="Name" name="name" component={renderInput} />
    </div>
    <div>
      <Field label="Address" name="address" component={renderInput} />
    </div>
    <div>
      <Field label="Email" name="email" component={renderInput} />
    </div>
    <button type="submit" disabled={submitting}>Submit</button>
  </form>

);

const renderInput = ({input, meta, label}) => (
  <div className={meta.error && meta.touched ? 'error' : ''}>
    <label>{label}</label>
    <input {...input}/>
    {meta.error && meta.touched && <span>{meta.error}</span>}
    <pre>{JSON.stringify(meta)}</pre>
    <hr/>
  </div>
);

const validate = values => {
  const errors = {};

  if (!values.name) { errors.name = '* Name required'; }
  if (!values.address) { errors.address = '* Address required'; }
  if (!values.email) { errors.email = '* Email required'; }

  return errors;
};

const logResults = async (values) => {
  const sleep = ms => (new Promise(resolve => setTimeout(resolve, ms)));
  await sleep(500); // To simulate latency
  console.log('Form submitted with...', values);
};

DemoForm = reduxForm({
  form: 'demo',
  validate
  //destroyOnUnmount: false
})(DemoForm);

export default DemoForm;