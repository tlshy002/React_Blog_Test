/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [arr, bb] = useState(['ㄷ남자 코트 추천', 'ㄱ안녕', 'ㄴ하세요']);
  let [좋아요, 좋아요변경] = useState(0);

  const 함수 = () => {
    console.log(1);
    좋아요변경(좋아요+1);
  }
  
  // state는 바꾸려는값이 이전과 같으면 재렌더링을 하지않음
  // 따라서 새 배열을 생성하고 ...전개연산자로 복사해야해서 사용해야함
  const copy = [...arr];
  copy[0] = 'ㄷ여자 코트 추천'; 

  return (
    <div className="App">
      <div className="black-nav">
        <h3 style={{ color : "pink"}}> React Blog </h3>
      </div>      

      <div className="list">
        <h4>{ arr[0] } <span onClick={ 함수 }>👍</span> {좋아요} </h4>
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
      
      <button onClick={ ()=>{ bb(copy)} }> 수정버튼 </button>
      <button onClick={ ()=>{ 
        let copy = [...arr];
        copy.sort();
        bb(copy)}}> 정렬버튼 </button>

      <Modal></Modal>
      <Test/>

      {}


    </div>
  );
}

const Modal = () => {
  return(
    <div className="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
    </div>
  )
}
const Test = () => {
  return(
    <>
      <div>
        <h3>컴포넌트 테스트입니다.</h3>
      </div>
    </>
  )
}



export default App;
