import axios from "axios";
import { useFormik } from "formik";
import React from "react";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.username.trim()) {
        errors.username = "Please enter the Username";
      } else if (values.username.length < 3 || values.username.length > 12) {
        errors.username = "Please enter a value between 3 and 12 characters";
      }

      if (!values.password.trim()) {
        errors.password = "Please enter the Password";
      }
      return errors;
    },
    onSubmit: async (values) => {
      try {
        await axios.post("API Link", values, {
          withCredentials: true, // Include credentials
          headers: { "Content-Type": "application/json" },
        });
        alert("Login successfull");
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
                <label className="form-label" htmlFor="username">
                  {" "}
                  Username:
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="form-control "
                  autoComplete="true"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <span className="text-danger">{formik.errors.username}</span>
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
