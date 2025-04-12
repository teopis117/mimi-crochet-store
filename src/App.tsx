// src/App.tsx - Mimi Crochet Store

import './App.css';
// Importa desde las carpetas correctas
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';

/**
 * Componente Raíz: Renderiza la estructura principal (Layout).
 */
function App() {
  return (
    <>
      <Header />
      <HomePage />
      <Footer />
    </>
  );
}

export default App;