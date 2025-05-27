import DateTimePicker from '../dateTimePicker/page';
import style from './commande.module.css';
import FloatingLabelInput from '../floatingLabelInput/page';

function Commande({handleBack}) {
    return (  <div className={style.container}>
      <h2 className={style.titleCard}>Commande</h2>
      <DateTimePicker placeholder="Date / Heure de commande:"/>
      <FloatingLabelInput id="Nom et Prénom" placeholder="Nom et Prénom" />
      <FloatingLabelInput id="Adresse éxacte" placeholder="Adresse éxacte" />
      <FloatingLabelInput id="E-mail" placeholder="E-mail" />
      <FloatingLabelInput id="Téléphone" placeholder="Téléphone" />
      <div className={style.buttonContainer}>
        <div className={style.backButton} onClick={handleBack}>Retour</div>
        <div className={style.validerButton}>Valider commande</div>
      </div>
      </div> );
}

export default Commande;