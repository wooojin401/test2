import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Register.css'; // Login.css랑 거의 동일하게 써도 됩니다.

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    nickname: '',
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    try {
      const res = await axios.post('http://localhost:8080/api/register', {
        email: form.email,
        password: form.password,
        nickname: form.nickname,
      });

      console.log('회원가입 성공:', res.data);
      alert('회원가입이 완료되었습니다. 로그인해주세요!');
      navigate('/login');
    } catch (err) {
      console.error('회원가입 실패:', err);
      alert('회원가입 실패! 입력 내용을 확인해주세요.');
    }
  };

  return (
    <div className="register-wrapper">
      <form className="register-container" onSubmit={handleRegister}>
        <h2>UsCoding</h2>

        <input
          type="email"
          name="email"
          placeholder="이메일"
          value={form.email}
          onChange={onChange}
          required
        />
        <input
          type="text"
          name="nickname"
          placeholder="닉네임"
          value={form.nickname}
          onChange={onChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="비밀번호"
          value={form.password}
          onChange={onChange}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="비밀번호 확인"
          value={form.confirmPassword}
          onChange={onChange}
          required
        />

        {/* 링크 영역: 왼쪽은 로그인, 오른쪽은 아이디/비번 찾기 */}
        <div className="register-links">
          <Link to="/login" className="to-login-link">로그인으로 가기</Link>
          <div className="right-links">
            <Link to="/" className="forget-id-link">아이디를 잊으셨나요?</Link>
            <Link to="/" className="forget-password-link">비밀번호를 잊으셨나요?</Link>
          </div>
        </div>

        <button type="submit">회원가입</button>
      </form>
    </div>
  );
};

export default Register;
