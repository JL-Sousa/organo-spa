import { ICollaborator } from "../../shared/interfaces/ICollaborator";
import { Collaborator } from "../Collaborator";
import styles from "./Team.module.css";

interface TeamProps {
  primaryColor: string;
  secondaryColor: string;
  name: string;
  contributors: ICollaborator[];
}
export function Team({
  primaryColor,
  secondaryColor,
  name,
  contributors,
}: TeamProps) {
  return (
    contributors.length > 0 && (
      <section
        className={styles.team}
        style={{ backgroundColor: secondaryColor }}
      >
        <h3 style={{ borderColor: primaryColor }}>{name}</h3>
        <div className={styles.contributors}>
          {contributors.map((collaborator) => (
            <Collaborator
              backgroundColorCard={primaryColor}
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
