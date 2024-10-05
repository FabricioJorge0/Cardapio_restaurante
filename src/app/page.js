'use client'
import styles from "./page.module.css";
import Topo from '@/Components/Topo'

import CardsCardapio from "@/Components/CardsCardapio";
import { useState } from 'react';
import { produtos } from "@/data/data_produtos";
import Image from 'next/image'
import IconeBebidas from '../../public/Icones/bebidas.png'
import IconeCarne from '../../public/Icones/carne.png'
import IconeEntrada from '../../public/Icones/entrada.png'
import IconeLupa from '../../public/Icones/lupa.png'
import IconeMassa from '../../public/Icones/massa.png'
import IconeSalada from '../../public/Icones/salada.png'
import IconeSobremesa from '../../public/Icones/sobremesa.png'

let categoria = 'Entradas'
const filtrarProdutos = produtos.filter((produto) => produto.categoria === categoria);




export default function Home() {

  const [dadosFiltrados, setDadosFiltrados] = useState(filtrarProdutos);
  const [btnClicado, setBtnClicado] = useState('Entradas')
  const [textoBusca, setTextoBusca] = useState('')

  const mudarCategoria = (categoria) => {
      setDadosFiltrados(produtos.filter((produto) => produto.categoria === categoria))
      setBtnClicado(categoria)
      setTextoBusca('')

  }


  const buscarProduto = (textDigitado, e) => {
    setTextoBusca(textDigitado)
    setDadosFiltrados(produtos.filter((produto) => 
      produto.nome.toLowerCase().includes(textDigitado.toLowerCase()) || 
      produto.categoria.toLowerCase().includes(textDigitado.toLowerCase()))
    )
    // event.preventDefault()
  
    if(textDigitado === ''){
        setDadosFiltrados(filtrarProdutos)
    }
  }


  return (
    <div className={styles.page}>
      <Topo/>
      <main className={styles.container}>
      <section className={styles.catBuscas}>
            <div className={styles.btnCategorias}>
                <button
                  onClick={() => mudarCategoria('Entradas')} className={btnClicado === 'Entradas' ? styles.acenderBtn : styles.apagarBtn}>
                  <Image className={styles.iconeImg} src={IconeEntrada}/> 
                  Entradas 
                 </button>
                <button 
                    onClick={() => mudarCategoria('Massas')}  className={btnClicado === 'Massas' ? styles.acenderBtn : styles.apagarBtn}>
                    <Image className={styles.iconeImg} src={IconeMassa}/> 
                    Massas 
                    </button>
                <button 
                    onClick={() => mudarCategoria('Carnes')}  className={btnClicado === 'Carnes' ? styles.acenderBtn : styles.apagarBtn}>
                    <Image className={styles.iconeImg} src={IconeCarne}/>  
                    Carnes 
                </button>
                <button 
                    onClick={() => mudarCategoria('Bebidas')}  className={btnClicado === 'Bebidas' ? styles.acenderBtn : styles.apagarBtn}>
                    <Image className={styles.iconeImg} src={IconeBebidas}/> 
                    Bebidas
                    </button>
                <button 
                   onClick={() => mudarCategoria('Saladas')}  className={btnClicado === 'Saladas' ? styles.acenderBtn : styles.apagarBtn}>
                    <Image className={styles.iconeImg} src={IconeSalada}/> 
                    Saladas 
                    </button>
                <button 
                    onClick={() => mudarCategoria('Sobremesas')}  className={btnClicado === 'Sobremesas' ? styles.acenderBtn : styles.apagarBtn}>
                    <Image className={styles.iconeImg} src={IconeSobremesa}/> 
                    Sobremesas 
                </button>
            </div>
        </section>
        <div className={styles.inputBuscas}>
            <Image className={styles.iconeLupa} src={IconeLupa}/>
            <input id='inputValue' onChange={(event) => buscarProduto(event.target.value)} value={textoBusca} className={styles.inputTxt} type="text" placeholder='Pesquise aqui um dos pratos do nosso cardápio' />
        </div>

        <h2 className={styles.titulo}>Cardápio</h2>
        <div className={styles.containerCardapio}>

        {dadosFiltrados.map((produto) => (

          <CardsCardapio 
            key={produto.id}
            imagem={produto.imagem}
            nome={produto.nome}
            tipo={produto.categoria}
            texto={produto.descricao}
            preco={`R$ ${produto.preco}`}
          />
        ))}
        
        </div>
      </main>
    </div>
  );
}
