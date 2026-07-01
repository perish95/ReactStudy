import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Post:React.FC = () => {
  const { id } = useParams<{id:string}>();
  const navigate = useNavigate();


  // 이벤트 핸들러 (이벤트 객체 타입 명시)
  const handleClick = (e:React.MouseEvent<HTMLButtonElement>) => {
    navigate("/");
  }

  return (
    <>
      <h3>POST ID:{id}</h3>
      <button onClick={handleClick}>HOME</button>
    </>
  )
}

export default Post