import React from 'react';
import {useState} from 'react';
import {useNavigate } from 'react-router-dom';
import './Home.css';
function Home(){
    return (
    <div className="about-container">
      <h1>! About <span style={{fontSize : "2.5rem",color : "rgba(255, 132, 0, 0.73)"}}>"UsCoding"</span>이란? </h1>
      <p>이 웹은 코드를 평가하는 웹입니다. 자유롭게 코드를 올리고 서로 평가하고 피드백을 주고받는 공간입니다.</p>
      <p> 유저들이 직접 참여하고 기여하는 유저 친화적 플랫폼이에요.</p>

      <img src={"/logo.png"} alt="logo" id="writePage"  />

      <p> <span style={{fontWeight: 'bold'}}>Home</span>페이지의 <span style={{fontWeight: 'bold'}}>글쓰기</span> 기능을 통해 코드를 입력하실 수 있습니다.</p>
      <img src={"/writePage.png"} alt="write" id="writePage" />
      <p>글쓰기 페이지에서 코드를 입력하고 <span style={{fontWeight: 'bold'}}>등록 버튼</span>을 누르면 글이 등록됩니다.</p>

      <p>등록된 글은 <span style={{fontWeight: 'bold'}}>Home</span> 페이지에서 확인할 수 있습니다.<br/> <br/>
      이제 자유롭게 글을 작성해보아요. </p>

      <p> <span style={{fontWeight: 'bold', fontSize: '1.5rem', color: "rgba(42, 229, 9, 0.83)"}}>UsCoding</span> 은 여러분의 열띤 토론과 참여를 격려합니다!</p>
      <img src={"/logo2.png"} alt="debate" id="writePage" />
      <div id="creator">
        <p>만든이 : 장우진 / 이승종 <br/>
        <span id="email" style={{whiteSpace : 'nowrap'}}>email : example@example.com / example2@example.com</span>
        </p>
        

      </div>
    </div>
  );
}
export default Home;