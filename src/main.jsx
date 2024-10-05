import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import PrincipalFoods from "./Components/PrincipalFoods/PrincipalFoods.jsx";
import OrderList from "./Components/OrderList/OrderList.jsx";
import ContenedorBig from "./Components/ContenedorBig/ContenedorBig.jsx";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContenedorBig>
      <PrincipalFoods />
      <OrderList />
    </ContenedorBig>
  </StrictMode>
);
