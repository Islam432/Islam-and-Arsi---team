import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Hom } from "./components/Home/Home";

function App() {
  return (
    
    <Layout>  <Routes>
    <Route path="/" element = {<Hom/>}/>
    <Route path="/" />
  </Routes></Layout>
  
  );
}

export default App;
