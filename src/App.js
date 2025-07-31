// App.js

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Write from "./pages/Write";
import Detail from "./pages/Detail";
import Edit from "./pages/Edit";
import Header from "./pages/layout/Header";
import Footer from "./pages/layout/Footer";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/write" element={<Write />} />
        <Route path="/post/:id" element={<Detail />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
