import styles from "./Team.module.css";

export function Team(props) {
  return (
    <section
      className={styles.team}
      style={{ backgroundColor: props.secondaryColor }}
    >
      <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
    </section>
  );
}
