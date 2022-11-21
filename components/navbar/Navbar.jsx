import styles from './styles.module.css';
import logo from 'assets/logo.png';
import Image from 'next/image';
import SearchIcon from './SearchIcon';

const Navbar = () => {
  return (
    <main className={styles.navbar} id="navbar">
      <section className={styles.navbarBanner}>
        <span>ENVIO GRATIS A TODO EL PAIS EN COMPRAS SUPERIORES A $10.000</span>
      </section>
      <section className={styles.navbarMain}>
        <SearchIcon />
        {/* <input type="search" placeholder="Buscar..." /> */}
        <div className={styles.navbarLogo}>
          <Image src={logo} layout="fill" alt="logo cambiar esto" />
        </div>
        <div className={styles.navbarTools}>
          <div>Cart icon</div>
        </div>
      </section>
      <section className={styles.navbarMenu}>
        <ul>
          <li>Todas las categorias</li>
          <li>Perifericos</li>
          <li>Componentes</li>
          <li>Como comprar</li>
          <li>Envios</li>
        </ul>
      </section>
    </main>
  );
};

export default Navbar;
