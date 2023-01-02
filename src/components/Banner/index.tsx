import styles from "./Banner.module.css";

interface BannerProps {
  imagemAddress: string;
  altText?: string;
}
export function Banner({ imagemAddress, altText }: BannerProps) {
  return (
    <header className={styles.header}>
      <img src={imagemAddress} alt={altText} />
    </header>
  );
}
