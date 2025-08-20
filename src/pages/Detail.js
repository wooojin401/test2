import React, { useContext, useState } from 'react';
import './Detail.css';
import { useCodeContext } from '../hooks/codeContext';

import { useParams } from 'react-router-dom';

function Detail() {

  const { posts } = useCodeContext();
  const { id } = useParams();
  const getDetail = (id) => {
    const post = posts.find((post) => post.id === parseInt(id));
    if(!post) return null;  

    return {
      id:post.id,
      title:post.title,
      author:post.author,
      date:post.date,
      category:post.category,
      content:post.content,
      code:post.code,
      likes:post.likes
    };
  };
  const detail = getDetail(id);
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
      content: '정말 유용한 코드네요!',
      date: '2025-08-06'
    },
    {
      id: 2,
      author: '👨‍💻유저2',
      content: '3번째 라인에 대해 설명해주실 수 있나요?',
      date: '2025-08-06'
    }
  ]);

  return (
    <div className="detail-container">
      <h1>{detail.title}</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
  <span>👨‍💻 {detail.author}</span>
  <span>📆 {detail.date} ❤️ {detail.likes}</span>
</div>

      <pre className="detail-code-block">{detail.code}</pre>
      <div className="detail-description">{detail.content}</div>

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
