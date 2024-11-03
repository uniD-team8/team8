"use client";

import React from "react";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { fetcher } from "@/utils";

// 투명한 버튼 컴포넌트
const GoCompleteButton: React.FC<{}> = ({}) => {
  // 가짜 API 호출 함수 (실제 API URL로 대체)
  const router = useRouter();
  const onClick = () => {
    router.push("/call/complete", {});
  };
  return (
    <Button height="7" bgColor="red.500" onClick={onClick}>
      상담 종료하기
    </Button>
  );
};

export default GoCompleteButton;
