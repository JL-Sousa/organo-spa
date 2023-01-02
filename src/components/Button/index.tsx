import { ReactElement } from "react";
import styles from "./Button.module.css";
import React from "react";

interface ButtonProps {
  children: ReactElement;
}
export function Button(props: ButtonProps) {
  return <button className={styles.button}>{props.children}</button>;
}
