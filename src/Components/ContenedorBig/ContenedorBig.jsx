import PropTypes from "prop-types"; // Importar PropTypes
import styles from "./ContenedorBig.module.css"; // Si necesitas estilos

function ContenedorBig(props) {
  return (
    <div className={styles.ContenedorBig}>
      {props.children} {/* Renderiza los componentes hijos */}
    </div>
  );
}

// Definir las propTypes
ContenedorBig.propTypes = {
  children: PropTypes.node.isRequired, // 'children' es un nodo y es requerido
};

export default ContenedorBig;
