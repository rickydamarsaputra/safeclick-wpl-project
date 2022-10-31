import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./LoginNavbar.module.css";

function LoginNavbar() {
  return (
    <nav
      className={`navbar navbar-expand-lg bg-white container ${styles.nav_container}`}
    >
      <div className="container-fluid">
        <Link href="/" className={`${styles.logo}`}>
          <Image alt="WPL Logo" width="180" height="40" src="/logo_wpl.png" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className={`${styles.form_button_container}`}>
            <form
              className={`d-flex input-group ${styles.search_container}`}
              role="search"
            >
              <span
                class={`input-group-text text-muted ${styles.search_logo}`}
                id="basic-addon1"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.5 14H14.71L14.43 13.73C15.055 13.004 15.5117 12.1488 15.7676 11.2256C16.0234 10.3025 16.0721 9.33416 15.91 8.39001C15.44 5.61001 13.12 3.39001 10.32 3.05001C9.33562 2.92547 8.33579 3.02778 7.39703 3.34909C6.45827 3.67041 5.60545 4.20222 4.90384 4.90384C4.20222 5.60545 3.67041 6.45827 3.34909 7.39703C3.02778 8.33579 2.92547 9.33562 3.05001 10.32C3.39001 13.12 5.61001 15.44 8.39001 15.91C9.33416 16.0721 10.3025 16.0234 11.2256 15.7676C12.1488 15.5117 13.004 15.055 13.73 14.43L14 14.71V15.5L18.25 19.75C18.66 20.16 19.33 20.16 19.74 19.75C20.15 19.34 20.15 18.67 19.74 18.26L15.5 14ZM9.50001 14C7.01 14 5.00001 11.99 5.00001 9.50001C5.00001 7.01 7.01 5.00001 9.50001 5.00001C11.99 5.00001 14 7.01 14 9.50001C14 11.99 11.99 14 9.50001 14Z"
                    fill="#4B4B4B"
                    fill-opacity="0.3"
                  />
                </svg>
              </span>
              <input
                className={`form-control ${styles.search_input}`}
                type="search"
                placeholder="Search your needs here"
                aria-label="Search"
              />
            </form>
            <div
              className={`d-flex justify-content-between ${styles.button_container}`}
            >
              <button
                className={`btn btn-primary-700 rounded-pill ${styles.button}`}
              >
                Login
              </button>
              <button
                className={`btn btn-outline-primary-700 rounded-pill ${styles.button}`}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default LoginNavbar;
