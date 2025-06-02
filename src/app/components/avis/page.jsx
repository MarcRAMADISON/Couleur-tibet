import { avisList } from "@/app/utils";
import style from "./avis.module.css";
import AvisComponent from "../avisComponent/page";

function Avis() {
  return (
    <div className={style.container} id="avis">
      <h3 className={style.title}>AVIS DE NOS CLIENTS</h3>
      <div className={style.avisContainer}>
            {
                avisList.map((avis,index)=>{
                    return <AvisComponent key={index} name={avis.name} image={avis.image} description={avis.description}/>
                })
            }
      </div>
    </div>
  );
}

export default Avis;
