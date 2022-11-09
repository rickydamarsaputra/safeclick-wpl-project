import styles from "./Button.module.css";

/**
 * @param {React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>} props
 */
function Button(props) {
  const { children, variant, ...rest } = props;

  if (variant === "pending") {
    return (
      <button
        {...rest}
        className={`${styles.button} ${styles.button__pending}`}
      >
        {children}
      </button>
    );
  }

  if (variant === "unsuccessful") {
    return (
      <button
        {...rest}
        className={`${styles.button} ${styles.button__unsuccessful}`}
      >
        {children}
      </button>
    );
  }

  return (
    <button {...rest} className={`${styles.button} ${styles.button__success}`}>
      {children}
    </button>
  );
}

export default Button;
