import React, { useState, useRef, useEffect } from "react";
import Logo from "../../assets/logo.svg";
import styles from "../Header/header.module.css";

const userPhoto = "https://i.pravatar.cc/60";

function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Fecha o drawer ao clicar fora do menu lateral
  useEffect(() => {
    function handleOutsideClick(event) {
      if (
        drawerOpen &&
        !event.target.closest(`.${styles.drawer}`) &&
        !event.target.closest(`.${styles.logo}`)
      ) {
        setDrawerOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [drawerOpen]);

  return (
    <>
      <header className={styles.header}>
        {/* Logo */}
        <img
          src={Logo}
          alt="Schedulo Logo"
          className={styles.logo}
          role="img"
          onClick={() => setDrawerOpen(true)}
          tabIndex={0}
          onKeyPress={e => { if (e.key === "Enter") setDrawerOpen(true); }}
          aria-label="Abrir menu lateral"
        />

        <div
          className={styles.userMenu}
          ref={dropdownRef}
          onClick={() => setDropdownOpen(!dropdownOpen)}
          role="button"
          tabIndex={0}
          onKeyPress={e => { if (e.key === "Enter") setDropdownOpen(!dropdownOpen); }}
          aria-haspopup="true"
          aria-expanded={dropdownOpen}
        >
          <img
            src={userPhoto}
            alt="Usuário"
            className={styles.userPhoto}
          />

          {dropdownOpen && (
            <ul className={styles.userDropdown}>
              <li>
                <a href="/perfil" className={styles.dropdownLink}>Perfil</a>
                <a href="/perfil" className={styles.dropdownLink}>Sair</a>
              </li>
            </ul>
          )}
        </div>
      </header>

      {drawerOpen && (
        <div
          className={styles.overlay}
          onClick={() => setDrawerOpen(false)}
          aria-hidden="true"
        />
      )}

      <nav className={`${styles.drawer} ${drawerOpen ? styles.open : ""}`} aria-hidden={!drawerOpen}>
        <button
          className={styles.closeButton}
          onClick={() => setDrawerOpen(false)}
          aria-label="Fechar menu lateral"
        >
          &times;
        </button>
        <ul className={styles.drawerMenu}>
          <li><a href="/">Início</a></li>
          <li><a href="/ajuda">Minhas Reservas</a></li>
          <li><a href="/ajuda">Reservar</a></li>
          <li><a href="/ajuda">Ajuda</a></li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
