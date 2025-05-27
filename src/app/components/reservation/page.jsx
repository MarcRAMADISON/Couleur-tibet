import Modal from "../modal/page";
import style from "./reservation.module.css";
import { useState } from "react";
import DateTimePicker from '../dateTimePicker/page';
import FloatingLabelInput from '../floatingLabelInput/page';

const convivNumber = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

function Reservation({ open, setOpen }) {
  const [isNextStep, setIsNextStep] = useState(false);

  return (
    <Modal isOpen={open} onClose={() => setOpen(false)}>
      {isNextStep ? (
        <div className={style.container}>
          <h2 className={style.titleCard}>Réservation</h2>
          <FloatingLabelInput id="Nom et Prénom" placeholder="Nom et Prénom" />
          <FloatingLabelInput
            id="Adresse éxacte"
            placeholder="Adresse éxacte"
          />
          <FloatingLabelInput id="E-mail" placeholder="E-mail" />
          <FloatingLabelInput id="Téléphone" placeholder="Téléphone" />
          <h3 className={style.recapText}>Réservation de 4 conviviales , le 15/02/2025 à 10h00</h3>
          <div className={style.buttonContainer}>
            <div className={style.backButton} onClick={()=>setIsNextStep(false)}>
              Retour
            </div>
            <div className={style.validerButton}>Valider réservation</div>
          </div>
        </div>
      ) : (
        <div style={{ padding: "50px 0px 20px 0px" }}>
          <DateTimePicker placeholder="Date / Heure de réservation :" />
          <h3 className={style.labeSelect}>Nombre de convives</h3>
          <div className={style.numberSelect}>
            {convivNumber.map((n,index) => {
              return <div key={index} className={style.number}>{n}</div>;
            })}
          </div>
          <div
            className={style.nextStepButton}
            onClick={() => setIsNextStep(true)}
          >
            Continuer resérvation
          </div>
        </div>
      )}
    </Modal>
  );
}

export default Reservation;
