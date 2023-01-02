import { Collaborator } from "../Collaborator";
import styles from "./Team.module.css";

export function Team(props) {
  return (
    props.contributors.length > 0 && (
      <section
        className={styles.team}
        style={{ backgroundColor: props.secondaryColor }}
      >
        <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
        <div className={styles.contributors}>
          {props.contributors.map((collaborator) => (
            <Collaborator
              backgroundColorCard={props.primaryColor}
              key={collaborator.name}
              name={collaborator.name}
              office={collaborator.office}
              imagem={collaborator.imagem}
            />
          ))}
        </div>
      </section>
    )
  );
}
