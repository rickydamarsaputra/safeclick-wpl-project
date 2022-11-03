import React from "react";
import Head from "next/head";
import Image from "next/image";

import LoginNavbar from "../../components/LoginNavbar";
import Input from "../../components/Forms/Input";
import Label from "../../components/Forms/Label";
import styles from "./Login.module.css";
import Link from "next/link";

function Login() {
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

                      <form className={`${styles.form_container}`}>
                        <div>
                          <Label>Email</Label>
                          <Input
                            type="email"
                            placeholder="e.g. johndoe@gmail.com"
                          />
                        </div>

                        <div>
                          <Label>Password</Label>
                          <Input
                            type="password"
                            placeholder="Input your password"
                          />
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
