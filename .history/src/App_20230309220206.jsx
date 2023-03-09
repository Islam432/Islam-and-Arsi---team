import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import {Layout} from './components/Layout'

function App() {
  const [count, setCount] = useState(0);

  return (
   <Layout></Layout>
    
  );
}

export default App;
