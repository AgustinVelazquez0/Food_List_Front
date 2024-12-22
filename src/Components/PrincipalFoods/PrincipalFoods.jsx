import { useState, useEffect } from "react";
import styles from "./PrincipalFoods.module.css"; // Importa el CSS como módulo

function PrincipalFoods() {
  const [foods, setFoods] = useState([]);

  // Llamada a la API para obtener los alimentos desde el backend
  async function fetchFoods() {
    try {
      const response = await fetch("http://localhost:3001/foods");
      const data = await response.json();
      setFoods(data); // Actualiza el estado con los alimentos obtenidos
    } catch (error) {
      console.error("Error fetching food data:", error);
    }
  }

  useEffect(() => {
    fetchFoods(); // Llamar a la API cuando el componente se monte
  }, []);

  return (
    <div className={styles.fatherTitle}>
      <h2>Add To Your Order</h2>
      <div className={styles.contenedorFoods}>
        {foods.map((food) => (
          <div key={food._id} className={styles.foods}>
            {food.icon} {/* Muestra el icono de cada comida */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PrincipalFoods;
