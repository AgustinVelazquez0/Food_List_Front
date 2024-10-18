import { useState, useEffect } from "react";
import styles from "./LiFoods.module.css"; // Importar los estilos CSS

function LiFoods() {
  const [foods, setFoods] = useState([]); // Inicializar con un array vacío
  const [loading, setLoading] = useState(true); // Estado de carga

  // Definir fetchFoods para obtener datos de la API con async/await
  async function fetchFoods() {
    setLoading(true); // Colocar la aplicación en estado de carga
    try {
      const response = await fetch(
        "https://mocki.io/v1/5852ed66-d9a7-4b12-8470-b8ae178e89d5"
      );
      const data = await response.json();
      setFoods(data); // Actualizar el estado con los datos recibidos
    } catch (error) {
      console.error("Error fetching food data:", error);
    } finally {
      setLoading(false); // Quitar el estado de carga
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
    const newFoods = foods.filter(function (_, i) {
      return i !== index;
    });
    setFoods(newFoods);
  }

  function resetFoods() {
    fetchFoods(); // Llamar a la API nuevamente para restaurar las comidas
  }

  function handleBuy() {
    const totalPrice = foods.reduce(function (total, food) {
      return total + food.price * food.quantity;
    }, 0);
    alert("Total a pagar: $" + totalPrice.toFixed(2));
  }

  // Mostrar estado de carga
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.foodsContainer}>
      {foods.map(function (food, index) {
        return (
          <div key={index} className={styles.foodItem}>
            <span
              className={
                styles.foodIcon +
                " " +
                (food.stock === 0 ? styles.outOfStock : "")
              }
            >
              {food.icon}
            </span>{" "}
            <span className={styles.foodPrice}>
              {"$" + food.price.toFixed(2)}
            </span>{" "}
            <span className={styles.foodQuantity}>{"x" + food.quantity}</span>{" "}
            {/* Mostrar aviso de "No Stock" */}
            {food.stock === 0 && (
              <div className={styles.noStockMessage}>No Stock</div>
            )}
            {/* Botones */}
            <button
              className={styles.button + " " + styles.smallButton}
              onClick={function () {
                increaseQuantity(index);
              }}
              disabled={food.stock === 0} // Deshabilitar botón si no hay stock
            >
              ➕
            </button>
            <button
              className={styles.button + " " + styles.smallButton}
              onClick={function () {
                decreaseQuantity(index);
              }}
            >
              ➖
            </button>
            <button
              className={styles.button + " " + styles.smallButton}
              onClick={function () {
                removeFood(index);
              }}
            >
              Eliminar
            </button>
          </div>
        );
      })}
      <div className={styles.totalPrice}>
        <h3>
          Total Price: $
          {foods
            .reduce(function (total, food) {
              return total + food.price * food.quantity;
            }, 0)
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
