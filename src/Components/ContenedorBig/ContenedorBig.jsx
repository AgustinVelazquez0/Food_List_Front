import PropTypes from "prop-types"; // Importar PropTypes
import styles from "./ContenedorBig.module.css"; // Si necesitas estilos

const ContenedorBig = ({ children }) => {
  return (
    <div className={styles.ContenedorBig}>
      {children} {/* Renderiza los componentes hijos */}
    </div>
  );
};

// Definir las propTypes
ContenedorBig.propTypes = {
  children: PropTypes.node.isRequired, // 'children' es un nodo y es requerido
};

export default ContenedorBig;
