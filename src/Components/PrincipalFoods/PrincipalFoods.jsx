import styles from "./PrincipalFoods.module.css"; // Importa el CSS como módulo

function PrincipalFoods() {
  return (
    <div className={styles.fatherTitle}>
      <h2>Add To Your Order</h2>
      <div className={styles.contenedorFoods}>
        <div className={styles.foods}>🍔</div>
        <div className={styles.foods}>🍕</div>
        <div className={styles.foods}>🌭</div>
        <div className={styles.foods}>🧀</div>
        <div className={styles.foods}>🥩</div>
        <div className={styles.foods}>🥗</div>
      </div>
    </div>
  );
}

export default PrincipalFoods;
