import React from "react";

import styles from "./Label.module.css";

/**
 * @param {React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>} props
 */
function Label(props) {
  const { children, ...rest } = props;

  return (
    <label className={`form-label ${styles.label}`} {...rest}>
      {children}
    </label>
  );
}

export default Label;
