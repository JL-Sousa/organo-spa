import { useState } from "react";
import styles from "./TextField.module.css";

export function TextField(props) {
  const handleInput = (event) => {
    props.handleInput(event.target.value);
  };

  return (
    <div className={styles.text__field}>
      <label>{props.name}</label>
      <input
        value={props.value}
        onChange={handleInput}
        required={props.mandatory}
        placeholder={props.placeholder}
      />
    </div>
  );
}
