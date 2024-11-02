"use client";

import React from "react";
import { IconButton } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { FaCheck } from "react-icons/fa";

// 투명한 버튼 컴포넌트
const CheckButton: React.FC<{}> = ({}) => {
  // 가짜 API 호출 함수 (실제 API URL로 대체)
  const onClick = () => {
    // api 호출
    console.log("api 호출 완료!");
  };
  return (
    <IconButton
      aria-label="Home"
      variant="ghost"
      colorScheme="teal"
      size="lg"
      borderColor="green.500"
      onClick={onClick}
      bgColor="green.500"
      color="white"
      px="2"
    >
      완료
    </IconButton>
  );
};

export default CheckButton;
