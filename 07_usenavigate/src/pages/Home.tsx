import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home:React.FC = () => {
  // useNavigate: 프로그래밍적으로 이동할 때 사용할 함수 반환
  const navigate = useNavigate();


  // 이벤트 핸들러 (이벤트 객체 타입 명시)
  const handleClick = (e:React.MouseEvent<HTMLButtonElement>) => {
    // 코드 진행 후 이동이 필요할 때 (예: 로그인 후 이동)
    // data-post-id 값 꺼내기
    const postId = e.currentTarget?.dataset.postId;
    // postId를 이용한 요청
    navigate(`/posts/${postId}`);
  }

  return (
    <>
      <h3>Home</h3>
      <button onClick={handleClick} data-post-id="1">
        <span>POST-1로 이동</span>
      </button>
      <button onClick={handleClick} data-post-id="2">
        <span>POST-2로 이동</span>
      </button>
    </>
  )
};

export default Home;