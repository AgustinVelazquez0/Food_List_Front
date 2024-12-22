import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import PrincipalFoods from "./src/Components/PrincipalFoods/PrincipalFoods.jsx";
import OrderList from "./src/Components/OrderList/OrderList.jsx";
import ContenedorBig from "./src/Components/ContenedorBig/ContenedorBig.jsx";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContenedorBig>
      <PrincipalFoods />
      <OrderList />
    </ContenedorBig>
  </StrictMode>
);
