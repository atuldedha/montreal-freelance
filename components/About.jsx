import Image from "next/image";
import React from "react";
import styles from "../styles/About.module.css";

function About() {
  return (
    <div className={styles.container}>
      <div className={styles.lightBackground} />
      <h1 className={styles.heading}>
        About the{" "}
        <span className={styles.headingSpan}>
          <span> </span> Montreal Canada Day Parade <span> </span>{" "}
        </span>{" "}
        Event
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
          <div className={styles.options}>
            <h4>Family Friendly</h4>
            <p>
              Bring your whole family to celebrate our great country’s birthday.
            </p>
          </div>
          <div className={styles.options}>
            <h4>Multiculture</h4>
            <p>
              Our country’s diversity is one of its main strength, come see the
              world colors
            </p>
          </div>
          <div className={styles.options}>
            <h4>Free Activities</h4>
            <p>Free activities and shows for whole family</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
