import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home/Home";

function App() {
  return (
    
    <Layout>  <Routes>
    <Route path="/" element = {<Home/>}/>
    <Route path="/comp" element= {} />
  </Routes></Layout>
  
  );
}

export default App;
