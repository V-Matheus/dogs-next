import React from 'react';
import styles from './Input.module.css';

type InputProps = React.ComponentProps<'input'> & {
  label: string;
  error?: string;
};

const Input = ({ label, error, ...props }: InputProps) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={props.name}>
        {label}
      </label>
      <input className={styles.input} id={props.name} {...props} />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Input;
