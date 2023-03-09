import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import {}

function App() {
  const [count, setCount] = useState(0);

  return (
   <Layout></Layout>
    <Routes>
      <Route path="/" />
      <Route path="/" />
    </Routes>
  );
}

export default App;
