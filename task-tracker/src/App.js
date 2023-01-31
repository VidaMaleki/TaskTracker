import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import './App.css';

function App() {
  return (
  <>
  <HashRouter>
    <Navbar />
    <Routes>
      <Route path="/" exact element={<Home/>}/>
    </Routes>
  </HashRouter>
  </> 
  );
}

export default App;
