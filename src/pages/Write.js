import { useEffect, useState } from 'react';
import { usePrompt } from '../hooks/usePrompt';
import axios from 'axios';

import './Write.css';

function Write() {
  const [title, setTitle] = useState('');
  const [code, setCode] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('default');
  const [isDirty, setIsDirty] = useState(false);
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await axios.post('http://localhost:8080/api/posts', {
      title,
      code,
      content,
      category,
    });
    alert('제출 완료!');
    setIsDirty(false);
  } catch (err) {
    console.error('에러 발생:', err);
    alert('등록 실패');
  }
};

  useEffect(() => {
    setIsDirty(
      !!title || !!code || !!content || category !== 'default'
    );
  }, [title, code, content, category]);

  usePrompt('작성 중인 내용이 사라질 수 있습니다. 정말 이동하시겠습니까?', isDirty);

  return (
    <div className="write-container">
      <h2>글 작성</h2>
      <form onSubmit={handleSubmit}>
        {/* 제목 */}
        <div className="write-form-group">
          <label>제목:</label>
          <input
            type="text"
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

        <button type="reset" className="write-reset-btn" onClick={() => window.history.back()}>
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
