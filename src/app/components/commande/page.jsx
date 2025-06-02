'use client'

import DateTimePicker from '../dateTimePicker/page';
import style from './commande.module.css';
import FloatingLabelInput from '../floatingLabelInput/page';
import { useState } from 'react';
import Swal from 'sweetalert2';

function Commande({handleBack,setOpen}) {
  const [dateTime, setDateTime] = useState("");
  const [values,setValues]=useState({
    fullName:'',
    adresse:'',
    email:"",
    phone:""
  })

  const handleChange=(e)=>{
    e.preventDefault()
    setValues((p)=>({...p,[e.target.name]:e.target.value}))
  }

  const isValid= values.fullName && values.adresse && values.phone && values.email && dateTime

  const handleValider=(e)=>{
    e.preventDefault()
    if (isValid){
      Swal.fire({
        title: "Commande éffectuée",
        text: "Votre Commande a été envoyé. Merci",
        icon: "success"
      });
      setValues({
        fullName:"",
        adresse:"",
        email:"",
        phone:""
      })
      setDateTime(null)
      setOpen(false)
    }
  }


    return (  <div className={style.container}>
      <h2 className={style.titleCard}>Commande</h2>
      <DateTimePicker placeholder="Date / Heure de commande:" dateTime={dateTime} setDateTime={setDateTime}/>
      <FloatingLabelInput id="Nom et Prénom" placeholder="Nom et Prénom" name="fullName" value={values.fullName} handleChange={handleChange} />
      <FloatingLabelInput id="Adresse éxacte" placeholder="Adresse éxacte" name="adresse" value={values.adresse} handleChange={handleChange} />
      <FloatingLabelInput id="E-mail" placeholder="E-mail" name="email" value={values.email} handleChange={handleChange} />
      <FloatingLabelInput id="Téléphone" placeholder="Téléphone" name="phone" value={values.phone} handleChange={handleChange} />
      <div className={style.buttonContainer}>
        <div className={style.backButton} onClick={handleBack}>Retour</div>
        <div className={isValid ? style.validerButton : style.disabledButton} onClick={handleValider}>Valider commande</div>
      </div>
      </div> );
}

export default Commande;