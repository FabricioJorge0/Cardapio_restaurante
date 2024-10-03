import Image from "next/image";
import styles from "./page.module.css";
import Topo from '@/Components/Topo'
import Categoria_buscas from "@/Components/Categoria_buscas";

export default function Home() {
  return (
    <div className={styles.page}>
      <Topo/>
      <main className={styles.container}>
        <Categoria_buscas/>
      </main>
    </div>
  );
}
