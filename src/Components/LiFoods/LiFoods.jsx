import { useState, useEffect } from "react";
import styles from "./LiFoods.module.css"; // Importar los estilos CSS

function LiFoods() {
  // Lista de alimentos por defecto
  const defaultFoods = [
    { icon: "🍔", price: 5.0, quantity: 1 },
    { icon: "🍕", price: 7.5, quantity: 2 },
    { icon: "🌭", price: 4.0, quantity: 1 },
    { icon: "🧀", price: 3.0, quantity: 3 },
    { icon: "🥩", price: 10.0, quantity: 1 },
    { icon: "🥗", price: 6.5, quantity: 2 },
  ];

  // Función para obtener los alimentos desde LocalStorage o usar el array por defecto
  const getInitialFoods = () => {
    const savedFoods = localStorage.getItem("foods");
    return savedFoods ? JSON.parse(savedFoods) : defaultFoods;
  };

  const [foods, setFoods] = useState(getInitialFoods()); // Estado inicial con alimentos

  // useEffect para actualizar LocalStorage cada vez que cambien los alimentos
  useEffect(() => {
    localStorage.setItem("foods", JSON.stringify(foods)); // Guardar en LocalStorage
  }, [foods]);

  // useEffect para cargar las comidas desde LocalStorage al iniciar
  useEffect(() => {
    const savedFoods = localStorage.getItem("foods");
    if (!savedFoods) {
      setFoods(defaultFoods); // Solo establece las comidas por defecto si no hay nada en LocalStorage
    }
  }, []); // Solo se ejecuta al cargar la página

  // Calcular el precio total
  const totalPrice = foods.reduce(
    (total, food) => total + food.price * food.quantity,
    0
  );

  // Función para aumentar la cantidad de alimentos
  const increaseQuantity = (index) => {
    const newFoods = [...foods]; // Copia del array
    newFoods[index].quantity++; // Aumenta la cantidad
    setFoods(newFoods); // Actualiza el estado
  };

  // Función para disminuir la cantidad de alimentos
  const decreaseQuantity = (index) => {
    const newFoods = [...foods]; // Copia del array
    if (newFoods[index].quantity > 0) {
      newFoods[index].quantity--; // Disminuye la cantidad
    }
    setFoods(newFoods); // Actualiza el estado
  };

  // Función para eliminar un alimento
  const removeFood = (index) => {
    const newFoods = foods.filter((_, i) => i !== index); // Eliminar el alimento en el índice dado
    setFoods(newFoods); // Actualiza el estado
  };

  // Función para restablecer la lista de alimentos por defecto manualmente
  const resetFoods = () => {
    setFoods(defaultFoods); // Restablece los alimentos por defecto
    localStorage.setItem("foods", JSON.stringify(defaultFoods)); // Actualiza LocalStorage
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
      <button className={styles.resetButton} onClick={resetFoods}>
        Restore foods
      </button>{" "}
      {/* Botón para restablecer la lista de alimentos */}
    </div>
  );
}

export default LiFoods;
