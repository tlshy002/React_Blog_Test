/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let post = '강남 우동 맛집';
  let [arr, bb] = useState(['남자 코트 추천', '안녕', '하세요']);
  let [좋아요, 좋아요변경] = useState(0);

  const 함수 = () => {
    console.log(1);
    좋아요변경(좋아요+1);
  }
  let copy = arr;
  
  // state는 바꾸려는값이 이전과 같으면 재렌더링을 하지않음
  // copy[0] = '여자 코트 추천'; 
  // const arr = [...copy];
  // console.log(copy);

  return (
    <div className="App">
      <div className="black-nav">
        <h3 style={{ color : "pink"}}> React Blog </h3>
      </div>      

      <div className="list">
        <h4>{ copy[0] } <span onClick={ 함수 }>👍</span> {좋아요} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ arr[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ arr[2] }</h4>
        <p>2월 17일 발행</p>
      </div>
      
      <button onClick={ () => {bb(['바보','ㄴㄴ','jj'])} }>버튼임</button>
      <button onClick={ ()=>{ 
      let copy = [...arr];
      copy[0] = '여자 코트 추천';
      bb(copy)
    } }> 수정버튼 </button>
    </div>
  );
}

export default App;
