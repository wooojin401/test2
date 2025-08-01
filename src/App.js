import React, { useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Write from "./pages/Write";
import Detail from "./pages/Detail";
import Edit from "./pages/Edit";
import Header from "./pages/layout/Header";
import Footer from "./pages/layout/Footer";
import Sidebar from "./pages/layout/Sidebar"; // ✅ 추가
import './App.css'; 
import Login from "./pages/Login";

function App() {
  const aboutRef = useRef(null);
   const howUseRef = useRef(null);
   const whyUseRef = useRef(null);

   const scrollIntoWhy = () => {
    if (whyUseRef.current){
      whyUseRef.current.scrollIntoView({behavior: 'smooth'});
    }
   }
  const scrollIntoUse = () => {
    if (howUseRef.current) {
      howUseRef.current.scrollIntoView({behavior: 'smooth'});
    }
  };
  const scrollIntoView = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({behavior: 'smooth'});
    }
  };
  return (
    <BrowserRouter>
      <Header />
      <div className="main_layout">
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/write" element={<Write />} />
            <Route path="/post/:id" element={<Detail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/edit/:id" element={<Edit />} />
          </Routes>
        </div>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
