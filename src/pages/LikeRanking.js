import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LikeRanking.css'; // 스타일 따로 관리

const LikeRanking = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // 백엔드에서 좋아요 순위 가져오는 API 연결 예정
    // 지금은 임시 데이터 사용
    const mockData = [
      { id: 1, title: 'JavaScript 배열 정렬', author: '유저1', date: '2025-08-05', likes: 34 },
      { id: 2, title: 'React useEffect 완벽정리', author: '유저2', date: '2025-08-04', likes: 28 },
      { id: 3, title: 'Spring Boot 기본기', author: '유저3', date: '2025-08-03', likes: 22 },
    ];

    setItems(mockData);
  }, []);

  const handleClick = (id) => {
    navigate(`/detail`);// 이후 /${id}로 변경해 원하는 페이지로 이동
  };

  return (
    <div className="like-ranking-container">
      <h2>👍 좋아요 순위</h2>
      <ul className="ranking-list">
        {items.map((item, index) => (
          <li key={item.id} className="ranking-item" onClick={() => handleClick(item.id)}>
            <span className="ranking-number">#{index + 1}</span>
            <span className="ranking-title">{item.title}</span>
            <span className="ranking-meta">
              {item.author} | {item.date} | ❤️ {item.likes}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LikeRanking;
