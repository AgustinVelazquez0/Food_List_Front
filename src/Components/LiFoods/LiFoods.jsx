import { useState, useEffect } from "react";
import styles from "./LiFoods.module.css"; // Importar los estilos CSS

function LiFoods() {
  const [foods, setFoods] = useState([]); // Inicializar con un array vacío
  const [loading, setLoading] = useState(true); // Estado de carga

  // URL base de JSON Server
  const BASE_URL = "http://localhost:3001/products";

  // Definir fetchFoods para obtener datos de la API con async/await
  async function fetchFoods() {
    setLoading(true); // Colocar la aplicación en estado de carga
    try {
      const response = await fetch(BASE_URL);
      const data = await response.json();
      if (Array.isArray(data)) {
        setFoods(data); // Actualizar el estado con los datos recibidos
      } else {
        console.error("Unexpected data format:", data);
      }
    } catch (error) {
      console.error("Error fetching food data:", error);
    } finally {
      setLoading(false); // Quitar el estado de carga
    }
  }

  // Función para actualizar el stock y la cantidad en JSON Server
  async function updateFood(index, updatedFood) {
    try {
      await fetch(`${BASE_URL}/${index + 1}`, {
        // El índice empieza en 0, pero los ID en JSON Server comienzan en 1
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedFood),
      });
    } catch (error) {
      console.error("Error updating food:", error);
    }
  }

  useEffect(() => {
    fetchFoods(); // Llamar a la API cuando se monte el componente
  }, []);

  // Funciones de lógica de la aplicación
  async function increaseQuantity(index) {
    const newFoods = [...foods];
    if (newFoods[index].stock > 0) {
      newFoods[index].quantity++;
      newFoods[index].stock--;

      setFoods(newFoods);
      await updateFood(index, {
        quantity: newFoods[index].quantity,
        stock: newFoods[index].stock,
      });
    }
  }

  async function decreaseQuantity(index) {
    const newFoods = [...foods];
    if (newFoods[index].quantity > 0) {
      newFoods[index].quantity--;
      newFoods[index].stock++;

      setFoods(newFoods);
      await updateFood(index, {
        quantity: newFoods[index].quantity,
        stock: newFoods[index].stock,
      });
    }
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
          {/* Botones */}
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
            Eliminar
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
