import "./App.css";
import { NavigationBar } from "../Components/NavigationBar.tsx";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <NavigationBar />
      <Outlet />
    </>
  );
}

export default App;
