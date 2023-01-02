import styles from "./Banner.module.css";

import React from "react";

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
