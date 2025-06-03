import Image from 'next/image';
import style from './avisComponent.module.css';
import Animation from '../animation/page';

function AvisComponent({image,name,description}) {
    return ( <div className={style.container}>
        <Animation className={style.imageContainer} animation="fadeInUp">
            <Image src={image} alt='client profil' layout='fill' objectFit='contain'/>
        </Animation>
        <Animation className={style.name} animation="fadeInDown">{name}</Animation>
        <Animation className={style.description} animation="fadeInDown">{description}</Animation>
        <Animation className={style.logoContainer} animation="fadeInDown">
            <Image src='/assets/stars.png' alt='client profil' layout='fill' objectFit='contain'/>
        </Animation>
    </div> );
}

export default AvisComponent;