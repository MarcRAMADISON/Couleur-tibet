import Image from "next/image";
import style from "./galerie.module.css";
import Carousel from "../carousel/page";
import { galeries } from "@/app/utils";

function Galerie() {
  return (
    <div className={style.container} id="galerie">
      <h3 className={style.title}>GALERIE</h3>
      <div style={{width:"80%",maxWidth:"2080px",marginTop:"80px"}}>
      
        <Carousel>
            {
              galeries.map((galerie)=>{
                return <Image src={galerie} alt="galerie images" width={300} height={300}/>
              })  
            }
        </Carousel>
      </div>
    </div>
  );
}

export default Galerie;
