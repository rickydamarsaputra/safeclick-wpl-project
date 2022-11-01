import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import LoginNavbar from "../../components/LoginNavbar";
import Input from "../../components/Forms/Input";
import Label from "../../components/Forms/Label";
import styles from "./Signup.module.css";

function Signup() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Head>
        <title>Sign Up | Warga Peduli Lingkungan</title>
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
                      <h3 className={`${styles.heading}`}>Sign Up</h3>

                      <form className={`${styles.form_container}`}>
                        <div>
                          <Label>Name</Label>
                          <Input type="text" placeholder="e.g. John Doe" />
                        </div>

                        <div>
                          <Label>Email</Label>
                          <Input
                            type="email"
                            placeholder="e.g. johndoe@gmail.com"
                          />
                        </div>

                        <div>
                          <Label>Password</Label>
                          <div className="input-group">
                            <Input
                              type={show ? "text" : "password"}
                              placeholder="Input your password"
                            />
                            <button
                              class={`btn ${styles.show_button}`}
                              type="button"
                              onClick={() => setShow(!show)}
                            >
                              {show ? <EyeSlash /> : <EyeIcon />}
                            </button>
                          </div>
                        </div>

                        <div>
                          <Label>Confirm Password</Label>
                          <div className="input-group">
                            <Input
                              type={show ? "text" : "password"}
                              placeholder="Retype your password"
                            />
                            <button
                              class={`btn ${styles.show_button}`}
                              type="button"
                              onClick={() => setShow(!show)}
                            >
                              {show ? <EyeSlash /> : <EyeIcon />}
                            </button>
                          </div>
                        </div>

                        <div className="d-grid">
                          <button
                            className={`btn btn-primary-700 fw-bold mb-2 ${styles.button}`}
                            type="submit"
                          >
                            Sign Up
                          </button>

                          <p
                            className={`text-center fw-normal ${styles.signup}`}
                          >
                            Already have an account?{" "}
                            <Link
                              href="/login"
                              className="text-primary-700 fw-semibold text-decoration-none"
                            >
                              Login
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

export default Signup;

function EyeIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.28126 12C9.28126 12.6962 9.55783 13.3639 10.0501 13.8562C10.5424 14.3484 11.2101 14.625 11.9063 14.625C12.6025 14.625 13.2701 14.3484 13.7624 13.8562C14.2547 13.3639 14.5313 12.6962 14.5313 12C14.5313 11.3038 14.2547 10.6361 13.7624 10.1438C13.2701 9.65156 12.6025 9.375 11.9063 9.375C11.2101 9.375 10.5424 9.65156 10.0501 10.1438C9.55783 10.6361 9.28126 11.3038 9.28126 12ZM22.0828 11.3953C19.861 6.71484 16.5024 4.35938 12 4.35938C7.49533 4.35938 4.13908 6.71484 1.9172 11.3977C1.82808 11.5864 1.78186 11.7925 1.78186 12.0012C1.78186 12.2099 1.82808 12.416 1.9172 12.6047C4.13908 17.2852 7.49767 19.6406 12 19.6406C16.5047 19.6406 19.861 17.2852 22.0828 12.6023C22.2633 12.2227 22.2633 11.782 22.0828 11.3953ZM11.9063 16.125C9.62814 16.125 7.78126 14.2781 7.78126 12C7.78126 9.72188 9.62814 7.875 11.9063 7.875C14.1844 7.875 16.0313 9.72188 16.0313 12C16.0313 14.2781 14.1844 16.125 11.9063 16.125Z"
        fill="#1D58A6"
      />
    </svg>
  );
}

function EyeSlash() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.9063 14.6251C12.6025 14.6251 13.2701 14.3485 13.7624 13.8562C14.2547 13.3639 14.5313 12.6963 14.5313 12.0001C14.5313 11.9232 14.5277 11.847 14.5212 11.7718L11.678 14.615C11.7532 14.6216 11.8292 14.6251 11.9063 14.6251ZM20.595 3.88038L19.5938 2.88007C19.5586 2.84493 19.5109 2.8252 19.4612 2.8252C19.4115 2.8252 19.3638 2.84493 19.3287 2.88007L16.7665 5.44296C15.3531 4.72062 13.7642 4.35944 12 4.35944C7.49533 4.35944 4.13439 6.70554 1.9172 11.3977C1.82808 11.5864 1.78186 11.7925 1.78186 12.0012C1.78186 12.2099 1.82808 12.416 1.9172 12.6048C2.80314 14.4708 3.86994 15.9666 5.11759 17.0919L2.63814 19.5704C2.603 19.6055 2.58326 19.6532 2.58326 19.7029C2.58326 19.7526 2.603 19.8003 2.63814 19.8355L3.63869 20.836C3.67384 20.8711 3.72152 20.8909 3.77122 20.8909C3.82093 20.8909 3.8686 20.8711 3.90376 20.836L20.595 4.14569C20.6124 4.12828 20.6263 4.1076 20.6357 4.08484C20.6451 4.06208 20.65 4.03768 20.65 4.01304C20.65 3.9884 20.6451 3.964 20.6357 3.94124C20.6263 3.91847 20.6124 3.8978 20.595 3.88038ZM7.78126 12.0001C7.7812 11.2876 7.96568 10.5872 8.31673 9.96723C8.66779 9.34723 9.17345 8.82873 9.78445 8.46225C10.3955 8.09576 11.091 7.89378 11.8032 7.87598C12.5155 7.85818 13.2202 8.02518 13.8488 8.36069L12.7092 9.50022C12.2497 9.35307 11.7585 9.33535 11.2895 9.449C10.8205 9.56265 10.3919 9.80329 10.0507 10.1445C9.70948 10.4857 9.46885 10.9143 9.3552 11.3833C9.24155 11.8523 9.25927 12.3435 9.40642 12.803L8.26689 13.9426C7.94711 13.3451 7.78027 12.6777 7.78126 12.0001Z"
        fill="#357FBE"
      />
      <path
        d="M22.0828 11.3954C21.2578 9.65791 20.2759 8.24111 19.1369 7.14502L15.7587 10.5235C16.0434 11.2679 16.1066 12.0789 15.9404 12.8584C15.7742 13.6379 15.3859 14.3526 14.8223 14.9162C14.2588 15.4798 13.544 15.8681 12.7645 16.0343C11.985 16.2004 11.1741 16.1373 10.4297 15.8525L7.56421 18.718C8.89358 19.3331 10.3722 19.6407 12 19.6407C16.5047 19.6407 19.8656 17.2946 22.0828 12.6024C22.1719 12.4137 22.2182 12.2076 22.2182 11.9989C22.2182 11.7902 22.1719 11.5841 22.0828 11.3954Z"
        fill="#357FBE"
      />
    </svg>
  );
}
