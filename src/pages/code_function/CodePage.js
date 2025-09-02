import { useEffect, useState } from "react";
import CodeItem from "./CodeItem";
import "./CodePage.css";
import { useCodeContext} from "../../hooks/codeContext"
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const CodePage = () => {
  const { selectedType, handleTypeChange, posts, setPosts } = useCodeContext();
  const navigate = useNavigate();
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    // 컴포넌트가 처음 렌더링될 때 서버에 요청 보냄
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/getPost");
        setPosts(res.data);   // ✅ 서버가 보낸 JSON은 res.data 안에 들어있음
        console.log(res.data.category);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

      fetchData();
  }, []);
  const codeItems = [
    { id: 1, image: "/fifa.JPG", title: "C++ 예제", type: "cpp", likes : 34 },
    { id: 2, image: "/logo.png", title: "Java 예제", type: "java", likes: 28 },
    { id: 3, image: "/logo192.png", title: "Python 예제", type: "python", likes: 22 }
  ];

  const filteredItems = selectedType === "All" 
  ? posts
  : posts.filter(post => post.category === selectedType)

  return (
    <div className="codePage">
        <h1>코드 페이지</h1>
      <select id="codeKind" value = {selectedType} onChange={(e)=> handleTypeChange(e.target.value)}>
        <option value="All">All</option>
        <option value="cpp">C++</option>
        <option value="python">Python</option>
        <option value="java">Java</option>
      </select>
    
      {/* 필터링된 항목만 렌더링 */}
      <div className="codeList">
  {filteredItems.map((post) => (
    <CodeItem
      key={post.id}
      post={post}
      onClick={(id)=>  navigate(`/detail/${id}`)}
    />  
  ))}
    </div>

    </div>
  );
};

export default CodePage;
