import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="Header">
      <div className="header_left">
        <h1>Header</h1>
      </div>
      <div className="header_right">
        <Link to="/">홈으로</Link>
        <span className="divider">|</span>
        <Link to="/write">글쓰기</Link>
      </div>
    </header>
  );
};

export default Header;
