import React from "react";

import styles from "./Input.module.css";

/**
 * @param {React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>} props
 */
function Input(props) {
  return <input class={`form-control ${styles.input}`} {...props} />;
}

export default Input;
