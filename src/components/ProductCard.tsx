// src/components/ProductCard.tsx
import styles from './ProductCard.module.css';

// Define la estructura de datos que espera este componente
interface ProductInfo {
  id: number | string; // Puede ser número o texto
  name: string;
  price: number; // Usamos número para el precio
  imageUrl: string; // Ruta o URL de la imagen
  // Podrías añadir más campos aquí (descripción corta, etc.)
}

// Define las Props que recibirá el componente
interface ProductCardProps {
  product: ProductInfo;
}

/**
 * Componente ProductCard: Muestra una tarjeta con la info de un producto.
 */
function ProductCard({ product }: ProductCardProps) {
  // Formatea el precio a moneda (ejemplo MXN, ajusta si es necesario)
  const formattedPrice = new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
  }).format(product.price);

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={product.imageUrl}
          alt={`Muñeco de crochet ${product.name}`}
          className={styles.image}
          loading="lazy"
        />
      </div>
      <div className={styles.content}>
        <h3>{product.name}</h3>
        <p className={styles.price}>{formattedPrice}</p>
        {/* TODO: Reemplazar '#' con la ruta a la página de detalle */}
        <a href="#" className={styles.actionButton}>
          Ver Detalles
        </a>
      </div>
    </div>
  );
}

export default ProductCard;