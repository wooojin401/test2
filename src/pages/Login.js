import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';
import { useCodeContext } from '../hooks/codeContext';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const {setUserInfo} = useCodeContext();
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const params = new URLSearchParams();
      params.append('username', email);
      params.append('password', password);
      const res = await axios.post( 
        'http://localhost:8080/login',
        params,
      {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        withCredentials: true 
      }
    );
      console.log('로그인 성공입니다.:', res.data);
      console.log(res.status);
      alert('로그인 성공!');
      // 이후 토큰 저장 or 페이지 이동 등 처리
      navigate('/'); // 로그인 성공 후 홈으로 이동

      try {
        const userInfo = await axios.get('http://localhost:8080/api/me', {
          withCredentials: true
        });
        console.log('사용자 정보:', userInfo.data);
        setUserInfo(userInfo.data);
      } catch (err) {
        console.error('사용자 정보 조회 실패:', err);
      }
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

        {/* 링크 영역 */}
        <div className="login-links">
          <Link to="/register" className="register-link">회원가입</Link>
          <div className="right-links">
            <Link to="/" className="forget-id-link">아이디를 잊으셨나요?</Link>
            <Link to="/" className="forget-password-link">비밀번호를 잊으셨나요?</Link>
          </div>
        </div>

        <button type="submit">로그인</button>
      </form>
    </div>
  );  
};

export default Login;
