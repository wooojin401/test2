import { useState } from "react";
import CodeItem from "./CodeItem";
import "./CodePage.css";
import { useCodeContext} from "../../hooks/codeContext"

const CodeListPage = () => {
  const { selectedType, handleTypeChange } = useCodeContext();

  const codeItems = [
    { id: 1, image: "/fifa.JPG", title: "C++ 예제", type: "cpp", likes : 34 },
    { id: 2, image: "/logo.png", title: "Java 예제", type: "java", likes: 28 },
    { id: 3, image: "/logo192.png", title: "Python 예제", type: "python", likes: 22 }
  ];

  // 필터링
  const filteredItems = selectedType === "All"
    ? codeItems
    : codeItems.filter(item => item.type === selectedType);

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
        {filteredItems.map(item => (
          <CodeItem
            key={item.id}
            image={item.image}
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
