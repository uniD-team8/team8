"use client";

import React from "react";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

// 투명한 버튼 컴포넌트
interface TransparentButtonProps {
  productId: number;
}

const TransparentButton: React.FC<TransparentButtonProps> = ({ productId }) => {
  // 가짜 API 호출 함수 (실제 API URL로 대체)
  const router = useRouter();
  const sendSelectionToBackend = async (productId: number) => {
    try {
      const response = await fetch("https://your-api-endpoint.com/selection", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ selectedItemId: productId }),
      });

      if (!response.ok) {
        throw new Error("API 요청 실패");
      }

      console.log("백엔드에 성공적으로 데이터 전송:", productId);
      router.push("/");
    } catch (error) {
      console.error("API 요청 중 오류 발생:", error);
      router.push("/");
    }
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
      onClick={() => sendSelectionToBackend(productId)} // 클릭 시 prop으로 받은 함수 호출
    >
      {/* 투명한 버튼이므로 텍스트는 없음 */}
    </Button>
  );
};

export default TransparentButton;
