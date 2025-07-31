import { useNavigate } from "react-router-dom";

const Edit = () => {
    const navigate = useNavigate();
  return (
    <div>
      <h2>글 수정</h2>
      {/* 수정할 글의 내용이 들어갈 부분 */}
      <button onClick={() => navigate('/')}>삭제하기</button>
    </div>
  );
};

export default Edit;
