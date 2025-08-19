import { useEffect, useState } from 'react';
import { usePrompt } from '../hooks/usePrompt';
import { useCodeContext } from '../hooks/codeContext';
import axios from 'axios';
import './Write.css';
import { useNavigate } from 'react-router-dom';

function Write() {
  const navigate = useNavigate();

  const today = new Date();
  const formattedDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(
    today.getDate()
  ).padStart(2, '0')}`;

  const { userInfo } = useCodeContext();

  const initialCategory = 'C++';

  const [title, setTitle] = useState('');
  const [code, setCode] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState(initialCategory);
  const [date] = useState(formattedDate); // YYYY-MM-DD
  const [likes] = useState(0);

  const [isDirty, setIsDirty] = useState(false);
  const [submitted, setSubmitted] = useState(false); // 제출 완료

  // ✅ useEffect들보다 위에서 호출 (이펙트 실행 순서 보장)
  usePrompt('작성 중인 내용이 사라질 수 있습니다. 정말 이동하시겠습니까?', isDirty && !submitted);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/posts', {
        userId: userInfo?.id,
        title,
        code,
        content,
        category,
        date,
        likes,
      });

      alert('제출 완료!');
      setIsDirty(false);
      setSubmitted(true); // 다음 렌더에서 프롬프트 비활성화
    } catch (err) {
      console.error('에러 발생:', err);
      alert('등록 실패');
    }
  };

  // 제출 완료 후에만 이동 (프롬프트 비활성화가 반영된 다음)
  useEffect(() => {
    if (submitted) navigate('/');
  }, [submitted, navigate]);

  useEffect(() => {
    setIsDirty(
      !!title ||
      !!code ||
      !!content ||
      category !== initialCategory
    );
  }, [title, code, content, category]);

  return (
    <div className="write-container">
      <h2>글 작성</h2>
      <form onSubmit={handleSubmit}>
        <div className="write-form-group">
          <label>제목:</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="제목을 입력하세요"
            required
          />
        </div>

        <div className="write-form-group">
          <label>코드:</label>
          <textarea
            value={code}
            name="code"
            onChange={(e) => setCode(e.target.value)}
            placeholder="코드를 입력하세요"
            style={{ width: '100%', height: '300px' }}
            required
          />
        </div>

        <div className="write-form-group">
          <label>설명:</label>
          <textarea
            value={content}
            name="content"
            onChange={(e) => setContent(e.target.value)}
            placeholder="설명을 입력하세요"
            required
          />
        </div>

        <div className="write-form-group">
          <label>카테고리:</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="C++">C++</option>
            <option value="Java">Java</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Python">Python</option>
          </select>
        </div>

        <div className="write-form-group">
          <label>날짜:</label>
          <input type="text" value={formattedDate} readOnly />
        </div>

        <button
          type="reset"
          className="write-reset-btn"
          onClick={() => window.history.back()}
        >
          취소
        </button>

        <button type="submit" className="write-submit-btn">
          등록
        </button>
      </form>
    </div>
  );
}

export default Write;
