import React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Image,
  Center,
  IconButton,
  Button,
} from "@chakra-ui/react";
import { Avatar, AvatarGroup } from "@/components/ui/avatar";
import dayjs from "dayjs";
import TransparentButton from "@/components/TransparentButton"; // 클라이언트 컴포넌트 가져오기
import { FaPhone, FaPhoneAlt, FaPhoneSquare } from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";
// 상품 데이터

const nowProduct = {
  id: 1,
  title: "선물 1",
  points: 100,
  src: "http://artroll.co.kr/wp-content/uploads/2016/01/%EA%B9%80%ED%83%9C%EC%A4%80-%EB%8C%80%EA%B0%80%EC%A1%B1-22-1024x683.jpg",
};
const products = [
  {
    id: 1,
    title: "선물 1",
    points: 100,
    src: "http://artroll.co.kr/wp-content/uploads/2016/01/%EA%B9%80%ED%83%9C%EC%A4%80-%EB%8C%80%EA%B0%80%EC%A1%B1-22-1024x683.jpg",
  },
  {
    id: 2,
    title: "선물 2",
    points: 200,
    src: "http://artroll.co.kr/wp-content/uploads/2016/01/%EA%B9%80%ED%83%9C%EC%A4%80-%EB%8C%80%EA%B0%80%EC%A1%B1-22-1024x683.jpg",
  },
  {
    id: 3,
    title: "선물 3",
    points: 300,
    src: "http://artroll.co.kr/wp-content/uploads/2016/01/%EA%B9%80%ED%83%9C%EC%A4%80-%EB%8C%80%EA%B0%80%EC%A1%B1-22-1024x683.jpg",
  },
];

const now = dayjs().format("MM월 DD일");
function SelectPresent() {
  return (
    <Box
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      mx="auto"
      py={8}
      px={8}
    >
      {/* 상단 텍스트 */}
      <Text fontSize="4xl" mb={2} fontWeight="bolder">
        {now}
      </Text>

      {/* 서브 텍스트 */}
      <Text fontSize="3xl" fontWeight="bold">
        오늘의 하루를 AI 상담원과
      </Text>
      <Text fontSize="3xl" fontWeight="bold">
        이야기해보세요.
      </Text>
      <Text fontSize="lg" mt="4" color="green.500">
        분석된 데이터는 자녀분과 직접 공유되지 않아요.
      </Text>
      <Text fontSize="lg" mt="1" color="green.500" fontWeight="bold">
        전화 완료시 250 포인트가 지급돼요.
      </Text>
      <Box
        width="full"
        my="8"
        height="40"
        bgColor="green.500"
        borderRadius="4xl"
        alignContent="center"
      >
        <Center color="white" fontSize="2xl" fontWeight="bold">
          <Text mr="2">
            <FaPhoneFlip />
          </Text>
          상담원과 전화하기
        </Center>
      </Box>
    </Box>
  );
}

export default SelectPresent;
