import style from './Categoria_buscas.module.css'
import Image from 'next/image'
import IconeBebidas from '../../../public/Icones/bebidas.png'
import IconeCarne from '../../../public/Icones/carne.png'
import IconeEntrada from '../../../public/Icones/entrada.png'
import IconeLupa from '../../../public/Icones/lupa.png'
import IconeMassa from '../../../public/Icones/massa.png'
import IconeSalada from '../../../public/Icones/salada.png'
import IconeSobremesa from '../../../public/Icones/sobremesa.png'

export default function Categorias_Buscas(){
    return(
        <section className={style.catBucas}>
            <div className={style.btnCategorias}>
                <button><Image className={style.iconeImg} src={IconeEntrada}/> Entradas </button>
                <button><Image className={style.iconeImg} src={IconeMassa}/> Massas </button>
                <button><Image className={style.iconeImg} src={IconeCarne}/> Carnes </button>
                <button><Image className={style.iconeImg} src={IconeBebidas}/> Bebidas </button>
                <button><Image className={style.iconeImg} src={IconeSalada}/> Saladas </button>
                <button><Image className={style.iconeImg} src={IconeSobremesa}/> Sobremesas </button>
            </div>
            <div className={style.inputBuscas}>
                <input className={style.inputTxt
                    
                } type="text" placeholder='Pesquise aqui um dos pratos do nosso cardápio' />
            </div>
        </section>
    )
}
