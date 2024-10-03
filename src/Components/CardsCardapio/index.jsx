import Image from 'next/image'
import style from './CardsCardapio.module.css'
import ImagemComida from '../../../public/carpaccio.jpg'
 

export default function CardsCardapio(props){
    return(
        <div className={style.containerCardapio}>
            <h2>Cardápio</h2>
            <div className={style.cardCardapio}>
                <div className={style.cardImg}>
                    <Image className={style.imagemComida} src={props.imagem}/>
                </div>
                <div className={style.txtCard}>
                    <h3>{props.nome} </h3>
                    <small>{props.tipo}</small>
                    <p>{props.texto}</p>
                    <span>{props.preco}</span>
                </div>
            </div>
        </div>
    )
}