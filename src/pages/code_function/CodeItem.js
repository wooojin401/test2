import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./CodeItem.css";
import { useCodeContext } from "../../hooks/codeContext";

const CodeItem = ({ likes, image, title, onTypeChange }) => {
  

  
  const navigate = useNavigate();
  const [type, setType] = useState("cpp");

  const today = new Date();
  const formattedDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
  const author = "작성자";

  const handleTypeChange = (event) => {
    const selectedType = event.target.value;
    setType(selectedType);
    onTypeChange(selectedType);
    console.log("코드종류 변경 :", selectedType);
  };

  return (
    <div className="codeSpaceItem" data-type={type} onClick={() => navigate('/detail')}>
      {/* <img src={image} alt="Code Thumbnail" className="CodeThumbnail" /> */}

      <div className="codeContent">
        <span className="codeTitle">{title}</span>
        <span className="codeTitle">{title}</span>
        
        <span className="codeMeta">{formattedDate} | {author} | ❤️{likes}</span>
      </div>
    </div>
  );
};

export default CodeItem;
