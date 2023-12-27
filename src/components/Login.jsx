import axios from "axios";
import { useFormik } from "formik";
import React from "react";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = "Please enter your email";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Invalid email address"; // checks the valid email address
      }
      
      if (!values.password.trim()) {
        errors.password = "Please enter the Password";
      } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/.test(values.password)) {
        errors.password = "Please enter a strong password"; // Corrected to "errors.password" and updated error message
      }
      
      return errors;
    },
    onSubmit: async (values) => {
      try {
        await axios.post("API Link", values, {
          withCredentials: true, // Include credentials
          headers: { "Content-Type": "application/json" },
        });
        alert("Login successful");
      } catch (error) {
        console.error(error);
        alert("Something went wrong");
      }
    },    
  });

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-info bg-gradient">
      <div className="container bg-info bg-light mt-5 shadow p-3 mb-5 bg-body rounded">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h3 className="text-center"><u>Admin Login</u></h3>
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-3">
                <label className="form-label" htmlFor="email">
                  {" "}
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control "
                  autoComplete="true"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <span className="text-danger">{formik.errors.email}</span>
              </div>
              <br />
              <div className="mb-3">
                <label className="form-label" htmlFor="pass">
                  Password:
                </label>
                <input
                  type="password"
                  id="pass"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="form-control"
                />
                <span className="text-danger">{formik.errors.password}</span>
              </div>
              <br />
              <div className="mb-3">
                <input
                  type="submit"
                  name="submit"
                  value="Login"
                  className="btn btn-primary"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
