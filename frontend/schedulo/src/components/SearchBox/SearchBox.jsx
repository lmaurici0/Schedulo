import React, { useState } from "react";
import styles from "../SearchBox/SearchBox.module.css";

export default function SearchBox() {
  const [destination, setDestination] = useState("");
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");

  const handleSearch = () => {
    alert(
      `Procurando: \nDestino: ${destination}\nCheck-in: ${checkin}\nCheck-out: ${checkout}`
    );
  };

  return (
    <div className={styles.searchbox}>
      <div className={styles.field}>
        <label htmlFor="destination">Onde</label>
        <input
          id="destination"
          type="text"
          placeholder="Buscar destinos"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="checkin">Check-in</label>
        <input
          id="checkin"
          type="date"
          value={checkin}
          onChange={(e) => setCheckin(e.target.value)}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="checkout">Check-out</label>
        <input
          id="checkout"
          type="date"
          value={checkout}
          onChange={(e) => setCheckout(e.target.value)}
        />
      </div>

      <button
        className={styles.searchButton}
        onClick={handleSearch}
        aria-label="Buscar"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={styles.searchIcon}
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </button>
    </div>
  );
}
    