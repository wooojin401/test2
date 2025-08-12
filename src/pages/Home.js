import React, { useEffect, useRef } from 'react';
import './Home.css';

function Home({ aboutRef, howUseRef, whyUseRef }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => containerRef.current?.classList.add('loaded'), 0);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="about-container" ref={containerRef}>
      {/* Hero: 글(왼) + 이미지(오) */}
      <section className="hero reveal" style={{ animationDelay: '0ms' }}>
  <div className="hero__inner">
    <div className="hero__left">
      <h1 ref={aboutRef}>
        What is <span style={{ fontSize:"2.5rem", color:"rgba(255,132,0,0.73)" }}>"UsCoding"</span>?
      </h1>
      <p>이 웹은 코드를 평가하는 웹입니다. 자유롭게 코드를 올리고 서로 평가하고 피드백을 주고받는 공간입니다.</p>
      <p>유저들이 직접 참여하고 기여하는 유저 친화적 플랫폼이에요.</p>
      <p><b>Home</b> 페이지의 <b>글쓰기</b> 기능을 통해 코드를 입력하실 수 있습니다.</p>
      <p>다른 유저들의 코드를 보고 평가하고 배워갈 수 있습니다.</p>
    </div>
    <div className="hero__right">
      <img src="/logo.png" alt="UsCoding 소개" />
    </div>
  </div>
</section>


      {/* How to use: 설명(왼) + 스크린샷(오) */}
      {/* How: 가운데 설명 + 카드 3개 */}
<section className="how reveal" ref={howUseRef} style={{ animationDelay: '160ms' }}>
  <div className="how__wrap">
    <div className="how__text">
      <h2>How to use</h2>
      <p>코드를 업로드하고 피드백을 받아보세요.</p>
      <p>좋아요로 유용한 코드를 추천할 수 있어요.</p>
      <p>언어별로 코드 리뷰를 손쉽게 찾아봅니다.</p>
    </div>

    <div className="how__grid">
      <figure className="how__card">
        <div className="how__thumb">
          <img src="/글작성png.png" alt="글 작성" />
        </div>
        <figcaption>글 작성</figcaption>
      </figure>

      <figure className="how__card">
        <div className="how__thumb">
          <img src="/좋아요png.png" alt="좋아요" />
        </div>
        <figcaption>좋아요</figcaption>
      </figure>

      <figure className="how__card">
        <div className="how__thumb">
          <img src="/코드png.png" alt="코드 리뷰" />
        </div>
        <figcaption>코드 리뷰</figcaption>
      </figure>
    </div>
  </div>
</section>


      {/* Why use */}
      <section className="why reveal" ref={whyUseRef} style={{ animationDelay: '260ms' }}>
  <div className="why__wrap">
    <h2>Why to Use?</h2>
    <p className="why__desc">
      <span id="usCoding">UsCoding</span>은 코드를 자유롭게 공유하고 피드백을 주고받을 수 있는 
      오픈 소스 코드 커뮤니티입니다.  
      여러분의 참여가 더 나은 개발 문화를 만들어갑니다.
    </p>

    <div className="why__grid">
      <div className="why__card">
        <div className="why__icon">💬</div>
        <h3>자유로운 피드백</h3>
        <p>누구나 의견을 나누고 코드 개선 아이디어를 제안할 수 있습니다.</p>
      </div>

      <div className="why__card">
        <div className="why__icon">🚀</div>
        <h3>빠른 성장</h3>
        <p>다양한 언어와 프로젝트를 통해 실력을 향상시킬 수 있습니다.</p>
      </div>

      <div className="why__card">
        <div className="why__icon">🤝</div>
        <h3>협업과 네트워킹</h3>
        <p>전 세계 개발자들과 교류하며 협력할 수 있는 기회를 제공합니다.</p>
      </div>
    </div>
  </div>
</section>

      <section className="closing reveal" style={{ animationDelay: '320ms' }}>
        <p><span id="usCoding">UsCoding</span> 은 여러분의 열띤 토론과 참여를 격려합니다!</p>
        <img src="/logo2.png" alt="debate" className="closing__image" />
      </section>

      <div id="creator" className="reveal" style={{ animationDelay: '380ms' }}>
        <p>
          만든이 : 장우진 / 이승종 <br />
          <span id="email" style={{ whiteSpace: 'nowrap' }}>
            email : example@example.com / example2@example.com
          </span>
        </p>
      </div>
    </div>
  );
}

export default Home;
