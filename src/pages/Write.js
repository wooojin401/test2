import { useState } from 'react';

import './Write.css'; // 꼭 import 해주세요

function Write() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('default');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // 제출 처리
  };
  
  return (
    <div className="write-container">
      <h2>글 작성</h2>
      <form onSubmit={handleSubmit}>
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
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="내용을 입력하세요"
            style={{ width: '100%', height: '300px' }}
            required
          />
        </div>
        <div className="write-form-group">
          <label>설명:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="내용을 입력하세요"
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
            <option value="Python">Python</option> {/* 오타 수정 */}
          </select>
        </div>
        <button className="write-reset-btn" onClick={() => window.history.back()}>
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