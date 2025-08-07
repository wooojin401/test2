import { useState } from "react";
import CodeItem from "./CodeItem";
import Header from "../layout/Header";
import "./CodePage.css";

const CodeListPage = () => {
  const [selectedType, setSelectedType] = useState("All");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // 사이드바 열림 여부

  const handleSidebarClose = () => setIsSidebarOpen(false);
  const handleSidebarOpen = () => setIsSidebarOpen(true);
  const handleTypeChange = (e) => setSelectedType(e.target.value);

  const codeItems = [
    { id: 1, image: "/fifa.JPG", title: "C++ 예제", type: "cpp", likes: 34 },
    { id: 2, image: "/logo.png", title: "Java 예제", type: "java", likes: 28 },
    { id: 3, image: "/logo192.png", title: "Python 예제", type: "python", likes: 22 },
  ];

  const filteredItems =
    selectedType === "All"
      ? codeItems
      : codeItems.filter((item) => item.type === selectedType);

  return (
    <div className="codePage">
      <Header
        onSidebarOpen={handleSidebarOpen}
        onSidebarClose={handleSidebarClose}
        isSidebarOpen={isSidebarOpen}
        onTypeSelect={setSelectedType}
      />

      <h1>코드 페이지</h1>
      <select id="codeKind" value={selectedType} onChange={handleTypeChange}>
        <option value="All">All</option>
        <option value="cpp">C++</option>
        <option value="python">Python</option>
        <option value="java">Java</option>
      </select>

      <div className="codeList">
        {filteredItems.map((item) => (
          <CodeItem
            key={item.id}
            image={item.image}
            title={item.title}
            likes={item.likes}
            type={item.type}
          />
        ))}
      </div>
    </div>
  );
};

export default CodeListPage;
