import "./CodePage.css";
const CodeItem =  ({image, title}) => {
    const today = new Date();
    const date = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2,'0')}-${String(today.getDate()).padStart(2,'0')}`;
    const author = "작성자"; 
    return (
     
        <div className="codeSpaceItem">
            <pre>
                <img src={image} alt = "CodeThumbnail" id="CodeThumbnail"/> 
                <span id="codeTitle">    {title}</span>
                <span id="writeInfo"> {date}|{author}</span>
            </pre>
        </div>
    );
    }
    export default CodeItem;