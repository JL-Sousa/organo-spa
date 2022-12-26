import styles from "./DropdownList.module.css";

export function DropdownList(props) {
  return (
    <div className={styles.dropdown__list}>
      <label>{props.name}</label>
      <select>
        {props.itens.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
}
