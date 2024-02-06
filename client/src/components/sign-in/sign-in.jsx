import React, { useState } from "react";
import Layout from "../shared/layout";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import "../sign-up/sign-up.styles.scss";

const SignIn = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSignIn = async (values, { setSubmitting }) => {
    const { email, password } = values;
    
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setSubmitting(false);
      navigate('/shop');
    } catch (error) {
      console.log(error);
      setSubmitting(false);
      setError(error);
    }
  };

  return (
    <Layout>
      <h1>Sign In</h1>
      <div className="form-container">
        <Formik
          initialValues={initialValues}
          onSubmit={handleSignIn}
        >
          {({ values, handleChange, handleSubmit, isSubmitting }) => {
            return (
              <form onSubmit={handleSubmit}>
                <div>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    placeholder="Email"
                    value={values.email}
                    className={"nomad-input"}
                  />
                </div>
                <div>
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    placeholder="Password"
                    value={values.password}
                    className={"nomad-input"}
                  />
                </div>
                <div className="submit-btn">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="button is-black nomad-btn submit"
                  >
                    Sign In
                  </button>
                </div>
                <div className="error-message">
                  {error && <p>{error.message}</p>}
                </div>
              </form>
            );
          }}
        </Formik>
      </div>
    </Layout>
  );
};

export default SignIn;
