import styles from "./welcome.module.css";
import Image from "next/image";
import Animation from "../animation/page";

function Welcome() {
  return (
    <div className={styles.container} id="welcome">
      <div className={styles.textContainer}>
        <div className={styles.logo}>
          <Image
            src="/assets/logo.png"
            alt="logo tibet"
            layout="fill"
            objectFit="contain"
            objectPosition="50% 50%"
          />
        </div>

        <Animation className={styles.title} animation="fadeInUp">RESTAURANT TIBÉTAIN</Animation>
        <Animation style={{ display: "flex",margin:"70px 0px" }} animation="fadeInUp">
          <Image
            src="/assets/localisation.png"
            alt="localisation tibet"
            width={45}
            height={60}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              marginLeft:"10px"
            }}
          >
            <h3 className={styles.adresse}>55 rue de Mirail</h3>
            <h3 className={styles.ville}>33000 Beardeaux France</h3>
          </div>
        </Animation>
        <Animation className={styles.button} animation="fadeInRight">VOIR NOTRE CARTE</Animation>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="/assets/RESTAURANT_TIBÉTAIN.png"
          alt="restaurant"
          layout="fill"
          objectFit="contain"
          objectPosition="50% 50%"
        />
      </div>
    </div>
  );
}

export default Welcome;
