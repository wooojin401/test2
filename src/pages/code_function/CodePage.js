import "./CodePage.css";
import CodeItem from "./CodeItem";
const CodePage = () => {

    return (
        <div className="code-page-container">
            <h1>Code page</h1>
            <label for="codeKind">코드종류</label>
            <select id="codeKind">
                <option value="All">All</option>
                <option value="cpp">C++</option>
                <option value="python">Python</option>
                <option value="java">Java</option>
            </select>
            <div className="codeSpace">
                <h2 id = "pageTitle">codeSpace</h2>
                <div className="code-list">     
                    {/* 제목, 이미지는 입력받고 날짜 , 작성자는 자동입력되게 구현*/}
                    <CodeItem image="fifa.JPG" title="code제목"/>
                    <CodeItem image="logo.png" title="code제목2"/>
                    <CodeItem image="logo2.png" title="code제목3"/>
                </div> 
            </div>
        </div>
    );
}
export default CodePage;