import React from "react";
import styles from "../Profile/profile.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function Profile() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.welcome}>
          <p>
            Welcome, <br /> Amanda
          </p>
        </div>

        <div className={styles.banner}></div>

        <section className={styles.profileSection}>
          <div className={styles.leftSide}>
            <img
              className={styles.userPhotoLarge}
              src="https://randomuser.me/api/portraits/women/68.jpg"
              alt="User large photo"
            />
            <div className={styles.userInfo}>
              <h2>Amanda Mendes</h2>
              <p>amandamendes@gmail.com</p>
            </div>
          </div>

          <div className={styles.rightSide}>
            <div className={styles.inputRow}>
              <label className={styles.infoLabel}>
                Full Name
                <input type="text" placeholder="Amanda" disabled  className={styles.infoInput}/>
              </label>
              <label className={styles.infoLabel}>
                Username
                <input type="text" placeholder="AmandaRossi" disabled  className={styles.infoInput}/>
              </label>
            </div>

            <div className={styles.inputRow}>
              <label className={styles.infoLabel}>
                Gender
                <input type="text" placeholder="Female" disabled  className={styles.infoInput}/>
              </label>
              <label className={styles.infoLabel}>
                Country
                <input type="text" placeholder="Brasil" disabled  className={styles.infoInput}/>
              </label>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default Profile;
