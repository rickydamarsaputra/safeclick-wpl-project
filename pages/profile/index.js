/* eslint-disable @next/next/no-img-element */
import React from "react";

import LoggedInNavbar from "../../components/Navbar/LoggedInNavbar";
import Button from "./Button";
import styles from "./Profile.module.css";
import data from "./data.json";

function Profile() {
  return (
    <>
      <header className={styles.header}>
        <LoggedInNavbar />
      </header>
      <main className={`${styles.table__container} table-responsive`}>
        <table className="table">
          <thead className={styles.table__header}>
            <tr className={styles.table__content}>
              <th>Image</th>
              <th>Purchase Status</th>
              <th>Availability</th>
              <th>Borrowing Status</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((item) => (
              <tr
                key={item.id}
                className={`${styles.table__content} ${styles.table__card}`}
              >
                <td>
                  <img
                    src={item.image}
                    alt={item.id}
                    className={styles.image}
                  />
                </td>
                <td>
                  <p
                    style={
                      item.purchase_status.toLowerCase() === "failed"
                        ? { color: "red" }
                        : { color: "#1d58a6" }
                    }
                  >
                    {item.purchase_status}
                  </p>
                </td>
                <td>
                  <p>{item.availability}</p>
                </td>
                <td>
                  <Button variant={item.borrowing_status.toLowerCase()}>
                    {item.borrowing_status}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
      <div className={styles.paginate__container}>
        <button
          className={styles.paginate__arrow}
          style={{ backgroundColor: "#EFF3FF" }}
        >
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 13L1 7L7 1"
              stroke="#1F2937"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button className={styles.paginate__number}>{data.page}</button>
        <button className={styles.paginate__number}>{data.page + 1}</button>
        <button className={styles.paginate__number}>...</button>
        <button className={styles.paginate__number}>{data.total_pages}</button>
        <button className={styles.paginate__arrow}>
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 0.999999L7 7L1 13"
              stroke="#F9FAFB"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      {/* footer */}
      <footer className={`bg-neutral-200 ${styles.footer}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <h1 className={`${styles.footer_title}`}>WPL</h1>
              <ul className={`${styles.footer_list_menu}`}>
                <li>
                  <a href="#">Our Services</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Testimonial</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3">
              <h1 className={`${styles.footer_title}`}>Contact</h1>
              <ul className={`${styles.footer_list_menu}`}>
                <li>
                  <a href="#">Address</a>
                </li>
                <li>
                  <a href="#">Contact.wpl@gmail.com</a>
                </li>
                <li className="d-flex gap-3 gap-lg-4 mt-3">
                  <a href="#">
                    <svg
                      width={40}
                      height={40}
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.9946 13.1054C16.3222 13.1054 13.3252 16.0518 13.3252 19.6623C13.3252 23.2728 16.3222 26.2192 19.9946 26.2192C23.667 26.2192 26.664 23.2728 26.664 19.6623C26.664 16.0518 23.667 13.1054 19.9946 13.1054ZM39.9978 19.6623C39.9978 16.9471 40.0228 14.2564 39.8677 11.5461C39.7126 8.39802 38.9821 5.60408 36.6406 3.30204C34.294 0.99508 31.4572 0.28184 28.2551 0.129354C25.4932 -0.0231314 22.7564 0.0014631 19.9996 0.0014631C17.2378 0.0014631 14.501 -0.0231314 11.7442 0.129354C8.5421 0.28184 5.70023 0.999999 3.35869 3.30204C1.01215 5.609 0.286675 8.39802 0.131574 11.5461C-0.0235283 14.2613 0.0014882 16.952 0.0014882 19.6623C0.0014882 22.3726 -0.0235283 25.0682 0.131574 27.7785C0.286675 30.9266 1.01716 33.7205 3.35869 36.0225C5.70524 38.3295 8.5421 39.0427 11.7442 39.1952C14.506 39.3477 17.2428 39.3231 19.9996 39.3231C22.7614 39.3231 25.4982 39.3477 28.2551 39.1952C31.4572 39.0427 34.299 38.3246 36.6406 36.0225C38.9871 33.7156 39.7126 30.9266 39.8677 27.7785C40.0278 25.0682 39.9978 22.3775 39.9978 19.6623ZM19.9946 29.7509C14.3159 29.7509 9.73288 25.2452 9.73288 19.6623C9.73288 14.0793 14.3159 9.57363 19.9946 9.57363C25.6734 9.57363 30.2564 14.0793 30.2564 19.6623C30.2564 25.2452 25.6734 29.7509 19.9946 29.7509ZM30.6766 11.5166C29.3508 11.5166 28.2801 10.464 28.2801 9.16045C28.2801 7.85694 29.3508 6.8043 30.6766 6.8043C32.0025 6.8043 33.0732 7.85694 33.0732 9.16045C33.0736 9.46997 33.0119 9.77653 32.8916 10.0626C32.7713 10.3486 32.5948 10.6085 32.3722 10.8274C32.1495 11.0462 31.8852 11.2198 31.5942 11.338C31.3033 11.4563 30.9915 11.517 30.6766 11.5166Z"
                        fill="#1D58A6"
                      />
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      width={40}
                      height={40}
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 0C8.95536 0 0 8.80414 0 19.6623C0 30.5204 8.95536 39.3246 20 39.3246C31.0446 39.3246 40 30.5204 40 19.6623C40 8.80414 31.0446 0 20 0ZM29.6116 14.8213C29.625 15.0276 29.625 15.2427 29.625 15.4533C29.625 21.8962 24.6339 29.3179 15.5134 29.3179C12.7009 29.3179 10.0938 28.5147 7.89732 27.1322C8.29911 27.1761 8.68304 27.1936 9.09375 27.1936C11.4152 27.1936 13.5491 26.4212 15.25 25.1133C13.0714 25.0694 11.2411 23.665 10.6161 21.7339C11.3795 21.8436 12.067 21.8436 12.8527 21.6461C11.7309 21.422 10.7227 20.8231 9.99918 19.951C9.2757 19.0789 8.88164 17.9875 8.88393 16.8622V16.8007C9.54018 17.165 10.3125 17.3888 11.1205 17.4196C10.4413 16.9745 9.88419 16.3715 9.49871 15.6641C9.11323 14.9567 8.91127 14.1667 8.91071 13.3642C8.91071 12.4557 9.15179 11.6262 9.58482 10.9064C10.8299 12.4133 12.3836 13.6457 14.1449 14.5236C15.9062 15.4015 17.8357 15.9052 19.808 16.0019C19.1071 12.6883 21.625 10.0067 24.6518 10.0067C26.0804 10.0067 27.3661 10.5948 28.2723 11.5428C29.3929 11.3365 30.4643 10.924 31.4196 10.371C31.0491 11.4989 30.2723 12.4513 29.2411 13.0526C30.2411 12.9473 31.2054 12.6752 32.0982 12.2933C31.4241 13.2677 30.5804 14.1323 29.6116 14.8213V14.8213Z"
                        fill="#1D58A6"
                      />
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      width={40}
                      height={40}
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 20.1117C0 30.055 7.22167 38.3233 16.6667 40V25.555H11.6667V20H16.6667V15.555C16.6667 10.555 19.8883 7.77833 24.445 7.77833C25.8883 7.77833 27.445 8 28.8883 8.22167V13.3333H26.3333C23.8883 13.3333 23.3333 14.555 23.3333 16.1117V20H28.6667L27.7783 25.555H23.3333V40C32.7783 38.3233 40 30.0567 40 20.1117C40 9.05 31 0 20 0C9 0 0 9.05 0 20.1117Z"
                        fill="#1D58A6"
                      />
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      width={40}
                      height={40}
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M37.0085 9.09358C31.025 -0.000300611 18.8087 -2.70389 9.33481 2.94907C0.110229 8.60202 -2.88153 20.891 3.10199 29.9849L3.60061 30.7223L1.60611 38.0957L9.0855 36.1294L9.83344 36.621C13.0745 38.3415 16.5649 39.3246 20.0553 39.3246C23.795 39.3246 27.5347 38.3415 30.7757 36.3752C40.0003 30.4765 42.7427 18.4332 37.0085 9.09358ZM31.773 28.0187C30.7757 29.4934 29.5292 30.4765 27.784 30.7223C26.7867 30.7223 25.5402 31.2138 20.5539 29.2476C16.3156 27.2813 12.8252 24.0862 10.3321 20.3995C8.83618 18.679 8.08824 16.467 7.83893 14.255C7.83893 12.2887 8.58687 10.5683 9.83344 9.33936C10.3321 8.8478 10.8307 8.60202 11.3293 8.60202H12.5759C13.0745 8.60202 13.5731 8.60202 13.8224 9.58514C14.3211 10.814 15.5676 13.7634 15.5676 14.0092C15.8169 14.255 15.8169 14.7465 15.5676 14.9923C15.8169 15.4839 15.5676 15.9754 15.3183 16.2212C15.069 16.467 14.8197 16.9586 14.5704 17.2043C14.0718 17.4501 13.8224 17.9417 14.0718 18.4332C15.069 19.9079 16.3156 21.3826 17.5621 22.6115C19.058 23.8404 20.5539 24.8235 22.2991 25.5609C22.7977 25.8067 23.2963 25.8067 23.5456 25.3151C23.795 24.8235 25.0415 23.5946 25.5402 23.1031C26.0388 22.6115 26.2881 22.6115 26.7867 22.8573L30.7757 24.8235C31.2744 25.0693 31.773 25.3151 32.0223 25.5609C32.2716 26.2982 32.2716 27.2813 31.773 28.0187Z"
                        fill="#1D58A6"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <p className="text-center mt-3">WPL 2022 - All Right Reserved.</p>
      {/* footer */}
    </>
  );
}

export default Profile;
