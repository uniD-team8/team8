"use client";

import React from "react";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

// 투명한 버튼 컴포넌트
const NavButton: React.FC<{ route: string }> = ({ route }) => {
  // 가짜 API 호출 함수 (실제 API URL로 대체)
  const router = useRouter();
  const onClick = () => {
    router.push(route);
  };
  return (
    <Button
      position="absolute"
      top="0"
      left="0"
      width="100%"
      height="100%"
      background="transparent"
      _hover={{ bg: "rgba(0, 0, 0, 0.1)" }} // Hover 시 약간의 배경색 표시
      onClick={() => onClick()} // 클릭 시 prop으로 받은 함수 호출
    >
      {/* 투명한 버튼이므로 텍스트는 없음 */}
    </Button>
  );
};

export default NavButton;
