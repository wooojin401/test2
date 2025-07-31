import React from 'react';
import {useState} from 'react';
import {useNavigate } from 'react-router-dom';
import './Home.css';
function Home(){
    const navigate = useNavigate();
    
    return(
        <div>
        <h4>모두의 코딩</h4>
        <button onClick={() => navigate('/write')}>글쓰기</button>
        <button onClick={() => navigate('/edit')}> 수정하기</button>
        
        </div>
         
    )
}
export default Home;