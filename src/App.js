import React from "react";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NewProject from "./pages/NewProject";
import Contact from "./pages/Contact/Contact";
import Company from "./pages/Company/Company";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Container from "../src/components/layout/Container/Container"

function App() {
  return (
    <div className="App">
      
      <NavBar />
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Contato" element={<Contact />} />
          <Route path="/NewProject" element={<NewProject />} />
          <Route path="/Company" element={<Company />} />
        </Routes>
        
      </Container>
      <Footer />
    </div>
  );
}

export default App;
