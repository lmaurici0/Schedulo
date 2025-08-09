import React from "react";
import Header from "../../components/Header/Header";
import SearchBox from "../../components/SearchBox/SearchBox";

import styles from "../Home/Home.module.css";
import Card from "../../components/Card/Card"
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <>
      <Header />
      <div className={styles.search}>
        <SearchBox />
      </div>

      <h2 className={styles.subtitle}>Apartamentos procurados em São Paulo</h2>
      <div className={styles.cardDashboard}>
        <Card image={"https://i.pravatar.cc/200"} alt={"eric luis jahaha"} />
        <Card image={"https://i.pravatar.cc/200"} alt={"eric luis jahaha"} />
        <Card image={"https://i.pravatar.cc/200"} alt={"eric luis jahaha"} />
        <Card image={"https://i.pravatar.cc/200"} alt={"eric luis jahaha"} />
        <Card image={"https://i.pravatar.cc/200"} alt={"eric luis jahaha"} />
      </div>

      <h2 className={styles.subtitle}>Hotéis procurados em Rio de Janeiro</h2>
      <div className={styles.cardDashboard}>
        <Card image={"https://i.pravatar.cc/200"} alt={"eric luis jahaha"} />
        <Card image={"https://i.pravatar.cc/200"} alt={"eric luis jahaha"} />
        <Card image={"https://i.pravatar.cc/200"} alt={"eric luis jahaha"} />
        <Card image={"https://i.pravatar.cc/200"} alt={"eric luis jahaha"} />
        <Card image={"https://i.pravatar.cc/200"} alt={"eric luis jahaha"} />
      </div>

      <h2 className={styles.subtitle}>Chalés procurados em Gramado</h2>
      <div className={styles.cardDashboard}>
        <Card image={"https://i.pravatar.cc/200"} alt={"eric luis jahaha"} />
        <Card image={"https://i.pravatar.cc/200"} alt={"eric luis jahaha"} />
        <Card image={"https://i.pravatar.cc/200"} alt={"eric luis jahaha"} />
        <Card image={"https://i.pravatar.cc/200"} alt={"eric luis jahaha"} />
        <Card image={"https://i.pravatar.cc/200"} alt={"eric luis jahaha"} />
      </div>

    <Footer />
    </>
  );
}

export default Home;
