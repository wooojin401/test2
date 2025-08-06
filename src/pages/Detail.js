import React, { useState } from 'react';
import './Detail.css';

function Detail() {
  const mockData = {
    id:1,
    title: '코드 제목 예시',
    author: '작성자',
    date: '2025-08-06',
    category: 'JavaScript',
    content: '이곳은 코드 설명이나 리뷰 내용을 보여주는 영역입니다.',
    code: `function hello() {
  console.log("Hello, world!");
}`,
likes:42
  };

  const [comments,setComments] = useState([
    {
      id: 1,
      author: '👨‍💻유저1',
      content: '정말 쓸데없는 코드네요!',
      date: '2025-08-06'
    },
    {
      id: 2,
      author: '👨‍💻유저2',
      content: '설명이 안되어 있어서 이해가 쉬웠어요!',
      date: '2025-08-06'
    }
  ]);

  return (
    <div className="detail-container">
      <h1>{mockData.title}</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
  <span>👨‍💻 {mockData.author}</span>
  <span>📆 {mockData.date} ❤️ {mockData.likes}</span>
</div>

      <pre className="detail-code-block">{mockData.code}</pre>
      <div className="detail-description">{mockData.content}</div>

      <div className="detail-comments">
        <h3>댓글</h3>
        {comments.length > 0 ? (
          <ul>
            {comments.map((comment) => (
              <li key={comment.id}>
                <p><strong>{comment.author}</strong> ({comment.date})</p>
                <p>{comment.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>아직 댓글이 없습니다.</p>
        )}
      </div>
      <input type="text" className="comment-input" placeholder="댓글을 입력해주세요" //value={comments} onChange={(e) => setComments(e.target.value)}
/>
    </div>
  );
}

export default Detail;
