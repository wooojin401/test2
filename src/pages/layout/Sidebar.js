import React, { useState } from 'react';
import './Sidebar.css';
import { useCodeContext } from '../../hooks/codeContext';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [hoveredCode, setHoveredCode] = useState(false);
  const [hoveredRank, setHoveredRank] = useState(false);
  const { sidebarOpen, handleTypeChange, closeSidebar } = useCodeContext();

  return (
    <>
      {/* 바깥 클릭 닫힘용 오버레이 (옵션) */}
      <div
        className={`sidebar-backdrop ${sidebarOpen ? 'show' : ''}`}
        onClick={closeSidebar}
      />

      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={closeSidebar}>×</button>
        <h2 className="sidebar-title">UsCoding</h2>

        <ul className="sidebar-list">
          <li
            className="dropdown"
            onMouseEnter={() => setHoveredCode(true)}
            onMouseLeave={() => setHoveredCode(false)}
          >
            <span className="dropdown-title">📋 코드별 리뷰</span>
            <ul className={`dropdown-menu ${hoveredCode ? 'show' : ''}`}>
              <li><Link to="/CodePage" onClick={() => handleTypeChange("All")}>All</Link></li>
              <li><Link to="/CodePage" onClick={() => handleTypeChange("cpp")}>C++</Link></li>
              <li><Link to="/CodePage" onClick={() => handleTypeChange("python")}>Python</Link></li>
              <li><Link to="/CodePage" onClick={() => handleTypeChange("java")}>Java</Link></li>
            </ul>
          </li>

          <li
            className="dropdown"
            onMouseEnter={() => setHoveredRank(true)}
            onMouseLeave={() => setHoveredRank(false)}
          >
            <span className="dropdown-title">🔥 좋아요 순위</span>
            <ul className={`dropdown-menu ${hoveredRank ? 'show' : ''}`}>
              <li><Link to="/LikeRanking">전체 랭킹</Link></li>
              <li><Link to="/LikeRanking">이번 주 랭킹</Link></li>
              <li><Link to="/LikeRanking">오늘의 랭킹</Link></li>
            </ul>
          </li>

          <li className="coming">추후 추가 예정</li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
