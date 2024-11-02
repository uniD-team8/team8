import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
    width: 100vw; /* 부모는 뷰포트 길이로 계산됨 */
    display: flex;
    flex-direction: column;
    justify-content: flex-start; /* 상단 정렬 */
    align-items: flex-start; /* 왼쪽 정렬 */
    margin-top: 10px;
    margin-left: 10px;
`;

const Top = styled.div `
    margin-left: 0px;
    color: #1D853F;
    font-weight: 900;
    font-size: 7vw;
    margin-bottom:0px;
`

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
        <Top>프로젝트명</Top>
    </Wrapper>
  );
};

export default Title;