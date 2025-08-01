import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:8080/api/login', {
        email,
        password,
      });

      console.log('로그인 성공:', res.data);
      alert('로그인 성공!');
      // 이후 토큰 저장 or 페이지 이동 등 처리
    } catch (err) {
      console.error('로그인 실패:', err);
      alert('로그인 실패! 아이디 또는 비밀번호를 확인해주세요.');
    }
  };

  return (
    <div className="login-wrapper">
    
      <form className="login-container" onSubmit={handleLogin}>
        <h2>UsCoding</h2> 
        <input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
         <Link to ="/" className="forget-id-link">아이디를 잊으셨나요?</Link>
        <Link to ="/" className="forget-password-link">비밀번호를 잊으셨나요?</Link>
        <button type="submit">로그인</button>
      </form>
    </div>
  );
};

export default Login;
