import { useState } from "react";
import { ICollaborator } from "../../shared/interfaces/ICollaborator";
import { Button } from "../Button";
import { DropdownList } from "../DropdownList";
import { TextField } from "../TextField";
import styles from "./Form.module.css";

interface FormProps {
  registeredEmployee: (collaborator: ICollaborator) => void;
  times: string[];
}

export function Form(props: FormProps) {
  const [name, setName] = useState("");
  const [office, setOffice] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.registeredEmployee({
      name,
      office,
      imagem,
      time,
    });

    setName("");
    setOffice("");
    setImagem("");
    setTime("");
  };

  return (
    <section className={styles.container__form}>
      <form onSubmit={(event) => handleSubmit(event)}>
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
          itens={props.times}
          handleInput={(value) => setTime(value)}
        />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
}
