import style from './Topo.module.css'

export default function Topo(){
    return(
        <div >
            <div className={style.topo}>
            <div className={style.topoTitulo}>
                <h1>RESTAURANTE</h1>
                <p>De pratos clássicos a criações surpreendentes, nosso cardápio é um requinte de sabores refinados</p>
            </div>
            </div>
        </div>
    )
}