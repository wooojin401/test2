import React from 'react';
import {useState} from 'react';
import {useNavigate } from 'react-router-dom';
import './Home.css';
;
function Home(){
    const navigate = useNavigate();
    return(
        <div>
        <h4>Home 페이지입니다.</h4>
        <button onClick={() => navigate('/write')}>글쓰기</button>
        </div>

    )
}
export default Home;