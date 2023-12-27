import axios from "axios";
import { useFormik } from "formik";
import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom/dist";
import { signInWithGoogle } from "../firebase";
import { Link } from "react-router-dom/dist";

import { config } from "../config";

const Login = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext)
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
        await axios.post("API Link", values);
        alert("Login successful");
      } catch (error) {
        console.error(error);
        alert("Something went wrong");
      }
    },
  });
  let triggerGoogleLogin = async () => {
    try {
      const { user } = await signInWithGoogle();
      console.log(user.accessToken);
      const loginResp = await axios.post(
        `${config.api}/users/sign-in-with-firebase`,
        { token: user.accessToken }
      );
      localStorage.setItem("token", loginResp.data.token);
      localStorage.setItem("user", JSON.stringify(loginResp.data.user));
      setUser(loginResp.data.user)
      navigate("/create-news");
    } catch (error) {
      console.error("Error during login:", error);
    }
  };


  return (
    <article className="container kvnkjabvav">
      <hgroup className="row justify-content-center">
        <div className="col-md-9">
          <section className="card o-hidden border-0 shadow-lg my-5">
            <main className="card-body p-0">
              <section className="row justify-content-center">

                <section className="col-lg-7 p-5">
                  <hgroup className="d-flex justify-content-center user-heading">

                    <h1 className="text-center text-reddish  fw-bolder">VR NEWS</h1>
                  </hgroup>

                  <header className="text-center">
                    <h1 className="h4 text-gray-900 mb-4">
                      Admin Login
                    </h1>
                  </header>
                  <form className="user" onSubmit={formik.handleSubmit}>
                    {formik.errors.general && (
                      <section className="alert alert-danger" role="alert">
                        {formik.errors.general.message}
                      </section>
                    )}
                    <section className="form-group">
                      <input
                        className={`form-control form-control-user ${formik.touched.email && formik.errors.email
                            ? "is-invalid"
                            : ""
                          }`}
                        id="email"
                        aria-describedby="emailHelp"
                        placeholder="Enter Email Address..."
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.email && formik.errors.email && (
                        <span className="d-block ms-3 text-danger small invalid-feedback">
                          {formik.errors.email}
                        </span>
                      )}
                    </section>
                    <section className="form-group">
                      <div>
                        <input
                          type="password"
                          className={`form-control form-control-user ${formik.touched.password && formik.errors.password
                              ? "is-invalid"
                              : ""
                            }`}
                          id="password"
                          placeholder="Password"
                          name="password"
                          value={formik.values.password}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        
                        {formik.touched.password && formik.errors.password && (
                          <span className="d-block ms-3 text-danger small invalid-feedback">
                            {formik.errors.password}
                          </span>
                        )}
                      </div>
                    </section>
                    <section className="form-group">
                      <section className="custom-control custom-checkbox small">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customCheck"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customCheck"
                        >
                          Remember Me
                        </label>
                      </section>
                    </section>
                    <button
                      className="btn btn-primary btn-user btn-block"
                      type="submit"
                    >
                      login
                    </button>
                  </form>
                  <hr />
                      <button onClick={triggerGoogleLogin} class="btn btn-google btn-user btn-block p-2"  style={{ borderRadius: "50px" }}>
                        <i class="fab fa-google fa-fw"></i> Login with Google
                      </button>
                      <button class="btn btn-facebook btn-user btn-block p-2"  style={{ borderRadius: "50px" }}>
                        <i class="fab fa-facebook-f fa-fw"></i> Login with Facebook
                      </button>
                  <hr />
                  <div className="text-center">
                    <Link className="small" to={"/forgot-password"}>
                      Forgot Password?
                    </Link>
                  </div>
                  <div className="text-center">
                    <Link className="small" to={"/register"}>
                      Create an Account!
                    </Link>
                  </div>
                </section>
              </section>
            </main>
          </section>
        </div>
      </hgroup>
    </article>

  );
};

export default Login;
