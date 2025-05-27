import Image from 'next/image';
import style from './cardComponent.module.css'

function CardComponent({image,title,onClick}) {
    return ( <div className={style.container} onClick={onClick}>
        <div className={style.imageContainer}>
            <Image src={image} alt="card image" layout="fill" objectFit='contain'/>
        </div>
        <h3>{title}</h3>
        <Image src='/assets/arrow_down.png' alt="card image" width={15} height={10}/>
    </div> );
}

export default CardComponent;