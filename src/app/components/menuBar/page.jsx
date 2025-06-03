'use client'

import Image from "next/image";
import style from "./menuBar.module.css";
import { useState } from "react";
import Reservation from "../reservation/page";
import { handleNavigation } from "@/app/utils";

function MenuBar({ setShowBasket, paniers }) {
  const [openReservation, setOpenReservation] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={style.mobileContainer}>
        <div className={style.buttonContainer}>
          <button
            className={`${style.burger} ${open ? style.open : ""}`}
            onClick={() => setOpen(!open)}
            aria-label={open ? "Fermer menu" : "Ouvrir menu"}
            aria-expanded={open}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {open && (
          <nav className={style.menu}>
            <ul>
              <li>
                <a
                  onClick={() => {
                    handleNavigation("presentation");
                    setOpen(false);
                  }}
                >
                  A propos
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    handleNavigation("carte");
                    setOpen(false);
                  }}
                >
                  Carte
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    handleNavigation("galerie");
                    setOpen(false);
                  }}
                >
                  Galerie
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    handleNavigation("avis");
                    setOpen(false);
                  }}
                >
                  Avis
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    handleNavigation("contact");
                    setOpen(false);
                  }}
                >
                  Contact
                </a>
              </li>
              <h1
                className={style.mobileButton}
                onClick={() => setShowBasket(true)}
              >
                Commander
              </h1>
              <h1
                className={style.mobileButton}
                onClick={() => setOpenReservation(true)}
              >
                Réserver
              </h1>
            </ul>
          </nav>
        )}
      </div>
      <div className={style.container}>
        <h1
          className={style.item}
          onClick={() => handleNavigation("presentation")}
        >
          A propos
        </h1>
        <h1 className={style.item} onClick={() => handleNavigation("carte")}>
          Carte
        </h1>
        <h1 className={style.item} onClick={() => handleNavigation("galerie")}>
          Galerie
        </h1>
        <h1 className={style.item} onClick={() => handleNavigation("avis")}>
          Avis
        </h1>
        <h1 className={style.item} onClick={() => handleNavigation("contact")}>
          Contact
        </h1>
        <h1 className={style.button} onClick={() => setShowBasket(true)}>
          Commander
        </h1>
        <h1 className={style.button} onClick={() => setOpenReservation(true)}>
          Réserver
        </h1>
      </div>
      <div className={style.basket} onClick={() => setShowBasket(true)}>
        <Image src="/assets/basket.png" alt="basket" width={40} height={40} />
        <div style={{ position: "relative" }}>
          <div
            style={{
              backgroundColor: "#fff",
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              bottom: "-40px",
              left: "-50px",
            }}
          >
            {paniers?.length? paniers?.length : 0}
          </div>
        </div>
      </div>
      <Reservation open={openReservation} setOpen={setOpenReservation} />
    </>
  );
}

export default MenuBar;
