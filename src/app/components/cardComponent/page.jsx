import Image from 'next/image';
import style from './cardComponent.module.css'
import Animation from '../animation/page';

function CardComponent({image,title,onClick}) {
    return ( <Animation className={style.container} onClick={onClick} animation="fadeInUp">
        <div className={style.overlay}>
            <h3 className={style.overlayText}>Voir carte</h3>
        </div>
        <div className={style.imageContainer}>
            <Image src={image} alt="card image" layout="fill" objectFit='contain'/>
        </div>
        <h3>{title}</h3>
        <Image src='/assets/arrow_down.png' alt="card image" width={15} height={10}/>
    </Animation> );
}

export default CardComponent;