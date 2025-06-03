'use client'

import { useState, useMemo } from "react";
import Modal from "../modal/page";
import style from "./panier.module.css";
import _ from "lodash";
import Commande from "../commande/page";
import { handleNavigation } from "@/app/utils";

function Panier({ open, setOpen, data, setData }) {
  const [isLivraison, setIsLivraison] = useState(false);
  const [openCommande, setOpenCommande] = useState(false);

  const calculatedTotal = useMemo(() => {
    return data?.reduce((total, d) => {
      return d?.nombre ? d?.nombre * d.price + total : d.price + total;
    }, 0);
  }, [data]);

  const remove = (carte) => {
    setData((prev) => {
      const filtredData = prev.filter((p) => p.name !== carte.name);
      return filtredData;
    });
  };

  const handleNombre = (type, carte) => {
    setData((prev) => {
      const found = prev.find((p) => p.name === carte.name);
      if (type === "add") {
        return [
          ...prev.filter((f) => f.name !== carte.name),
          { ...found, nombre: found?.nombre ? found?.nombre + 1 : 2 },
        ];
      } else {
        return [
          ...prev.filter((f) => f.name !== carte.name),
          { ...found, nombre: found?.nombre ? found?.nombre - 1 : 1 },
        ];
      }
    });
  };

  return (
    <Modal isOpen={open} onClose={() => setOpen(false)}>
      {!openCommande ? (
        <>
          <h2 className={style.titleCard}>Panier</h2>
          {data?.length ? (
            <>
              {_.sortBy(data, "name").map((d, index) => {
                return (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                      marginTop: "30px",
                      position: "relative",
                    }}
                    key={index}
                  >
                    <div className={style.row}>
                      <div className={style.name}>{d.name}</div>
                      <div className={style.description}>{d.description}</div>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-end",
                      }}
                    >
                      <div
                        style={{ marginRight: "10px", marginBottom: "10px" }}
                      >
                        {d.price}€
                      </div>
                      <div style={{ display: "flex" }}>
                        <button
                          className={style.valueControl}
                          onClick={() => handleNombre("substract", d)}
                          title="Decrease value"
                          aria-label="Decrease value"
                        >
                          -
                        </button>

                        <input
                          className={style.valueInput}
                          type="number"
                          value={d.nombre || 1}
                          name="numberInput"
                          id="numberInput"
                          readOnly
                        />

                        <button
                          className={style.valueControl}
                          onClick={() => handleNombre("add", d)}
                          title="Increase value"
                          aria-label="Increase value"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div
                      style={{
                        color: "#ff2c2c",
                        cursor: "pointer",
                        position: "absolute",
                        top: "10px",
                        right: "-15px",
                        fontSize: "1.5rem",
                      }}
                      onClick={() => remove(d)}
                    >
                      x
                    </div>
                  </div>
                );
              })}
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                  marginTop: "30px",
                }}
              >
                <label className={style.container}>
                  Livraison express
                  <input
                    type="checkbox"
                    id="livraison"
                    name="livraison"
                    checked={isLivraison}
                    onChange={() => setIsLivraison((prev) => !prev)}
                  />
                  <span className={style.checkmark}></span>
                </label>
                <h3 style={{ fontSize: "1.1rem", fontWeight: "bold" }}>3€</h3>
              </div>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                  marginTop: "50px",
                }}
              >
                <div className={style.name}>Total</div>
                <div style={{ fontWeight: "bold" }}>
                  {isLivraison ? 3 + calculatedTotal : calculatedTotal}€
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  marginTop: "40px",
                }}
              >
                <div
                  className={style.nextBouton}
                  onClick={() => setOpenCommande(true)}
                >
                  Continuer commande
                </div>
              </div>
            </>
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  margin: "30px 0px",
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                Votre panier est vide
              </div>
              <div
                style={{
                  color: "#000",
                  border: "1px solid #000",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  padding: "10px 15px",
                  cursor: "pointer",
                }}
                onClick={()=>{
                  setOpen(false)
                  handleNavigation("carte")
                }}
              >
                Voir carte
              </div>
            </div>
          )}{" "}
        </>
      ) : (
        <Commande handleBack={() => setOpenCommande(false)} setOpen={setOpen} />
      )}
    </Modal>
  );
}

export default Panier;
