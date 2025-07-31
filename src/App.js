// App.js

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Write from "./pages/Write";
import Detail from "./pages/Detail";
import Edit from "./pages/Edit";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/write" element={<Write />} />
        <Route path="/post/:id" element={<Detail />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
