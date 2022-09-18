import Image from "next/image";
import React from "react";
import styles from "../styles/About.module.css";
import { useRouter } from "next/router";
import en from "../locales/en";
import fr from "../locales/fr";

function About() {
  const router = useRouter();
  const { locale } = router;

  const t = locale === "en-US" ? en : fr;

  return (
    <div className={styles.container}>
      <div className={styles.lightBackground} />
      <h1 className={styles.heading}>
        {t.aboutEvent.title1}
        <span className={styles.headingSpan}>
          <span> </span> {t.aboutEvent.title2} <span> </span>{" "}
        </span>{" "}
        {t.aboutEvent.title3}
      </h1>
      <div className={styles.contentWrapper}>
        <div className={styles.imageWrapper}>
          <div className={styles.heartImage}>
            <Image src="/heart.svg" width={30} height={30} alt="Heart SVG" />
          </div>
          <Image
            className={styles.image}
            src="/about.png"
            layout="fill"
            alt="about image"
          />
          <div className={styles.border} />
        </div>
        <div className={styles.content}>
          {t.aboutEvent.options.map((option, index) => (
            <div key={index} className={styles.options}>
              <h4>{option.title}</h4>
              <p>{option.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
