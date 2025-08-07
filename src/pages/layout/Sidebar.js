import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = ({ isOpen, onClose, onTypeSelect }) => {
  const [hoveredCode, setHoveredCode] = useState(false);
  const [hoveredRank, setHoveredRank] = useState(false);

  const handleClick = (type) => {
    onTypeSelect(type);
  };

  console.log("✅ Sidebar 렌더링됨 - isOpen:", isOpen);

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <button className="close-btn" onClick={onClose}>×</button>
      <h2 className="sidebar-title">UsCoding</h2>

      <ul>
        <li
          className="dropdown"
          onMouseEnter={() => setHoveredCode(true)}
          onMouseLeave={() => setHoveredCode(false)}
        >
          <span className="dropdown-title">코드별 리뷰</span>
          <ul className={`dropdown-menu ${hoveredCode ? "show" : ""}`}>
            <li><span onClick={() => handleClick("cpp")}>C++</span></li>
            <li><span onClick={() => handleClick("python")}>Python</span></li>
            <li><span onClick={() => handleClick("java")}>Java</span></li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
