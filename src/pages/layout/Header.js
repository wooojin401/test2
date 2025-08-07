import { Link, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import "./Header.css";

const Header = ({
  scrollIntoView,
  scrollIntoUse,
  scrollIntoWhy,
  onSidebarOpen,
  onSidebarClose,
  isSidebarOpen,
  onTypeSelect
}) => {
  const navigate = useNavigate();

  return (
    <>
      <header className="Header">
        <div className="header_left">
          <button className="menu-btn" onClick={onSidebarOpen}>☰</button>
          <h1><Link to="/" className="logo-link">UsCoding</Link></h1>
        </div>

        <div className="header_center">
          <Link to="/" onClick={scrollIntoView}>Introduction</Link>
          <Link to="/" onClick={scrollIntoUse}>How to use?</Link>
          <Link to="/" onClick={scrollIntoWhy}>Why to use?</Link>
        </div>

        <div className="header_right">
          <button onClick={() => navigate("/login")}>Login</button>
          <Link to="/Write">write</Link>
        </div>
      </header>

      {/* 🔥 isSidebarOpen → isOpen에 꼭 연결! */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={onSidebarClose}
        onTypeSelect={onTypeSelect}
      />
    </>
  );
};

export default Header;
