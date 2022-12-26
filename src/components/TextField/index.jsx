import styles from "./TextField.module.css";

export function TextField(props) {
  return (
    <div className={styles.text__field}>
      <label>{props.name}</label>
      <input placeholder={props.placeholder} />
    </div>
  );
}
