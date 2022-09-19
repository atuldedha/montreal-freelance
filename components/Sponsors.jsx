import React from "react";
import Image from "next/image";

import styles from "../styles/Sponsors.module.css";
import { useRouter } from "next/router";
import en from "../locales/en";
import fr from "../locales/fr";

function Sponsors() {
  const router = useRouter();
  const { locale } = router;

  const t = locale === "en-US" ? en : fr;
  return (
    <div className={styles.container}>
      <h4 className={styles.sponsorHeading}>Sponsors</h4>
      <div className={styles.imageWrapper}>
        <div>
          {locale === "en-US" ? (
            <Image
              src="/canada.svg"
              width={419}
              height={42}
              alt="canada logo"
            />
          ) : (
            <Image
              src="/fr-montreal.png"
              width={419}
              height={42}
              alt="canada logo"
            />
          )}
        </div>
        <div>
          {" "}
          <Image
            src="/montreal_logo.svg"
            width={204}
            height={45}
            alt="montreal logo"
          />
        </div>
        {/* <div>
          <Image src="/tundra.svg" width={167} height={180} alt="3rd logo" />
        </div> */}
      </div>
    </div>
  );
}

export default Sponsors;
