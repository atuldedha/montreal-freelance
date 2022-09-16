import Head from "next/head";
import React from "react";
import Event from "../components/Event";
import Hero from "../components/Hero";
import styles from "../styles/group.module.css";
function Group() {
  return (
    <div>
      <Head>
        <title>Volunteers & Participants</title>
      </Head>
      <Hero
        title="Volunteers & Groups"
        subtitle="A special opportunity awaits you"
        image="/group.png"
        alt="Volunteers & Groups"
      />
      <Event />
      <div className={styles.container}>
        <h4 className={styles.heading}>
          Are you interested in strengthening your leadership skills, building
          new Friendships or simply haing fun while serving your community and
          country?
        </h4>
        <p className={styles.subheading}>
          We aim to incorporate “your” needs to help make the parade a success
        </p>

        <p className={styles.opportunityHeading}>Opportunities for Volunteer</p>
        <div className={styles.listContainer}>
          <div className={styles.list}>
            <span className={styles.listStyle}></span>
            <p
              style={{
                fontWeight: "500",
              }}
            >
              Distribution of small flags and pins to public
            </p>
          </div>
          <div className={styles.list}>
            <span className={styles.listStyle}></span>
            <p
              style={{
                fontWeight: "500",
              }}
            >
              Park and Route helper
            </p>
          </div>
          <div className={styles.list}>
            <span className={styles.listStyle}></span>
            <p
              style={{
                fontWeight: "500",
              }}
            >
              Parade Line Controller
            </p>
          </div>
          <p className={styles.simpleParagraph}>
            To assist the “Supervising Parade Line Controller” to ensure that
            the parade moves at a good pace and helps avoid gaps between
            entries.
          </p>
          <p className={styles.simpleParagraph}>
            {" "}
            <span style={{ fontWeight: 500 }}>Note:</span> There are 2 Parade
            Line Controllers per section and a training session is given each
            june
          </p>

          <button className={styles.buttonVoluntier}>
            Register as Volunteer
          </button>
        </div>
      </div>

      <div className={styles.background}>
        <div className={styles.container}>
          <p className={styles.opportunityGroups}>
            Participate in the parade as a group
          </p>
          <div className={styles.listContainer}>
            <div className={styles.list}>
              <span className={styles.listStyleWhite}></span>
              <p
                style={{
                  fontWeight: "500",
                }}
              >
                A group can consit of walkers, cars or trucks (maximum length of
                28 ft) in the parade
              </p>
            </div>
            <div className={styles.list}>
              <span className={styles.listStyleWhite}></span>
              <p
                style={{
                  fontWeight: "500",
                }}
              >
                Showcase your traditional culture by music, dress, dance,
                laughter and your Canadian flags.
              </p>
            </div>
            <div className={styles.list}>
              <span className={styles.listStyleWhite}></span>
              <p
                style={{
                  fontWeight: "500",
                }}
              >
                If you would like to participate in the parade to celebrate
                Canada Day with all of us, click the button below to register.
              </p>
            </div>

            <button className={styles.button}>Register your group</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Group;
