import Head from "next/head";
import React, { useEffect, useState } from "react";
import Event from "../components/Event";
import Hero from "../components/Hero";
import ImageSection from "../components/ImageSection";
import styles from "../styles/Information.module.css";
import { paradeYear } from "../components/untilLib/ParadeYear";

function Information() {
  const [currentParadeYear, setCurrentParadeYear] = useState();
  useEffect(() => {
    // sets the parade year depending on the month
    setCurrentParadeYear(paradeYear());
  }, []);

  return (
    <div>
      <Head>
        <title>Information</title>
      </Head>
      <Hero
        title="Information"
        subtitle={"Montreal Canada Day Parade " + currentParadeYear + " Route "}
        image="/map.png"
      />
      <Event />
      <ImageSection
        direction={"right"}
        title="How to get there ?"
        paragraph={[
          "The STM is the most effective way to get to the downtown core of Montreal. Get off at the Peel or Guy-Concordia stations on the Green Line OR the Bonaventure station on the Orange Line.",
          "July 1st " +
            currentParadeYear +
            " 11:00AM, Starting at St.Catherine O. and du Fort and finishes at Place Du Canada",
        ]}
        src="/information1.png"
        alt={"How to get there"}
      />
      <ImageSection
        direction={"left"}
        title="Activities"
        paragraph={[
          "Between 1:30PM and 3:30PM , there are cultural events in Place du Canada and a huge cake measuring 1.22 metres by 2.44 metres (4' by 8' ) is served. It is expected to feed 2,500 people",
          "Face painting and charicatures for kids on site",
          "Dance With Canada Day Ribbon Wands.",
        ]}
        src="/information2.png"
        alt={"How to get there"}
      />
      <div className={styles.container}>
        <div className={styles.background} />
        <div className={styles.content}>
          <h4 className={styles.title}>Road Closures</h4>
          <p className={styles.subtitle}>
            Please click below to see the road closures for the{" "}
            {currentParadeYear} parade
          </p>
          <p className={styles.pdfTitle}>Canada Day Street close pdf</p>
          <button className={styles.download}>Download</button>
        </div>
      </div>
    </div>
  );
}

export default Information;
