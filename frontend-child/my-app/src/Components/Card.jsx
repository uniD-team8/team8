import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
    background: #F5F5F5;
    width: 90vw; /* 부모는 뷰포트 길이로 계산됨 */
    margin-top: 10px;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center; /* 상단 정렬 */
    align-items: center;
    border-radius: 20px;
`;

const Title = () => {
//   const navigate = useNavigate();

//   const goToWrite = () => {
//     navigate("/Write"); // 게시글 등록 페이지로 이동
//   };

//   const boxVariants = {
//     ini: { opacity: 0, y: 50 },
//     inView: { opacity: 1, y: 0 },
//     port: { once: false },
//   };

  return (
    <Wrapper>

    </Wrapper>
  );
};

export default Title;