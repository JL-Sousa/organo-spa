import { useState } from "react";
import styles from "./TextField.module.css";

interface TextFieldProps {
  handleInput: (value: string) => void;
  name: string;
  value: string;
  mandatory: boolean;
  placeholder: string;
}
export function TextField({
  handleInput,
  name,
  value,
  mandatory,
  placeholder,
}: TextFieldProps) {
  const handleInputTyping = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleInput(event.target.value);
  };

  return (
    <div className={styles.text__field}>
      <label>{name}</label>
      <input
        value={value}
        onChange={handleInputTyping}
        required={mandatory}
        placeholder={placeholder}
      />
    </div>
  );
}
