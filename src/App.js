import React from "react";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NewProject from "./pages/NewProject";
import Contact from "./pages/Contact";
import Company from "./pages/Company";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div>COSTS</div>

      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Contato" element={<Contact />} />
        <Route path="/NewProject" element={<NewProject />} />
        <Route path="/Company" element={<Company />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
