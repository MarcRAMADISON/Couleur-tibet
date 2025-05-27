"use client";

import { heureOuvertures } from "@/app/utils";
import style from "./contact.module.css";
import dynamic from "next/dynamic";
import Image from "next/image";

const Map = dynamic(() => import("../map/page"), { ssr: false });

function Contact() {
  return (
    <div className={style.container}>
      <Map />
      <div className={style.block1}>
        <h1 className={style.title}>Heures d'ouverture</h1>
        {heureOuvertures.map((h, index) => {
          return (
            <div
              key={index}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2,1fr)",
                width: "100%",
                marginTop: "15px",
              }}
            >
              <h2 className={style.day}>{h.day}</h2>
              <h2 className={style.hour}>{h.heure}</h2>
            </div>
          );
        })}
        <h1 className={style.title} style={{ marginTop: "50px" }}>
          Localisation
        </h1>
        <h3 className={style.localisation}>
          56 Rue du Mirail 33000 Bordeaux France{" "}
        </h3>
        <div style={{ display: "flex", marginTop: "30px" }}>
          <Image
            src="/assets/facebook.png"
            width={40}
            height={40}
            alt="facebook logo"
          />
          .
          <Image
            src="/assets/instagram.png"
            style={{ marginLeft: "20px" }}
            width={40}
            height={40}
            alt="instagram logo"
          />
          <Image
            src="/assets/tiktok.png"
            style={{ marginLeft: "20px" }}
            width={40}
            height={40}
            alt="tiktok logo"
          />
        </div>
        <a href="tel:+33955805230" style={{ display:"flex",color:"#fff",alignItems:"center",margin:"30px 0px" }}>
          <Image
            src="/assets/phone.png"
            style={{ marginRight: "5px" }}
            width={20}
            height={20}
            alt="phone logo"
          />
          +33955805230
        </a>
      </div>
    </div>
  );
}

export default Contact;
