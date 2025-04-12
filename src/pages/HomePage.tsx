// src/pages/HomePage.tsx
import styles from './HomePage.module.css';
import ProductCard from '../components/ProductCard'; // Importa el componente de tarjeta

// --- IMPORTA TUS IMÁGENES DE EJEMPLO ---
// Asegúrate de que estas imágenes existan en src/assets/
// ¡Y cambia la extensión si no son .jpg!
import imgOsito from '../assets/imgConeja.jpeg';


// Define la estructura de datos del producto (puedes moverla a un archivo types.ts luego)
interface ProductInfo {
  id: number | string;
  name: string;
  price: number;
  imageUrl: string;
}

// --- DATOS DE PRODUCTOS DE EJEMPLO ---
// ¡Reemplaza con tus muñecos reales cuando los tengas!
const sampleProducts: ProductInfo[] = [
  { id: 'p1', name: 'Osito Dormilón', price: 350, imageUrl: imgOsito }
];
// --- FIN DE DATOS ---

/**
 * Componente HomePage: Muestra el contenido principal de la tienda.
 */
function HomePage() {
  return (
    <main className={styles.homePage}>
      {/* TODO: Añadir un componente Hero Banner aquí si se desea */}
      <h2 className={styles.sectionTitle}>Nuestras Creaciones</h2>

      {/* Cuadrícula para mostrar los productos */}
      <div className={styles.productGrid}>
        {/* Mapea los datos de ejemplo y renderiza una ProductCard por cada uno */}
        {sampleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}

export default HomePage;