import Head from "next/head";
import React, { useState } from "react";
import styles from "../styles/Donation.module.css";
import Hero from "../components/Hero";
import Event from "../components/Event";
import Sponsors from "../components/Sponsors";

import CheckoutForm from "../components/CheckoutForm";

function Donation() {
  const [selected, setSelected] = useState({
    id: null,
    amount: 0,
    type: null,
  });

  return (
    <div>
      <Head>
        <title>Donation</title>
      </Head>
      <div>
        <Hero
          title="Donations"
          subtitle="Donate with us"
          image="/donation.png"
          alt="Donation"
        />
        <Event />
        <div className={styles.container}>
          <h2 className={styles.heading}>
            Donate for Montreal
            <span className={styles.headingSpan}>Canada Day</span> Parade
          </h2>
          <p className={styles.subHeading}>
            Please Tell Us About yourself ? Are you a company or individual
          </p>

          <div className={styles.buttonContainer}>
            <button
              onClick={() => setSelected({ ...selected, type: "company" })}
              className={
                selected.type === "company"
                  ? styles.companySelected
                  : styles.company
              }
            >
              Company
            </button>
            <button
              onClick={() => setSelected({ ...selected, type: "individual" })}
              className={
                selected.type === "individual"
                  ? styles.companySelected
                  : styles.company
              }
            >
              Indivdual
            </button>
          </div>

          <CheckoutForm
            price={selected.amount}
            selected={selected}
            setSelected={setSelected}
          />
        </div>
        <Sponsors />
      </div>
    </div>
  );
}

export default Donation;
