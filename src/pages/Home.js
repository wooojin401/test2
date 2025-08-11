import React, { useEffect, useRef } from 'react';
import './Home.css';

function Home({ aboutRef, howUseRef, whyUseRef }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => {
      containerRef.current?.classList.add('loaded');
    }, 0);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="about-container" ref={containerRef}>
      <h1 ref={aboutRef} className="reveal" style={{animationDelay: '0ms'}}>
        ! About <span style={{fontSize:"2.5rem", color:"rgba(255,132,0,0.73)"}}>"UsCoding"</span>이란?
      </h1>

      <p className="reveal" style={{animationDelay: '80ms'}}>
        이 웹은 코드를 평가하는 웹입니다. 자유롭게 코드를 올리고 서로 평가하고 피드백을 주고받는 공간입니다.
      </p>
      <p className="reveal" style={{animationDelay: '120ms'}}>
        유저들이 직접 참여하고 기여하는 유저 친화적 플랫폼이에요.
      </p>

      <img src={"/logo.png"} alt="logo" id="writePage" className="reveal" style={{animationDelay: '160ms'}} />

      <p className="reveal" style={{animationDelay: '200ms'}}>
        <span style={{fontWeight: 'bold'}}>Home</span>페이지의 <span style={{fontWeight: 'bold'}}>글쓰기</span> 기능을 통해 코드를 입력하실 수 있습니다.
      </p>

      <img src={"/writePage.png"} alt="write" id="writePage" ref={howUseRef} className="reveal" style={{animationDelay: '240ms'}} />

      <p className="reveal" style={{animationDelay: '280ms'}}>
        글쓰기 페이지에서 코드를 입력하고 <span style={{fontWeight: 'bold'}}>등록 버튼</span>을 누르면 글이 등록됩니다.
      </p>

      <p className="reveal" style={{animationDelay: '320ms'}}>
        등록된 글은 <span style={{fontWeight: 'bold'}}>Home</span> 페이지에서 확인할 수 있습니다.<br/><br/>
        이제 자유롭게 글을 작성해보아요.
      </p>

      <div className="why-use reveal" ref={whyUseRef} style={{animationDelay: '360ms'}}>
        <p>
          Why to Use? <br/>
          <span id="usCoding">UsCoding</span>에서는 코드를 자유롭게 올리는 오픈 소스 코드 웹사이트입니다. <br/>
          올려진 코드를 사용하는 것, 코드에 대한 피드백을 주고 받는 것 모두 역시 사용자인 여러분들의 자유입니다. 오픈 소스의 취지에 입각하여 여러분의 참여가
          커뮤니티를 생성하고, 분명! 서로 경쟁하며 발전시키는 멋진 공생 관계를 수립할 수 있을 것이라고 믿습니다.
        </p>
      </div>

      <p className="reveal" style={{animationDelay: '400ms'}}>
        <span id="usCoding">UsCoding</span> 은 여러분의 열띤 토론과 참여를 격려합니다!
      </p>

      <img src={"/logo2.png"} alt="debate" id="writePage" className="reveal" style={{animationDelay: '440ms'}} />

      <div id="creator" className="reveal" style={{animationDelay: '480ms'}}>
        <p>
          만든이 : 장우진 / 이승종 <br/>
          <span id="email" style={{whiteSpace: 'nowrap'}}>email : example@example.com / example2@example.com</span>
        </p>
      </div>
    </div>
  );
}

export default Home;
