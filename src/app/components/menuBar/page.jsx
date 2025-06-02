import Image from "next/image";
import style from "./menuBar.module.css";
import { useState } from "react";
import Reservation from "../reservation/page";

function MenuBar({ setShowBasket, paniers }) {
  const [openReservation,setOpenReservation]=useState(false)
  const handleNavigation=(id)=>{
    const element= document.getElementById(id)
    element.scrollIntoView({behavior:"smooth"})
  }

  return (
    <>
      <div className={style.container}>
        <h1 className={style.item} onClick={()=>handleNavigation("presentation")}>A propos</h1>
        <h1 className={style.item} onClick={()=>handleNavigation("carte")}>Carte</h1>
        <h1 className={style.item} onClick={()=>handleNavigation("galerie")}>Galerie</h1>
        <h1 className={style.item} onClick={()=>handleNavigation("avis")}>Avis</h1>
        <h1 className={style.item} onClick={()=>handleNavigation("contact")}>Contact</h1>
        <h1 className={style.button} onClick={() => setShowBasket(true)}>Commander</h1>
        <h1 className={style.button} onClick={()=>setOpenReservation(true)}>Réserver</h1>
      </div>
      <div className={style.basket} onClick={() => setShowBasket(true)}>
        <Image src="/assets/basket.png" alt="basket" width={40} height={40} />
        <div style={{position:'relative',}}>
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
          {paniers.length}
        </div>
        </div>
      </div>
      <Reservation open={openReservation} setOpen={setOpenReservation}/>
    </>
  );
}

export default MenuBar;
