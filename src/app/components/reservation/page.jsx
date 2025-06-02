import Modal from "../modal/page";
import style from "./reservation.module.css";
import { useState } from "react";
import DateTimePicker from "../dateTimePicker/page";
import FloatingLabelInput from "../floatingLabelInput/page";
import moment from "moment";
import Swal from "sweetalert2";

const convivNumber = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

function Reservation({ open, setOpen }) {
  const [isNextStep, setIsNextStep] = useState(false);
  const [values, setValues] = useState({
    currentNumber: 0,
    fullName:"",
    adresse:"",
    email:"",
    phone:""
  });
  const [dateTime, setDateTime] = useState("");

  const handleNumber = (n) => {
    setValues((p) => ({
      ...p,
      currentNumber: n,
    }));
  };

  const handleChange=(e)=>{
    e.preventDefault();

    setValues((p)=>({...p,[e.target.name]:e.target.value}))
  }

  const isValid= values.fullName && values.adresse && values.phone && values.email && dateTime

  const handleValider=(e)=>{
    e.preventDefault()
    console.log('isValid',isValid)
    if (isValid){
      Swal.fire({
        title: "Réservation éffectuée",
        text: "Votre Réservation a été envoyé. Merci",
        icon: "success"
      });
      setValues({
        currentNumber: 0,
        fullName:"",
        adresse:"",
        email:"",
        phone:""
      })
      setIsNextStep(false)
      setDateTime(null)
      setOpen(false)
    }
  }


  return (
    <Modal isOpen={open} onClose={() => setOpen(false)}>
      {isNextStep ? (
        <div className={style.container}>
          <h2 className={style.titleCard}>Réservation</h2>
          <FloatingLabelInput id="Nom et Prénom" placeholder="Nom et Prénom" name="fullName" value={values.fullName} handleChange={handleChange}/>
          <FloatingLabelInput
            id="Adresse éxacte"
            placeholder="Adresse éxacte"
            name="adresse" value={values.adresse} handleChange={handleChange}
          />
          <FloatingLabelInput id="E-mail" placeholder="E-mail" name="email" value={values.email} handleChange={handleChange} />
          <FloatingLabelInput id="Téléphone" placeholder="Téléphone" name="phone" value={values.phone} handleChange={handleChange}/>
          {dateTime && values.currentNumber && (
            <h3 className={style.recapText}>
              Réservation de {values.currentNumber} conviviales , le{" "}
              {moment(dateTime).format("DD/MM/YYYY")} à{" "}
              {moment(dateTime).format("HH:mm")}
            </h3>
          )}
          <div className={style.buttonContainer}>
            <div
              className={style.backButton}
              onClick={() => setIsNextStep(false)}
            >
              Retour
            </div>
            <div className={isValid? style.validerButton : style.desabledButton} onClick={handleValider}>Valider réservation</div>
          </div>
        </div>
      ) : (
        <div style={{ padding: "50px 0px 20px 0px" }}>
          <DateTimePicker
            placeholder="Date / Heure de réservation :"
            dateTime={dateTime}
            setDateTime={setDateTime}
          />
          <h3 className={style.labeSelect}>Nombre de convives</h3>
          <div className={style.numberSelect}>
            {convivNumber.map((n, index) => {
              return (
                <div
                  key={index}
                  className={
                    values.currentNumber === n
                      ? style.selectedNumber
                      : style.number
                  }
                  onClick={() => handleNumber(n)}
                >
                  {n}
                </div>
              );
            })}
          </div>
          <button
            className={dateTime && values.currentNumber ? style.nextStepButton : style.desabledNextButton}
            onClick={() => dateTime && values.currentNumber && setIsNextStep(true)}
          >
            Continuer resérvation
          </button> 
        </div>
      )}
    </Modal>
  );
}

export default Reservation;
