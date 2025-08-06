// src/pages/Detail.js
import React from 'react';
import './Detail.css';

function Detail() {
  const mockData = {
    title: '코드 제목 예시',
    author: '작성자',
    date: '2025-08-06',
    category: 'JavaScript',
    content: '이곳은 코드 설명이나 리뷰 내용을 보여주는 영역입니다.',
    code: `function hello() {
  console.log("Hello, world!");
}`
  };

  return (
    <div className="detail-container">
      <h2>{mockData.title}</h2>
      <p>
         {mockData.author} |  {mockData.date}
      </p>
      <pre className="detail-code-block">
        {mockData.code}
      </pre>
      <div className="detail-description">
        {mockData.content}
      </div>
    </div>
  );
}

export default Detail;
