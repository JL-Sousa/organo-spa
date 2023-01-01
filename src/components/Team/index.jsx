import styles from "./Team.module.css";

export function Team(props) {
  return (
    <section className={styles.team}>
      <h3>{props.name}</h3>
    </section>
  );
}
