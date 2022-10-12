import React, { useState } from "react";
import Event from "../components/Event";
import Hero from "../components/Hero";
import styles from "../styles/Contact.module.css";
import { BsArrowLeft } from "react-icons/bs";
import ReCAPTCHA from "react-google-recaptcha";
import { useRouter } from "next/router";
import en from "../locales/en";
import fr from "../locales/fr";
import Head from "next/head";
import { useWindowSize } from "../utils/WindowResizeHook";
import emailjs from "@emailjs/browser";

function Contact() {
  const router = useRouter();
  const { locale } = router;

  const [width, height] = useWindowSize();

  const t = locale === "en-US" ? en : fr;
  const [value, setValue] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  function onChange(value) {
    setValue(value);
  }

  //templateid template_83il5mb
  //serviceid service_mulju2v
  //public key 7rd1LY-6t60I0sXQl

  const sendEmail = (e) => {
    e.preventDefault();
    const sendObject = {
      name: name,
      email: email,
      message: message,
    };

    emailjs
      .send(
        "service_ndv7tu4",
        "template_cjbd9xu",
        sendObject,
        "xtJDzyKlv0BFpzkQE"
      )
      .then(
        (result) => {
          console.log(result.text);
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <Head>
        <title>{t.contact.title}</title>
      </Head>
      <Hero
        title={t.contact.title}
        subtitle={t.contact.subtitle}
        image="/contact.png"
        alt={t.contact.title}
      />
      <Event />

      <div className={styles.container}>
        <div className={styles.formContainer}>
          <h4 className={styles.heading}>{t.contact.form.heading}</h4>
          <form className={styles.form}>
            <div className={styles.formGroup}>
              <input
                type="text"
                name="name"
                id="name"
                placeholder={`${t.contact.form.name} *`}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className={styles.formGroup}>
              <input
                type="email"
                name="email"
                id="email"
                placeholder={`${t.contact.form.email} *`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles.formGroup}>
              <textarea
                placeholder={`${t.contact.form.message} *`}
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
                size={width < parseFloat("380") ? "compact" : "normal"}
              />
            </div>
            <button
              disabled={!name || !email || !message || !value}
              className={styles.submitBtn}
              onClick={sendEmail}
            >
              {t.contact.form.btn}
            </button>
          </form>
        </div>
        <div className={styles.contentContainer}>
          {t.contact.options.map((item, index) => (
            <div key={index}>
              <h4 className={styles.contactHeading}>{item.title}</h4>
              <p className={styles.contactText}>
                {item.description}
                <button
                  className={styles.mailtoButton}
                  onClick={() =>
                    (window.location =
                      index === 1
                        ? "mailto:kully2005@yahoo.ca"
                        : "mailto:MontrealCanadaDayParade@gmail.com")
                  }
                >
                  Email
                </button>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;
