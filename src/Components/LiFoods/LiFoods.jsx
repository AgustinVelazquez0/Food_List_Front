import { useState, useEffect } from "react";
import styles from "./LiFoods.module.css"; // Importar los estilos CSS

function LiFoods() {
  const [foods, setFoods] = useState([]); // Inicializar con un array vacío

  // Definir fetchFoods para obtener datos de la API
  async function fetchFoods() {
    try {
      const response = await fetch(
        "https://mocki.io/v1/2c739fd4-0a08-4a23-9377-22caadde6f05"
      );
      const data = await response.json();
      setFoods(data); // Actualizar el estado con los datos recibidos
    } catch (error) {
      console.error("Error fetching food data:", error);
    }
  }

  useEffect(() => {
    fetchFoods(); // Llamar a la API cuando se monte el componente
  }, []);

  // Funciones de lógica de la aplicación
  function increaseQuantity(index) {
    const newFoods = [...foods];
    if (newFoods[index].stock > 0) {
      newFoods[index].quantity++;
      newFoods[index].stock--;
    }
    setFoods(newFoods);
  }

  function decreaseQuantity(index) {
    const newFoods = [...foods];
    if (newFoods[index].quantity > 0) {
      newFoods[index].quantity--;
      newFoods[index].stock++;
    }
    setFoods(newFoods);
  }

  function removeFood(index) {
    const newFoods = foods.filter((_, i) => i !== index);
    setFoods(newFoods);
  }

  function resetFoods() {
    fetchFoods(); // Llamar a la API nuevamente para restaurar las comidas
  }

  function handleBuy() {
    const totalPrice = foods.reduce(
      (total, food) => total + food.price * food.quantity,
      0
    );
    alert("Total a pagar: $" + totalPrice.toFixed(2));
  }

  return (
    <div className={styles.foodsContainer}>
      {foods.map((food, index) => (
        <div key={index} className={styles.foodItem}>
          <span
            className={`${styles.foodIcon} ${
              food.stock === 0 ? styles.outOfStock : ""
            }`}
          >
            {food.icon}
          </span>{" "}
          <span className={styles.foodPrice}>
            {"$" + food.price.toFixed(2)}
          </span>{" "}
          <span className={styles.foodQuantity}>{"x" + food.quantity}</span>{" "}
          {food.stock === 0 && (
            <div className={styles.noStockMessage}>No Stock</div>
          )}
          <button
            className={`${styles.button} ${styles.smallButton}`}
            onClick={() => increaseQuantity(index)}
            disabled={food.stock === 0} // Deshabilitar botón si no hay stock
          >
            ➕
          </button>
          <button
            className={`${styles.button} ${styles.smallButton}`}
            onClick={() => decreaseQuantity(index)}
          >
            ➖
          </button>
          <button
            className={`${styles.button} ${styles.smallButton}`}
            onClick={() => removeFood(index)}
          >
            Delete
          </button>
        </div>
      ))}
      <div className={styles.totalPrice}>
        <h3>
          Total Price: $
          {foods
            .reduce((total, food) => total + food.price * food.quantity, 0)
            .toFixed(2)}
        </h3>
      </div>
      <button className={styles.buyButton} onClick={handleBuy}>
        Buy
      </button>
      <button className={styles.resetButton} onClick={resetFoods}>
        Restore foods
      </button>
    </div>
  );
}

export default LiFoods;
