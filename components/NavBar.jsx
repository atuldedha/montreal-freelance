import React from "react";
import Image from "next/image";
import styles from "../styles/Nav.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
function NavBar() {
  const router = useRouter();
  const { locale } = router;
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
          <a>Home</a>
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
          <a>Information</a>
        </Link>
        <Link href="/group">
          <a>Group/Volunteer</a>
        </Link>
        <Link href="/history">
          <a>History</a>
        </Link>
        <Link href="/contact">
          <a>Contact Us</a>
        </Link>
        <button className={styles.button}>Sign In</button>
      </div>
    </nav>
  );
}

export default NavBar;
