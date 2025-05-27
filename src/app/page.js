'use client'

import styles from "./page.module.css";
import Welcome from "./components/welcome/page";
import MenuBar from "./components/menuBar/page";
import Presentation from "./components/presentation/page";
import Carte from "./components/carte/page";
import Galerie from "./components/galerie/page";
import Avis from './components/avis/page';
import Contact from "./components/contact/page";
import { useState } from "react";
import Panier from "./components/panier/page";

export default function Home() {
  const [showBasket,setShowBasket]=useState(false)
  const [paniers,setPaniers]=useState([])


  return (
    <div className={styles.page}>
      <MenuBar setShowBasket={setShowBasket} paniers={paniers}/>
      <Welcome/>
      <Presentation/>
      <Carte setPaniers={setPaniers} paniers={paniers}/>
      <Galerie/>
      <Avis/>
      <Contact/>
      <Panier open={showBasket} setOpen={setShowBasket} data={paniers} setData={setPaniers}/>
    </div>
  );
}
