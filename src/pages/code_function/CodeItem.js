import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./CodeItem.css";
import { useCodeContext } from "../../hooks/codeContext";

const CodeItem = ({ onClick, post }) => {
  const navigate = useNavigate();
  //const [category, setCategory] = useState("C++");
  //const { selectedType, handleTypeChange , posts} = useCodeContext();
  const { id, title, likes, category, date, user } = post;


 const print = () => {
    console.log("CodeItem id:", id);
    console.log("CodeItem category:", category);
  };


  return (
    
      <div className="codeSpaceItem" category={category} onClick = {()=>{onClick(id); print();}} >
        {/* <img src={image} alt="Code Thumbnail" className="CodeThumbnail" /> */}
        <div className="codeNumber"><h1>{id}&nbsp;&nbsp;</h1></div>
        <div className="codeContent">
          <span className="codeTitle">{title}</span>
          <span className="codeMeta">{date} | {user.nickname} | ❤️{likes}</span>
        </div>
      </div>
    
  );
};

export default CodeItem;
