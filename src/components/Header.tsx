// src/components/Header.tsx
import styles from './Header.module.css';
// Importa el logo desde la carpeta assets
import logoSrc from '../assets/mimi-logo.png'; // Ajusta la ruta si es necesario

/**
 * Componente Header: Muestra el logo y la navegación principal.
 */
function Header() {
  return (
    <header className={styles.header}>
      {/* Enlace del logo a la página de inicio (ruta '/') */}
      <a href="/" className={styles.logoContainer}>
        <img src={logoSrc} alt="Logo Mimi Crochet" className={styles.logoImage} />
        {/* <span className={styles.logoText}>Mimi Crochet</span> Opcional: si quieres texto junto al logo */}
      </a>
      <nav className={styles.navigation}>
        <ul>
          {/* TODO: Reemplazar '#' con rutas reales cuando usemos react-router-dom */}
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Tienda</a></li>
          <li><a href="#">Sobre Nosotros</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;