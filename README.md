# Food Ordering Application - Frontend

Este es el frontend de la aplicación de pedidos de comida, que permite a los usuarios visualizar y seleccionar alimentos, agregarlos a su carrito y realizar un pedido. El proyecto está desarrollado con **React** y **CSS Modules**.

## Tecnologías utilizadas:

- **React**: Para la construcción de la interfaz de usuario.
- **CSS Modules**: Para los estilos aislados en componentes.
- **Fetch API**: Para hacer solicitudes HTTP al backend.
- **JavaScript ES6**: Usado para la lógica de los componentes y la gestión del estado.

## Instalación:

1. **Clona el repositorio:**

   ```bash
   git@github.com:AgustinVelazquez0/Food_List_Front.git
   ```

2. **Navega a la carpeta del proyecto:**

   ```bash
   cd Food_List
   ```

3. **Instala las dependencias:**

   ```bash
   npm install
   ```

4. **Ejecuta el proyecto:**

   ```bash
   npm run dev
   ```

   El frontend estará disponible en `http://localhost:5173`.

## Funcionamiento:

- Al iniciar la aplicación, se realiza una solicitud al backend para obtener los datos de los alimentos, incluyendo sus íconos, precios y cantidades disponibles.
- Los usuarios pueden seleccionar alimentos y agregarlos a su pedido, visualizando el total en tiempo real.
- El ícono de cada alimento es mostrado en la interfaz de usuario.

## Repositorios Relacionados:

- [Backend del proyecto](https://github.com/AgustinVelazquez0/Food_List_Back)
