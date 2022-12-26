import { DropdownList } from "../DropdownList";
import { TextField } from "../TextField";
import styles from "./Form.module.css";

export function Form() {
  const times = ["Programacao", "Frontend", "Data Sciense", "Devops"];

  return (
    <section className={styles.container__form}>
      <form>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <TextField name="Nome" placeholder="Digite seu nome" />
        <TextField name="Cargo" placeholder="Digite seu cargo" />
        <TextField name="Imagem" placeholder="Informe o endereço da imagem" />
        <DropdownList name="Time" itens={times} />
      </form>
    </section>
  );
}
