import Image from "next/image";
import style from "./presentation.module.css";

function Presentation() {
  return (
    <div className={style.container} id="presentation">
      <div className={style.imageContainer}>
        <Image
          src="/assets/tibet_presentation.png"
          alt="illustration tibet"
          layout="fill"
          objectFit="cover"
          objectPosition="100% 0%"
        />
      </div>
      <div className={style.textContainer}>
        <h3 className={style.text}>
          Couleur Tibet est un restaurant Tibétain situe en plein cœur de
          Bordeaux entre le quartier Saint-Michel et quartier Victoire. En plus
          de notre spécialité du Tibet, nous proposons aussi des plats
          asiatiques sur place comme à emporter. Nous disposons d’une salle de
          restauration, et d’une salle pour match et billard. Que vous soyez un
          amateur de cuisine exotique ou simplement curieux de découvrir de
          nouvelles saveurs, notre restaurant tibétain est l'endroit idéal pour
          un voyage gastronomique à travers les sommets enneigés de l'Himalaya.
          Venez nous rejoindre et laissez-vous transporter dans un monde de
          délices culinaires et d'hospitalité tibétaine authentique.
        </h3>
      </div>
    </div>
  );
}

export default Presentation;
