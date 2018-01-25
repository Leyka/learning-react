import React from 'react';
import { reduxForm, Field } from 'redux-form';

let DemoForm = ( {handleSubmit, submitting} ) => (

  <form onSubmit={handleSubmit(logResults)}>
    <div>
      <label>Name</label>
      <Field name="name" component="input" />
    </div>
    <div>
      <label>Address</label>
      <Field name="address" component="input" />
    </div>
    <div>
      <label>Email</label>
      <Field name="email" component="input" />
    </div>
    <button type="submit" disabled={submitting}>Send</button>
  </form>

);

const logResults = async (values) => {
  const sleep = ms => (new Promise(resolve => setTimeout(resolve, ms)));
  await sleep(500); // To simulate latency
  console.log('Form submitted with...', values);
};

DemoForm = reduxForm({
  form: 'demo',
  //destroyOnUnmount: false
})(DemoForm);

export default DemoForm;