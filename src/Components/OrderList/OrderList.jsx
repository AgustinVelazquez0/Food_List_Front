import styles from "./OrderList.module.css";
function OrderList() {
  return (
    <div className={styles.list}>
      <h3>OrderList</h3>
      <ul>
        <li>
          <div>
            <span>���</span>
            <span>Pizza Margherita</span>
            <span>$12.00</span>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default OrderList;
