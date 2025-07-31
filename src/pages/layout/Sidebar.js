import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = ({ isOpen, onClose }) => {
  const [hoveredCode, setHoveredCode] = useState(false);
  const [hoveredRank, setHoveredRank] = useState(false);

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={onClose}>×</button>
      <h2 className="sidebar-title">UsCoding</h2>

      <ul>
        {/* 코드별 리뷰 */}
        <li
          className="dropdown"
          onMouseEnter={() => setHoveredCode(true)}
          onMouseLeave={() => setHoveredCode(false)}
        >
          <span className="dropdown-title">코드별 리뷰</span>
          <ul className={`dropdown-menu ${hoveredCode ? 'show' : ''}`}>
            <li><a href="/">C++</a></li>
            <li><a href="/">Python</a></li>
            <li><a href="/">Java</a></li>
          </ul>
        </li>

        {/* 좋아요 순위 */}
        <li
          className="dropdown"
          onMouseEnter={() => setHoveredRank(true)}
          onMouseLeave={() => setHoveredRank(false)}
        >
          <span className="dropdown-title">좋아요 순위</span>
          <ul className={`dropdown-menu ${hoveredRank ? 'show' : ''}`}>
            <li><a href="/">전체 랭킹</a></li>
            <li><a href="/">이번 주 랭킹</a></li>
            <li><a href="/">오늘의 랭킹</a></li>
          </ul>
        </li>
        <br></br>
        추후추가예정
      </ul>
    </div>
  );
};

export default Sidebar;
