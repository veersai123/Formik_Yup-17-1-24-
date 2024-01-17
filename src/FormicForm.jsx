import React from 'react';
import { useFormik } from 'formik';
import { FormSchema } from './FormScema';

function FormicForm() {
  const formikInitialValues = {
    name: 'hh',
    email: '',
  };

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: formikInitialValues,
    validationSchema: FormSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Enter Name</label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={values.name}
        />
        <br />
        <span style={{ color: "red" }}>{errors.name}</span>
        <br />
        <label htmlFor="email">Enter email</label>
        <input
          type="text"
          name="email"
          onChange={handleChange}
          value={values.email}
        />
        <br />
        <span style={{ color: "red" }}>{errors.email}</span>
        <br />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default FormicForm;
