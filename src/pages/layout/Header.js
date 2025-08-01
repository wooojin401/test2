import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import './Header.css';

const Header = ({scrollIntoView, scrollIntoUse, scrollIntoWhy}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
 

  return (
    <>
      <header className="Header">
        <div className="header_left">
          <button className="menu-btn" onClick={() => setSidebarOpen(true)}>☰</button>
          <h1>
            <Link to="/" className="logo-link">UsCoding</Link>
          </h1>
        </div>
        <div className="header_center">
          <Link to="/" className="intro-link" onClick = {scrollIntoView}> <span className="highlight">I</span>ntroduction</Link>
          <Link to="/" className="intro-link" onClick = {scrollIntoUse}> <span className="highlight">H</span>ow to use?</Link>
          <Link to="/" className="intro-link" onClick={scrollIntoWhy}> <span className="highlight">W</span>hy to use?</Link>
        </div>
        <div className="header_right">
          <Link to="/">Home</Link>
          <span className="divider">|</span>
          <Link to="/Write">Write</Link>

          
        </div>
      </header>

      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
     
    </>
  );
};

export default Header;
