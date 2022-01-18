import React from "react";
// TODO: import useFormik from formik library
import { useFormik } from "formik";

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      emailField: "",
      pswField: "",
    },
    validate: (values) => {
      let errors = {};
      if (!values.emailField) {
        errors.emailField = "Field Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailField)
      ) {
        errors.emailField = "Username should be an email";
      }
      if (!values.pswField) errors.pswField = "Field Required";
      return errors;
    },
    onSubmit: () => {
      alert("Login Successful");
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Email</div>
        <input
          id="emailField"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.emailField}
        />
        {formik.errors.emailField ? (
          <div id="emailError" style={{ color: "red" }}>
            {formik.errors.emailField}
          </div>
        ) : null}
        <div>Password</div>
        <input
          id="pswField"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.pswField}
        />
        {formik.errors.pswField ? (
          <div id="pswError" style={{ color: "red" }}>
            {formik.errors.pswField}
          </div>
        ) : null}
        <button id="submitBtn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
