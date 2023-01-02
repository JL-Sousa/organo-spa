import styles from "./DropdownList.module.css";

interface DropdownListProps {
  name: string;
  handleInput: (value: string) => void;
  mandatory: boolean;
  value: string;
  itens: string[];
}
export function DropdownList({
  name,
  handleInput,
  mandatory,
  value,
  itens,
}: DropdownListProps) {
  return (
    <div className={styles.dropdown__list}>
      <label>{name}</label>
      <select
        onChange={(event) => handleInput(event.target.value)}
        required={mandatory}
        value={value}
      >
        <option value=""></option>
        {itens.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
}
