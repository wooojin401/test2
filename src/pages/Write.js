import { useState} from 'react';
import { useNavigate } from 'react-router-dom';

function Write() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('default');
  const handleSubmit = (e) => {
    e.preventDefault(); // 폼 기본 동작 막기
    
  };
  
  return (
   
    <div style={{ padding: '20px' }}>
      <h2>뒤로 가기</h2>
      <button onClick={() => navigate(-1)} style={{ marginBottom: '20px' }}>뒤로가기</button>
      <h2>글 작성</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>제목: </label><br />
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ width: '100%', padding: '8px' }}
            placeholder="제목을 입력하세요"
            required
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>내용: </label><br />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            style={{ width: '100%', height: '150px', padding: '8px' }}
            placeholder="내용을 입력하세요"
            required
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>카테고리: </label><br />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={{ padding: '8px' }}
            required
          >
            <option value="C++">C++</option>
            <option value="Java">Java</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Python">Python</option>
          </select>
        </div>

        <button type="submit" style={{ padding: '10px 20px' }}>
          등록
        </button>
        
        
      </form>
    </div>
  );
}

export default Write;
