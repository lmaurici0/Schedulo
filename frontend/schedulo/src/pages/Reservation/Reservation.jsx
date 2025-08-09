import React, { useState } from "react";
import styles from "../Reservation/Reservation.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function formatDate(date) {
  if (!date) return "";
  return date.toLocaleDateString("pt-BR");
}

function Reservation() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [roomType, setRoomType] = useState("");
  const [results, setResults] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);

  const rooms = [
    {
      id: 1,
      name: "Quarto Standard",
      pricePerNight: 250,
      img: "https://images.unsplash.com/photo-1501117716987-c8eecf7d9f3b?auto=format&fit=crop&w=600&q=80",
      description: "Conforto básico, cama queen e Wi-Fi grátis.",
    },
    {
      id: 2,
      name: "Quarto Deluxe",
      pricePerNight: 400,
      img: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=600&q=80",
      description: "Espaçoso, vista para o mar, café da manhã incluso.",
    },
    {
      id: 3,
      name: "Suíte Premium",
      pricePerNight: 700,
      img: "https://images.unsplash.com/photo-1560448070-2bc63e436c86?auto=format&fit=crop&w=600&q=80",
      description: "Luxo total, varanda privada e banheira de hidromassagem.",
    },
  ];

  function nightsCount() {
    if (!checkIn || !checkOut) return 0;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diff = (end - start) / (1000 * 60 * 60 * 24);
    return diff > 0 ? diff : 0;
  }

  const handleSearch = () => {
    if (!checkIn || !checkOut) {
      alert("Por favor, selecione check-in e check-out.");
      return;
    }
    if (new Date(checkOut) <= new Date(checkIn)) {
      alert("Check-out deve ser após check-in.");
      return;
    }
    if (!roomType) {
      alert("Selecione o tipo de quarto.");
      return;
    }

    const filtered = rooms.filter((r) =>
      r.name.toLowerCase().includes(roomType.toLowerCase())
    );
    setResults(filtered);
    setSelectedRoom(null);
  };

  const handleReserve = (room) => {
    setSelectedRoom(room);
  };

  const totalPrice = selectedRoom
    ? selectedRoom.pricePerNight * nightsCount()
    : 0;

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.banner}>
        </div>

        <main className={styles.main}>
          <section className={styles.searchSection}>
            <h2>Faça sua reserva</h2>
            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label>Check-in</label>
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  min={new Date().toISOString().split("T")[0]}
                />
              </div>

              <div className={styles.inputGroup}>
                <label>Check-out</label>
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  min={checkIn || new Date().toISOString().split("T")[0]}
                />
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label>Adultos</label>
                <div className={styles.counter}>
                  <button
                    onClick={() => setAdults((a) => Math.max(1, a - 1))}
                    type="button"
                  >
                    −
                  </button>
                  <span>{adults}</span>
                  <button onClick={() => setAdults((a) => a + 1)} type="button">
                    +
                  </button>
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label>Crianças</label>
                <div className={styles.counter}>
                  <button
                    onClick={() => setChildren((c) => Math.max(0, c - 1))}
                    type="button"
                  >
                    −
                  </button>
                  <span>{children}</span>
                  <button
                    onClick={() => setChildren((c) => c + 1)}
                    type="button"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label>Tipo de Quarto</label>
                <select
                  value={roomType}
                  onChange={(e) => setRoomType(e.target.value)}
                  className={styles.select}
                >
                  <option value="">Selecione</option>
                  <option value="standard">Quarto Standard</option>
                  <option value="deluxe">Quarto Deluxe</option>
                  <option value="premium">Suíte Premium</option>
                </select>
              </div>
            </div>

            <button className={styles.searchBtn} onClick={handleSearch}>
               Buscar Disponibilidade
            </button>
          </section>

          <section className={styles.resultsSection}>
            {results.length === 0 && (
              <p className={styles.noResults}>Nenhum quarto selecionado</p>
            )}

            <div className={styles.cards}>
              {results.map((room) => (
                <div key={room.id} className={styles.card}>
                  <img
                    src={room.img}
                    alt={room.name}
                    className={styles.cardImage}
                  />
                  <div className={styles.cardBody}>
                    <h3>{room.name}</h3>
                    <p>{room.description}</p>
                    <p>
                      <strong>R$ {room.pricePerNight},00 / noite</strong>
                    </p>
                    <button
                      className={styles.reserveBtn}
                      onClick={() => handleReserve(room)}
                    >
                      Reservar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <aside className={styles.summarySection}>
            <h2>Resumo</h2>
            {selectedRoom ? (
              <>
                <p>
                  <strong>Quarto:</strong> {selectedRoom.name}
                </p>
                <p>
                  <strong>Check-in:</strong> {formatDate(new Date(checkIn))}
                </p>
                <p>
                  <strong>Check-out:</strong> {formatDate(new Date(checkOut))}
                </p>
                <p>
                  <strong>Noites:</strong> {nightsCount()}
                </p>
                <p>
                  <strong>Adultos:</strong> {adults}
                </p>
                <p>
                  <strong>Crianças:</strong> {children}
                </p>
                <p className={styles.totalPrice}>Total: R$ {totalPrice},00</p>
                <button className={styles.continueBtn}>
                  Finalizar
                </button>
              </>
            ) : (
              <p>Selecione um quarto para ver o resumo.</p>
            )}
          </aside>
        </main>
      </div>

      <Footer />
    </>
  );
}

export default Reservation;
