import Image from "next/image";
import styles from "./page.module.css";
import Topo from '@/Components/Topo'
import Categoria_buscas from "@/Components/Categoria_buscas";
import CardsCardapio from "@/Components/CardsCardapio";
import bruschetta from '../../public/bruschetta.jpg'
import carpaccio from '../../public/carpaccio.jpg'
import paella from '../../public/paella.jpg'
import ebispicy from '../../public/ebi-spicy.jpg'
import aligot from '../../public/aligot.jpg'

export default function Home() {
  return (
    <div className={styles.page}>
      <Topo/>
      <main className={styles.container}>
        <Categoria_buscas/>
        <CardsCardapio 
          imagem={bruschetta}
          nome='Bruschetta'
          tipo='Entrada'
          texto='Prato original da Italia, que leva fatias de pão italiano torrado, tomate picado, alho, manjericão e azeite'
          preco='R$ 9,20'
        />
        <CardsCardapio 
          imagem={bruschetta}
          nome='Bruschetta'
          tipo='Entrada'
          texto='Prato original da Italia, que leva fatias de pão italiano torrado, tomate picado, alho, manjericão e azeite'
          preco='R$ 9,20'
        />
        <CardsCardapio 
          imagem={bruschetta}
          nome='Bruschetta'
          tipo='Entrada'
          texto='Prato original da Italia, que leva fatias de pão italiano torrado, tomate picado, alho, manjericão e azeite'
          preco='R$ 9,20'
        />
        <CardsCardapio 
          imagem={bruschetta}
          nome='Bruschetta'
          tipo='Entrada'
          texto='Prato original da Italia, que leva fatias de pão italiano torrado, tomate picado, alho, manjericão e azeite'
          preco='R$ 9,20'
        />
      </main>
    </div>
  );
}
