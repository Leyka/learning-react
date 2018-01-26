import React from 'react';
import {reduxForm, Field, Form} from 'redux-form';
import './DemoForm.css';

const countries = ['Canada', 'USA', 'UK', 'France', 'China'];

let DemoForm = ({handleSubmit, submitting}) => (
  <Form onSubmit={handleSubmit(logResults)}>
    <div>
      <Field label="Name" name="name" component={RenderInput}/>
    </div>
    <div>
      <Field label="Address" name="address" component={RenderInput}/>
    </div>
    <div>
      <Field label="Email" name="email" component={RenderInput}/>
    </div>
    <div>
      <Field label="Country" name="country" component={RenderSelect}>
        { countries.map(country =>
          <option key={country} value={country}>
            {country}
          </option>
        )}
      </Field>
    </div>
    <button type="submit" disabled={submitting}>Submit</button>
  </Form>
);

const createRenderer = render => ({input, meta, label, ...remainingProps}) => (
  <div className={meta.error && meta.touched ? 'error' : ''}>
    <label>{label}</label>
    {render(input, label, remainingProps)}
    {meta.error && meta.touched && <span>{meta.error}</span>}
    <pre>{JSON.stringify(meta)}</pre>
    <hr/>
  </div>
);

const RenderInput = createRenderer((input, label) =>
  <input {...input} placeholder={label}/>
);

const RenderSelect = createRenderer((input, label, {children}) =>
  <select {...input}>
    {children}
  </select>
);

const validate = values => {
  const errors = {};

  if (!values.name) {
    errors.name = '* Name required';
  }
  if (!values.address) {
    errors.address = '* Address required';
  }
  if (!values.email) {
    errors.email = '* Email required';
  }

  return errors;
};

const logResults = async (values) => {
  const sleep = ms => (new Promise(resolve => setTimeout(resolve, ms)));
  await sleep(500); // To simulate server latency
  console.log('Form submitted with...', values);
};

DemoForm = reduxForm({
  form: 'demo',
  validate
  //destroyOnUnmount: false
})(DemoForm);

export default DemoForm;