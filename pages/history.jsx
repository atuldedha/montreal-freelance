import Head from "next/head";
import React from "react";
import Event from "../components/Event";
import Hero from "../components/Hero";
import styles from "../styles/History.module.css";

function History() {
  return (
    <div>
      <Head>
        <title>History</title>
      </Head>
      <Hero
        title="History"
        subtitle="The history of Montreal’s Canada Day Parade"
        image="/history.png"
      />
      <Event />

      <p className={styles.textContainer}>
        The Canada Day Parade in Montreal was born on July 1st , 1977. The
        founder, cardiologist Dr. Roopnarine Singh, with the help of dedicated
        people and the participation of the generous public, contributed to the
        growth of this beautiful parade. The constant expansion of the parade
        continues thanks to the tireless enthusiasm and pride of many ethnic
        communities and organizations in and around the Montreal area.
      </p>
    </div>
  );
}

export default History;
