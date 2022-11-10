import React from "react";

import styles from "./Input.module.css";

/**
 * @param {React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>} props
 */
function Input(props) {
  const { className, ...rest } = props;

  return (
    <input className={`form-control ${styles.input} ${className}`} {...rest} />
  );
}

export default Input;
