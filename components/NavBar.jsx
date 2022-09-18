import React from "react";
import Image from "next/image";
import styles from "../styles/Nav.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import en from "../locales/en";
import fr from "../locales/fr";
function NavBar() {
  const router = useRouter();
  const { locale } = router;

  const t = locale === "en-US" ? en : fr;

  return (
    <nav className={styles.nav}>
      {/* Logo  */}
      <div className={styles.logo}>
        <Image
          className={styles.logoImage}
          src="/logo.svg"
          alt="logo"
          width={150}
          height={60}
        />
      </div>

      {/* Nav Links */}
      <div className={styles.menu}>
        <Link href="/">
          <a>{t.nav.home}</a>
        </Link>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            columnGap: "0.5rem",
          }}
          onClick={() =>
            router.push("/", "/", {
              locale: locale === "en-US" ? "fr" : "en-US",
            })
          }
        >
          <span>{locale === "en-US" ? "FR" : "EN"}</span>
          <div
            style={{
              marginBottom: "0px",
              padding: "0px",
            }}
          >
            {locale === "en-US" ? (
              <Image
                src="https://freesvg.org/img/frenchflagframed.png"
                alt="flag"
                width={20}
                height={10}
                objectFit="cover"
              />
            ) : (
              <Image
                src="https://freesvg.org/img/tobias-Flag-of-the-United-Kingdom.png"
                alt="flag"
                width={20}
                height={10}
                objectFit="cover"
              />
            )}
          </div>
        </div>
        <Link href="/information">
          <a>{t.nav.information}</a>
        </Link>
        <Link href="/group">
          <a>{t.nav.group}</a>
        </Link>
        <Link href="/history">
          <a>{t.nav.history}</a>
        </Link>
        <Link href="/contact">
          <a>{t.nav.contact}</a>
        </Link>
        <button className={styles.button}>{t.nav.signIn}</button>
      </div>
    </nav>
  );
}

export default NavBar;
