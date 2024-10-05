import LiFoods from "../LiFoods/LiFoods"; // Importa el componente LiFoods
import styles from "./OrderList.module.css"; // Si tienes estilos para OrderList

function OrderList() {
  return (
    <div className={styles.orderList}>
      <h1>Your Order</h1>
      <LiFoods />
    </div>
  );
}

export default OrderList;
