import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Write from "./pages/Write";
import Detail from "./pages/Detail";
import Edit from "./pages/Edit";
import Header from "./pages/layout/Header";
import Footer from "./pages/layout/Footer";
import Sidebar from "./pages/layout/Sidebar"; // ✅ 추가
import './App.css'; 

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="main_layout">
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/write" element={<Write />} />
            <Route path="/post/:id" element={<Detail />} />
            <Route path="/edit/:id" element={<Edit />} />
          </Routes>
        </div>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
