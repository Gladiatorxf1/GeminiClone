import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SideBar from "./components/sidebar";
import Mains from "./components/mains";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex h-[100vh] w-[100vw]">
      <SideBar />
      <Mains />
    </div>
  );
}

export default App;
