"use client";

import { carteData, menuList } from "@/app/utils";
import style from "./carte.module.css";
import CardComponent from "../cardComponent/page";
import Modal from "../modal/page";
import { useState } from "react";

function Carte({ setPaniers, paniers }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentCard, setCurrentCard] = useState();
  const [currentPagination, setCurrentPagination] = useState(3);

  const handleClick = (e, title) => {
    e.preventDefault();
    const card = menuList.find((m) => m.name === title);
    setCurrentCard(card);
    setModalOpen(true);
  };

  return (
    <div className={style.container} id="carte">
      <h3 className={style.title}>Notre carte</h3>
      <div className={style.cardContainer}>
        {carteData.slice(0, currentPagination).map((d, index) => {
          return (
            <CardComponent
              key={index}
              onClick={(e) => handleClick(e, d.title)}
              image={d.image}
              title={d.title}
            />
          );
        })}
      </div>
      {currentPagination === carteData.length ? (
        <div
          className={style.button}
          onClick={() => setCurrentPagination(3)}
        >
          Cacher tous
        </div>
      ) : (
        <div
          className={style.button}
          onClick={() => setCurrentPagination(carteData.length)}
        >
          Voir tous
        </div>
      )}
      {currentCard && (
        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
          <h2 className={style.titleCard}>{currentCard.name}</h2>
          {currentCard.menus.map((menu, index) => {
            return (
              <div key={index} className={style.cardItem}>
                <div>
                  <div className={style.name}>{menu.name}</div>
                  <div className={style.description}>{menu.description}</div>
                </div>
                <div>
                  <div className={style.price}>{menu.price}€</div>

                  {paniers.find((p) => p === menu) ? (
                    <h3
                      style={{ color: "#ff2c2c" }}
                      className={style.addBasket}
                      onClick={() =>
                        setPaniers((prev) => prev.filter((p) => p !== menu))
                      }
                    >
                      Retirer du panier
                    </h3>
                  ) : (
                    <h3
                      className={style.addBasket}
                      onClick={() =>
                        setPaniers((prev) => [
                          ...prev.filter((m) => m !== menu),
                          menu,
                        ])
                      }
                    >
                      Ajouter au panier
                    </h3>
                  )}
                </div>
              </div>
            );
          })}
        </Modal>
      )}
    </div>
  );
}

export default Carte;
