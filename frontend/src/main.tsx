import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { HashRouter, Route, Routes } from "react-router";
import App from "./App/App.tsx";

import { Add } from "./Pages/Add.tsx";
import { Manager } from "./Pages/Manager.tsx";
import { SocialManager } from "./Pages/SocialManager.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path={"/"} element={<App />}>
          <Route index element={<Manager />} />
          <Route path={"add"} element={<Add />} />
          <Route path={"manager/"} element={<Manager />} />
          <Route path={"social/"} element={<SocialManager />} />
        </Route>
        <Route path={"*"} element={<>Nothing </>} />
      </Routes>
    </HashRouter>
  </StrictMode>,
);
