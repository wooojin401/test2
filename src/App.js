// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Write from "./pages/Write";
import Detail from "./pages/Detail";
import Edit from "./pages/Edit";
import Header from "./pages/layout/Header";
import Footer from "./pages/layout/Footer";

import './App.css'; 
import About from "./pages/About";
function App() {
  return (
    <BrowserRouter>
      <Header />

      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/write" element={<Write />} />
          <Route path="/About" element={<About />} />
          <Route path="/post/:id" element={<Detail />} />
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  );
}


export default App;
