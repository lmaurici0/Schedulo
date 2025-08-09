import React, { useState } from "react";
import styles from "../UserReservation/UserReservation.module.css";
import { FaMapMarkerAlt, FaCalendarAlt, FaTimesCircle } from "react-icons/fa";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function UserReservation() {
  const [reservas] = useState([
    {
      id: 1,
      hotel: "Grand Palace Hotel",
      local: "Rio de Janeiro, Brasil",
      checkin: "15/08/2025",
      checkout: "20/08/2025",
      status: "Próxima",
      imagem: "https://images.unsplash.com/photo-1600047508454-9e7d3c02987d",
    },
    {
      id: 2,
      hotel: "Royal Sunset Resort",
      local: "Cancún, México",
      checkin: "10/07/2025",
      checkout: "17/07/2025",
      status: "Concluída",
      imagem: "https://images.unsplash.com/photo-1590490360182-c33d57733427",
    },
  ]);

  return (
    <>
      <Header />

      <div className={styles.container}>
        <h1 className={styles.titulo}>Minhas Reservas</h1>
        <div className={styles.lista}>
          {reservas.map((reserva) => (
            <div className={styles.card} key={reserva.id}>
              <img
                src={reserva.imagem}
                alt={reserva.hotel}
                className={styles.imagem}
              />
              <div className={styles.info}>
                <h2>{reserva.hotel}</h2>
                <p className={styles.local}>
                  <FaMapMarkerAlt /> {reserva.local}
                </p>
                <p className={styles.datas}>
                  <FaCalendarAlt /> {reserva.checkin} - {reserva.checkout}
                </p>
                <span
                  className={`${styles.status} ${
                    styles[reserva.status.toLowerCase()]
                  }`}
                >
                  {reserva.status}
                </span>
                <div className={styles.acoes}>
                  <button className={styles.detalhes}>Ver Detalhes</button>
                  {reserva.status === "Próxima" && (
                    <button className={styles.cancelar}>
                      <FaTimesCircle /> Cancelar
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
