import React from "react";
import Image from "next/image";

import Avatar from "../Avatar";
import styles from "./LoggedInNavbar.module.css";

function LoggedInNavbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white">
      <div className="container">
        <a className={`navbar-brand ${styles.user_profile}`} href="#">
          <Avatar />
          <p className="d-none d-md-block m-0">Denis Setiawan</p>
        </a>

        <div className={`${styles.settings}`}>
          <SettingIcon />
          <ThreeDotsIcon />
        </div>
      </div>
    </nav>
  );
}

export default LoggedInNavbar;

function SettingIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M33.7501 20.95V19.0375L36.1501 16.9375C36.5925 16.5476 36.8828 16.0138 36.9697 15.4305C37.0566 14.8472 36.9346 14.252 36.6251 13.75L33.6751 8.75002C33.4559 8.37035 33.1407 8.055 32.7611 7.8356C32.3816 7.6162 31.951 7.50047 31.5126 7.50002C31.2409 7.49794 30.9707 7.54016 30.7126 7.62502L27.6751 8.65002C27.1506 8.30153 26.6036 7.98834 26.0376 7.71252L25.4001 4.56252C25.2858 3.98703 24.9727 3.47007 24.5156 3.10215C24.0586 2.73423 23.4867 2.53878 22.9001 2.55002H17.0501C16.4634 2.53878 15.8915 2.73423 15.4345 3.10215C14.9775 3.47007 14.6644 3.98703 14.5501 4.56252L13.9126 7.71252C13.3425 7.98827 12.7913 8.30146 12.2626 8.65002L9.28757 7.57502C9.02669 7.50705 8.75654 7.48172 8.48757 7.50002C8.04916 7.50047 7.61858 7.6162 7.23902 7.8356C6.85947 8.055 6.54427 8.37035 6.32507 8.75002L3.37507 13.75C3.08331 14.2513 2.97489 14.8383 3.06838 15.4107C3.16188 15.9831 3.45148 16.5052 3.88757 16.8875L6.25007 19.05V20.9625L3.88757 23.0625C3.43916 23.4475 3.14164 23.9789 3.04782 24.5625C2.954 25.146 3.06994 25.7439 3.37507 26.25L6.32507 31.25C6.54427 31.6297 6.85947 31.945 7.23902 32.1644C7.61858 32.3838 8.04916 32.4996 8.48757 32.5C8.75926 32.5021 9.02947 32.4599 9.28757 32.375L12.3251 31.35C12.8495 31.6985 13.3965 32.0117 13.9626 32.2875L14.6001 35.4375C14.7144 36.013 15.0275 36.53 15.4845 36.8979C15.9415 37.2658 16.5134 37.4613 17.1001 37.45H23.0001C23.5867 37.4613 24.1586 37.2658 24.6156 36.8979C25.0727 36.53 25.3858 36.013 25.5001 35.4375L26.1376 32.2875C26.7077 32.0118 27.2589 31.6986 27.7876 31.35L30.8126 32.375C31.0707 32.4599 31.3409 32.5021 31.6126 32.5C32.051 32.4996 32.4816 32.3838 32.8611 32.1644C33.2407 31.945 33.5559 31.6297 33.7751 31.25L36.6251 26.25C36.9168 25.7488 37.0253 25.1617 36.9318 24.5893C36.8383 24.0169 36.5487 23.4949 36.1126 23.1125L33.7501 20.95ZM31.5126 30L27.2251 28.55C26.2214 29.4002 25.0743 30.0647 23.8376 30.5125L22.9501 35H17.0501L16.1626 30.5625C14.9356 30.102 13.7947 29.4386 12.7876 28.6L8.48757 30L5.53757 25L8.93757 22C8.70644 20.7061 8.70644 19.3814 8.93757 18.0875L5.53757 15L8.48757 10L12.7751 11.45C13.7787 10.5999 14.9258 9.93534 16.1626 9.48752L17.0501 5.00002H22.9501L23.8376 9.43752C25.0645 9.89805 26.2054 10.5614 27.2126 11.4L31.5126 10L34.4626 15L31.0626 18C31.2937 19.2939 31.2937 20.6186 31.0626 21.9125L34.4626 25L31.5126 30Z"
        fill="#1D58A6"
      />
      <path
        d="M20 27.5C18.5166 27.5 17.0666 27.0601 15.8332 26.236C14.5999 25.4119 13.6386 24.2406 13.0709 22.8701C12.5032 21.4997 12.3547 19.9917 12.6441 18.5368C12.9335 17.082 13.6478 15.7456 14.6967 14.6967C15.7456 13.6478 17.082 12.9335 18.5368 12.6441C19.9917 12.3547 21.4997 12.5032 22.8701 13.0709C24.2406 13.6386 25.4119 14.5999 26.236 15.8332C27.0601 17.0666 27.5 18.5166 27.5 20C27.51 20.9877 27.3229 21.9675 26.9495 22.882C26.5762 23.7964 26.0241 24.6272 25.3257 25.3257C24.6272 26.0241 23.7964 26.5762 22.882 26.9495C21.9675 27.3229 20.9877 27.51 20 27.5ZM20 15C19.3392 14.9846 18.6821 15.1034 18.0685 15.3492C17.4549 15.5951 16.8976 15.9628 16.4302 16.4302C15.9628 16.8976 15.5951 17.4549 15.3492 18.0685C15.1034 18.6821 14.9846 19.3392 15 20C14.9846 20.6608 15.1034 21.3179 15.3492 21.9315C15.5951 22.5451 15.9628 23.1024 16.4302 23.5698C16.8976 24.0372 17.4549 24.4049 18.0685 24.6508C18.6821 24.8966 19.3392 25.0154 20 25C20.6608 25.0154 21.3179 24.8966 21.9315 24.6508C22.5451 24.4049 23.1024 24.0372 23.5698 23.5698C24.0372 23.1024 24.4049 22.5451 24.6508 21.9315C24.8966 21.3179 25.0154 20.6608 25 20C25.0154 19.3392 24.8966 18.6821 24.6508 18.0685C24.4049 17.4549 24.0372 16.8976 23.5698 16.4302C23.1024 15.9628 22.5451 15.5951 21.9315 15.3492C21.3179 15.1034 20.6608 14.9846 20 15Z"
        fill="#1D58A6"
      />
    </svg>
  );
}

function ThreeDotsIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.75 32.5C23.75 33.4946 23.3549 34.4484 22.6517 35.1517C21.9484 35.8549 20.9946 36.25 20 36.25C19.0054 36.25 18.0516 35.8549 17.3483 35.1517C16.6451 34.4484 16.25 33.4946 16.25 32.5C16.25 31.5054 16.6451 30.5516 17.3483 29.8483C18.0516 29.1451 19.0054 28.75 20 28.75C20.9946 28.75 21.9484 29.1451 22.6517 29.8483C23.3549 30.5516 23.75 31.5054 23.75 32.5ZM23.75 20C23.75 20.9946 23.3549 21.9484 22.6517 22.6517C21.9484 23.3549 20.9946 23.75 20 23.75C19.0054 23.75 18.0516 23.3549 17.3483 22.6517C16.6451 21.9484 16.25 20.9946 16.25 20C16.25 19.0054 16.6451 18.0516 17.3483 17.3483C18.0516 16.6451 19.0054 16.25 20 16.25C20.9946 16.25 21.9484 16.6451 22.6517 17.3483C23.3549 18.0516 23.75 19.0054 23.75 20ZM23.75 7.5C23.75 8.49456 23.3549 9.44839 22.6517 10.1517C21.9484 10.8549 20.9946 11.25 20 11.25C19.0054 11.25 18.0516 10.8549 17.3483 10.1517C16.6451 9.44839 16.25 8.49456 16.25 7.5C16.25 6.50544 16.6451 5.55161 17.3483 4.84835C18.0516 4.14509 19.0054 3.75 20 3.75C20.9946 3.75 21.9484 4.14509 22.6517 4.84835C23.3549 5.55161 23.75 6.50544 23.75 7.5Z"
        fill="#1D58A6"
      />
    </svg>
  );
}