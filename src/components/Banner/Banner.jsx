import styles from "./Banner.module.css";

export function Banner() {
  return (
    <header className={styles.header}>
      <img src="/imagens/banner.png" alt="O banner principal do site organo" />
    </header>
  );
}
