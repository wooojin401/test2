import { useEffect, useState } from "react";
import CodeItem from "./CodeItem";
import "./CodePage.css";
import { useCodeContext} from "../../hooks/codeContext"
import axios from "axios";

const CodeListPage = () => {
  const { selectedType, handleTypeChange, posts,loading, err, setPosts, setErr, setLoading } = useCodeContext();
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/posts");
        setPosts(res.data);       
      } catch (e) {
        setErr(e.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

   if (loading) return <div>로딩중…</div>;
  if (err) return <div>에러: {err}</div>;

  const codeItems = posts.map(post => ({
    id: post.id,
    type: post.category,
    code: post.code,
    content: post.content,
    date: post.date,
    likes: post.likes,
    title: post.title,
    user_id: post.user_id,
  }));

  
  // const filteredItems = selectedType === "All"
  //   ? codeItems
  //   : codeItems.filter(item => item.type === selectedType);

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
        {codeItems.map(item => (
          <CodeItem
            key={item.id}
            title={item.title}
            likes={item.likes}
            type={item.type}
            onTypeChange={() => {}} // 지금은 필요 없음
          />
        ))}
      </div>
    </div>
  );
};

export default CodeListPage;
