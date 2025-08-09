import React from "react";
import styles from "../Card/Card.module.css"

function Card({ image, alt }) {
  return (
    <div className={styles.card_body}>
      <div className={styles.card_image}>
        <img src={image} alt={alt} />
      </div>
    </div>
  );
}


export default Card;