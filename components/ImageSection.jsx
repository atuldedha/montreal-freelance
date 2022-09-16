import Image from "next/image";
import React from "react";

import styles from "../styles/ImageSection.module.css";

function ImageSection({ direction, title, paragraph, src, alt }) {
  return (
    <div
      className={styles.container}
      style={{
        flexDirection: direction === "left" ? "row" : "row-reverse",
        // columnGap: direction === 'left' ? '120px' : '90px',
      }}
    >
      <div className={styles.imageWrapper}>
        <div className={styles.border1} />
        <div className={styles.border2} />
        <Image src={src} alt={alt} layout="fill" />
      </div>
      <div className={styles.contentWrapper}>
        <h4 className={styles.contentHeading}>{title}</h4>
        {/* Need key prop */}
        {paragraph.map((content) => (
          <div className={styles.list}>
            <span className={styles.listStyle}></span>
            <p>{content}</p>
          </div>
        ))}
        {/* <div className={styles.list}>
                    <span className={styles.listStyle}></span>
                    <p><strong>July 1st 2023 11:00AM</strong> St. Catherine street and Fort street Finishes at Place Du Canada</p>
                </div>
 */}
      </div>
    </div>
  );
}

export default ImageSection;
