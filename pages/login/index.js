import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";

import LoginNavbar from "../../components/LoginNavbar";
import Input from "../../components/Forms/Input";
import Label from "../../components/Forms/Label";
import styles from "./Login.module.css";
import Link from "next/link";

function Login() {
  const intialValues = { email: "", password: "" };

  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmitting(true);
  };

  const validate = (values) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = "Email cannot be blank";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid email format";
    }

    if (!values.password) {
      errors.password = "Password cannot be blank";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    }

    return errors;
  };

  useEffect(() => {
    const submit = () => {
      console.log(formValues);
    };

    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      submit();
    }
  }, [formErrors, isSubmitting, formValues]);

  return (
    <>
      <Head>
        <title>Login | Warga Peduli Lingkungan</title>
      </Head>
      <header>
        <LoginNavbar />
      </header>
      <main>
        <div className="container-fluid ps-md-0">
          <div className="row">
            <div
              className={`d-none d-md-flex col-md-4 col-lg-6 ${styles.bg_image}`}
            ></div>
            <div className={`col-md-8 col-lg-6 ${styles.right_element}`}>
              <div className={`d-flex py-5 ${styles.login}`}>
                <div className="container">
                  <div className="row">
                    <div className="col-md-9 col-lg-8 mx-auto">
                      <h3 className={`${styles.heading}`}>Login</h3>

                      <form
                        className={`${styles.form_container}`}
                        onSubmit={handleSubmit}
                      >
                        <div>
                          <Label>Email</Label>
                          <Input
                            type="email"
                            name="email"
                            placeholder="e.g. johndoe@gmail.com"
                            value={formValues.email}
                            onChange={handleChange}
                            className={formErrors.email && styles.invalid}
                          />
                          {formErrors.email && (
                            <>
                              <ErrorIcon />
                              <small className={styles.error}>
                                {formErrors.email}
                              </small>
                            </>
                          )}
                        </div>

                        <div>
                          <Label>Password</Label>
                          <Input
                            type="password"
                            name="password"
                            placeholder="Input your password"
                            value={formValues.password}
                            onChange={handleChange}
                            className={formErrors.password && styles.invalid}
                          />
                          {formErrors.password && (
                            <>
                              <ErrorIcon />
                              <small className={styles.error}>
                                {formErrors.password}
                              </small>
                            </>
                          )}
                        </div>

                        <div className="d-grid">
                          <button
                            className={`btn btn-primary-700 fw-bold mb-2 ${styles.button}`}
                            type="submit"
                          >
                            Login
                          </button>
                          <Link
                            className={`${styles.link} text-primary-700 fw-bold text-decoration-none`}
                            href="#"
                          >
                            Forgot Your Password?
                          </Link>

                          <p
                            className={`text-center fw-normal ${styles.signup}`}
                          >
                            Don&apos;t have an account?{" "}
                            <Link
                              href="/signup"
                              className="text-primary-700 fw-semibold text-decoration-none"
                            >
                              Sign Up
                            </Link>
                          </p>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Login;

function ErrorIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 1.66675C5.40002 1.66675 1.66669 5.40008 1.66669 10.0001C1.66669 14.6001 5.40002 18.3334 10 18.3334C14.6 18.3334 18.3334 14.6001 18.3334 10.0001C18.3334 5.40008 14.6 1.66675 10 1.66675ZM10 14.1667C9.54169 14.1667 9.16669 13.7917 9.16669 13.3334V10.0001C9.16669 9.54175 9.54169 9.16675 10 9.16675C10.4584 9.16675 10.8334 9.54175 10.8334 10.0001V13.3334C10.8334 13.7917 10.4584 14.1667 10 14.1667ZM10.8334 7.50008H9.16669V5.83341H10.8334V7.50008Z"
        fill="#DD1F25"
      />
    </svg>
  );
}
