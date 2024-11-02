"use client";

import React from "react";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

// 투명한 버튼 컴포넌트
const GoOnCallButton: React.FC<{}> = ({}) => {
  // 가짜 API 호출 함수 (실제 API URL로 대체)
  const router = useRouter();
  const onClick = () => {
    router.push("/call/onCall");
  };
  return (
    <Button height="7" bgColor="green.500" onClick={onClick}>
      상담원과 연결하기
    </Button>
  );
};

export default GoOnCallButton;