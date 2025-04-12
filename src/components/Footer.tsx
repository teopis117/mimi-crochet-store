// src/components/Footer.tsx
import styles from './Footer.module.css';

/**
 * Componente Footer: Muestra el copyright y año actual.
 */
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p>
        &copy; {currentYear} Mimi Crochet. Todos los derechos reservados.
        {/* Ejemplo de enlace opcional */}
        {/* | Hecho con ♡ por <a href="tu-sitio-web-o-github" target="_blank" rel="noopener noreferrer">Tu Nombre</a> */}
      </p>
    </footer>
  );
}

export default Footer;