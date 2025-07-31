import React from 'react';
import {useState} from 'react';
import {useNavigate } from 'react-router-dom';
import './Home.css';
function Home(){
    const navigate = useNavigate();
    
    return(
        <div>
        <h4>모두의 코딩 홈페이지-미구현상태-</h4>
        <button onClick={() => navigate('/write')}>글쓰기페이지로 이동</button>
        
        </div>
         
    )
}
export default Home;