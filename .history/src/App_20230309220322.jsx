import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import {Layout} from './s/components/Layout'

function App() {
  const [count, setCount] = useState(0);

  return (
   <Layout><Routes>
   <Route path="/" />
   <Route path="/" />
 </Routes></Layout>
    
  );
}

export default App;
