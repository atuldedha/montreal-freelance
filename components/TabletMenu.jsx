import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/TabletMenu.module.css";

const TabletMenu = ({ t, locale, closeMenu }) => {
  return (
    <>
      <Link href="/">
        <a className={styles.tabletMenuItem} onClick={() => closeMenu()}>
          {t.nav.home}
        </a>
      </Link>
      <div className={styles.divider} />
      <Link href="/information">
        <a className={styles.tabletMenuItem} onClick={() => closeMenu()}>
          {t.nav.information}
        </a>
      </Link>
      <div className={styles.divider} />
      <Link href="/group">
        <a className={styles.tabletMenuItem} onClick={() => closeMenu()}>
          {t.nav.group}
        </a>
      </Link>
      <div className={styles.divider} />
      <Link href="/history">
        <a className={styles.tabletMenuItem} onClick={() => closeMenu()}>
          {t.nav.history}
        </a>
      </Link>
      <div className={styles.divider} />
      <Link href="/contact">
        <a className={styles.tabletMenuItem} onClick={() => closeMenu()}>
          {t.nav.contact}
        </a>
      </Link>
      <div className={styles.divider} />
      <button className={styles.button} onClick={() => closeMenu()}>
        {t.nav.signIn}
      </button>
    </>
  );
};

export default TabletMenu;
