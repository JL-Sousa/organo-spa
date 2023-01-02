import styles from "./Collaborator.module.css";

interface CollaboratorProps {
  name: string;
  office: string;
  imagem: string;
  backgroundColorCard: string;
}
export function Collaborator({
  name,
  office,
  imagem,
  backgroundColorCard,
}: CollaboratorProps) {
  return (
    <div className={styles.collaborator}>
      <div
        className={styles.header}
        style={{ backgroundColor: backgroundColorCard }}
      >
        <img src={imagem} alt={name} />
      </div>
      <div className={styles.footer}>
        <h4>{name}</h4>
        <h5>{office}</h5>
      </div>
    </div>
  );
}
