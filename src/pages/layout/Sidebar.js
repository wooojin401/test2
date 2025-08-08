import React, { useState } from 'react';
import './Sidebar.css';
import { useCodeContext} from '../../hooks/codeContext';
import { Link } from 'react-router-dom'; 

const Sidebar = () => {
  const [hoveredCode, setHoveredCode] = useState(false);
  const [hoveredRank, setHoveredRank] = useState(false);
  const { sidebarOpen,handleTypeChange ,closeSidebar } = useCodeContext();

  return (
    <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={closeSidebar}>×</button>
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
            <li><Link to="/CodePage" onClick={() => handleTypeChange("All")}>All</Link></li>
            <li><Link to="/CodePage" onClick={() => handleTypeChange("cpp")}>C++</Link></li>
            <li><Link to="/CodePage" onClick={() => handleTypeChange("python")}> Python </Link> </li>
            <li><Link to="/CodePage" onClick={() => handleTypeChange("java")}>Java</Link></li>
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
            <li><a href="/LikeRanking">전체 랭킹</a></li>
            <li><a href="/LikeRanking">이번 주 랭킹</a></li>
            <li><a href="/LikeRanking">오늘의 랭킹</a></li>
          </ul>
        </li>
        <br></br>
        추후추가예정
      </ul>
    </div>
  );
};

export default Sidebar;
