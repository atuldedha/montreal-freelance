import React, { useState } from "react";
import Event from "../components/Event";
import Hero from "../components/Hero";
import styles from "../styles/Contact.module.css";
import { BsArrowLeft } from "react-icons/bs";
import ReCAPTCHA from "react-google-recaptcha";

function Contact() {
  const [value, setValue] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  function onChange(value) {
    setValue(value);
  }
  return (
    <div>
      <Hero
        title="Contact"
        subtitle="If you want to know anything just contact us"
        image="/contact.png"
      />
      <Event />

      <div className={styles.container}>
        <div className={styles.formContainer}>
          <h4 className={styles.heading}>
            For detailed Information Fill out the form
          </h4>
          <form className={styles.form}>
            <div className={styles.formGroup}>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name*"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className={styles.formGroup}>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email*"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles.formGroup}>
              <textarea
                placeholder="Message*"
                name="message"
                id="message"
                cols="30"
                rows="10"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div
              style={{
                marginBottom: "20px",
              }}
            >
              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                onChange={onChange}
              />
            </div>
            <button
              disabled={!name || !email || !message || !value}
              className={styles.submitBtn}
            >
              Submit
            </button>
          </form>
        </div>
        <div className={styles.contentContainer}>
          <div>
            <h4 className={styles.contactHeading}>Partner</h4>
            <p className={styles.contactText}>
              You would like to become a partner? Contact the Main Organizer,
              Nicholas Cowen, by e-mail.
              <BsArrowLeft style={{ paddingTop: "2px" }} /> I'll put a specific
              e-mail
            </p>
          </div>
          <div>
            <h4 className={styles.contactHeading}>Press</h4>
            <p className={styles.contactText}>
              Are you part of the press and want additional information about
              the event? Contact managing director, Caroline Polcsak, by e-mail.
              <BsArrowLeft style={{ paddingTop: "2px" }} /> I'll put a specific
              e-mail
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
