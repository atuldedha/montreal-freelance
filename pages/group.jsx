import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import Event from "../components/Event";
import Hero from "../components/Hero";
import en from "../locales/en";
import fr from "../locales/fr";
import styles from "../styles/group.module.css";
function Group() {
  const router = useRouter();
  const { locale } = router;

  const t = locale === "en-US" ? en : fr;
  return (
    <div>
      <Head>
        <title>{t.group.title}</title>
      </Head>
      <Hero
        title={t.group.title}
        subtitle={t.group.subtitle}
        image="/group.png"
        alt={t.group.title}
      />
      <Event />
      <div className={styles.container}>
        <h4 className={styles.heading}>{t.group.section1.title}</h4>
        <p className={styles.subheading}>{t.group.section1.subtitle}</p>

        <p className={styles.opportunityHeading}>{t.group.section2.title}</p>
        <div className={styles.listContainer}>
          {
            // map through the list of opportunities
            t.group.section2.options.map((option, index) => (
              <div key={index} className={styles.list}>
                <span className={styles.listStyle}></span>
                <p
                  style={{
                    fontWeight: "500",
                  }}
                >
                  {option}
                </p>
              </div>
            ))
          }

          <p className={styles.simpleParagraph}>{t.group.section2.text}</p>
          <p className={styles.simpleParagraph}>
            {" "}
            <span style={{ fontWeight: 500 }}>Note:</span>{" "}
            {t.group.section2.note}
          </p>

          <button className={styles.buttonVoluntier}>
            {t.group.section2.btn}
          </button>
        </div>
      </div>

      <div className={styles.background}>
        <div className={styles.container}>
          <p className={styles.opportunityGroups}>{t.group.section3.title}</p>
          <div className={styles.listContainer}>
            {
              // map through the list of opportunities
              t.group.section3.options.map((option, index) => (
                <div key={index} className={styles.list}>
                  <span className={styles.listStyleWhite}></span>
                  <p
                    style={{
                      fontWeight: "500",
                    }}
                  >
                    {option}
                  </p>
                </div>
              ))
            }

            <button className={styles.button}>{t.group.section3.btn}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Group;
