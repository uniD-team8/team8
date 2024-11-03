import React from "react";
import styled from "styled-components";
import Main from "../Pages/Main";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
    width: 414px;
    height: 896px;
    margin-left: auto;
    margin-right: auto;
`;

const Data = () => {
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
        <Main/>  
    </Wrapper>
  );
};

export default Data;