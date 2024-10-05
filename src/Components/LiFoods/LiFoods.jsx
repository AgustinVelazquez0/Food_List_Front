import { useState } from "react"; // Importar useState
import styles from "./LiFoods.module.css"; // Importar los estilos CSS

function LiFoods() {
  const [foods, setFoods] = useState([
    { icon: "🍔", price: 5.0, quantity: 1 },
    { icon: "🍕", price: 7.5, quantity: 2 },
    { icon: "🌭", price: 4.0, quantity: 1 },
    { icon: "🧀", price: 3.0, quantity: 3 },
    { icon: "🥩", price: 10.0, quantity: 1 },
    { icon: "🥗", price: 6.5, quantity: 2 },
  ]); // Estado con íconos, precios y cantidades

  // Calcular el precio total
  const totalPrice = foods.reduce(
    (total, food) => total + food.price * food.quantity,
    0
  );

  // Funciones para manejar la cantidad de alimentos
  const increaseQuantity = (index) => {
    const newFoods = [...foods]; // Copia del array
    newFoods[index].quantity++; // Aumenta la cantidad
    setFoods(newFoods); // Actualiza el estado
  };

  const decreaseQuantity = (index) => {
    const newFoods = [...foods]; // Copia del array
    if (newFoods[index].quantity > 0) {
      newFoods[index].quantity--; // Disminuye la cantidad
    }
    setFoods(newFoods); // Actualiza el estado
  };

  const removeFood = (index) => {
    const newFoods = foods.filter((_, i) => i !== index); // Elimina el alimento en el índice dado
    setFoods(newFoods); // Actualiza el estado
  };

  return (
    <div className={styles.foodsContainer}>
      {/* Contenedor principal */}
      {foods.map((food, index) => (
        <div key={index} className={styles.foodItem}>
          {/* Div individual para cada alimento */}
          <span className={styles.foodIcon}>{food.icon}</span>{" "}
          {/* Ícono de comida */}
          <span className={styles.foodPrice}>{`$${food.price.toFixed(
            2
          )}`}</span>{" "}
          {/* Precio */}
          <span
            className={styles.foodQuantity}
          >{`x${food.quantity}`}</span>{" "}
          {/* Cantidad */}
          {/* Botones para aumentar y disminuir la cantidad */}
          <button
            className={`${styles.button} ${styles.smallButton}`}
            onClick={() => increaseQuantity(index)}
          >
            +
          </button>
          <button
            className={`${styles.button} ${styles.smallButton}`}
            onClick={() => decreaseQuantity(index)}
          >
            -
          </button>
          {/* Botón para eliminar el alimento */}
          <button
            className={`${styles.button} ${styles.smallButton}`}
            onClick={() => removeFood(index)}
          >
            Eliminar
          </button>
        </div>
      ))}
      <div className={styles.totalPrice}>
        {/* Div para el precio total */}
        <h3>Total Price: ${totalPrice.toFixed(2)}</h3>{" "}
        {/* Mostrar precio total */}
      </div>
    </div>
  );
}

export default LiFoods;
