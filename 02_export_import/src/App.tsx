import './App.css'
import React from 'react';
// ----- default export 처리하기
// 중괄호없이 import
// import 시 이름 변경 가능
import Post from "./components/Post";
import Member from "./components/User"; // 컴포넌트 이름을 Member로 수정 -> 권장하지는 않음

// ----- named export 처리하기
// 중괄호 안에 import
// 내보낸 이름과 동일한 이름으로 import
// 이름을 바꾸고 싶으면 as 키워드 활용
import {PI} from "./api/calculate";
import {getArea} from "./api/calculate";
import {feature as feat} from "./api/calculate";

//function 대신 최신 문법
const App:React.FC = () => {
  return (
    <>
    <Post />
    <Member />
    <div>{PI}</div>
    <div>{getArea(1)}</div>
    <div>{feat.add(1,2)}</div>
    <div>{feat.sub(3,2)}</div>
    </>
  )
}

export default App
