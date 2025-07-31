import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="Header">
      <div className="header_left">
        <h1>모두의 코딩</h1>
      </div>
      <div className="header_right">
        <Link to="/">Home</Link>
        <span className="divider">|</span>
        <Link to="/About">About</Link>
      </div>
    </header>
  );
};

export default Header;
