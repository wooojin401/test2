import { useState } from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import Sidebar from './Sidebar';
import './Header.css';
import { useCodeContext} from '../../hooks/codeContext';

const Header = ({ scrollIntoView, scrollIntoUse, scrollIntoWhy }) => {
 
  const navigate = useNavigate();
  const { openSidebar } = useCodeContext();

  return (
    <>
      <header className="Header">
        <div className="header_left">
          <button className="menu-btn" onClick={openSidebar}>☰</button>
          <h1>
            <Link to="/" className="logo-link">UsCoding</Link>
          </h1>
        </div>

        <div className="header_center">
          <Link to="/" className="intro-link" onClick={scrollIntoView}><span className="highlight">I</span>ntroduction</Link>
          <Link to="/" className="intro-link" onClick={scrollIntoUse}><span className="highlight">H</span>ow to use?</Link>
          <Link to="/" className="intro-link" onClick={scrollIntoWhy}><span className="highlight">W</span>hy to use?</Link>
        </div>

        <div className="header_right">
        <div className="header-login-container">
          <button className="login-btn" onClick={() => navigate('./login')}>Login</button>
          <span className="divider">|</span>
          <button className="signup-btn" onClick={() => navigate('./register')}>Sign Up</button>
        </div>
          <Link to="/Write">write</Link>
          
        </div>
      </header>
      
    </>
  );
};

export default Header;
