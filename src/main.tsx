import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App/App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import { Add } from "./Pages/Add.tsx";
import { History } from "./Pages/History.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<App />}>
          <Route index element={<Add />} />
          <Route path={"add"} element={<Add />} />
          <Route path={"history/"} element={<History />} />
        </Route>
        <Route path={"*"} element={<>Nothing </>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
