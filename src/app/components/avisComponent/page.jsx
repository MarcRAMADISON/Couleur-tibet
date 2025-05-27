import Image from 'next/image';
import style from './avisComponent.module.css'

function AvisComponent({image,name,description}) {
    return ( <div className={style.container}>
        <div className={style.imageContainer}>
            <Image src={image} alt='client profil' layout='fill' objectFit='contain'/>
        </div>
        <h3 className={style.name}>{name}</h3>
        <h3 className={style.description}>{description}</h3>
        <div className={style.logoContainer}>
            <Image src='/assets/stars.png' alt='client profil' layout='fill' objectFit='contain'/>
        </div>
    </div> );
}

export default AvisComponent;