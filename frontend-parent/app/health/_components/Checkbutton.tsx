"use client";

import React from "react";
import { IconButton } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { FaCheck } from "react-icons/fa";
import { fetcher } from "@/utils";

interface Mission {
  id: number;
  name: string;
  point: number;
}
// 투명한 버튼 컴포넌트
const CheckButton: React.FC<{}> = ({}) => {
  const router = useRouter();
  // 가짜 API 호출 함수 (실제 API URL로 대체)
  const onClick = async () => {
    // const res = await fetcher.put("missions/status", {
    //   body: JSON.stringify({
    //     userId: 1,
    //     missionName: mission.name,
    //   }),
    // });
    router.push("health");
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
