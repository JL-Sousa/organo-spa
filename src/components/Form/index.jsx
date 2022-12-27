import { useState } from "react";
import { Button } from "../Button";
import { DropdownList } from "../DropdownList";
import { TextField } from "../TextField";
import styles from "./Form.module.css";

export function Form() {
  const [name, setName] = useState("");
  const [office, setOffice] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");
  const times = ["Programacao", "Frontend", "Data Sciense", "Devops"];

  const save = (event) => {
    event.preventDefault();
    console.log("Form foi submetido!", name, office, imagem, time);
  };

  return (
    <section className={styles.container__form}>
      <form onSubmit={save}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <TextField
          value={name}
          mandatory={true}
          name="Nome"
          placeholder="Digite seu nome"
          handleInput={(value) => setName(value)}
        />
        <TextField
          value={office}
          mandatory={true}
          name="Cargo"
          placeholder="Digite seu cargo"
          handleInput={(value) => setOffice(value)}
        />
        <TextField
          value={imagem}
          name="Imagem"
          placeholder="Informe o endereço da imagem"
          handleInput={(value) => setImagem(value)}
        />
        <DropdownList
          value={time}
          mandatory={true}
          name="Time"
          itens={times}
          handleInput={(value) => setTime(value)}
        />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
}
