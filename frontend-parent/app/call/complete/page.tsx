import React, { Suspense } from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Image,
  Center,
  IconButton,
  Button,
  Heading,
  Stack,
} from "@chakra-ui/react";
import { Avatar, AvatarGroup } from "@/components/ui/avatar";
import dayjs from "dayjs";
import TransparentButton from "@/components/TransparentButton"; // 클라이언트 컴포넌트 가져오기
import { FaPhone, FaPhoneAlt, FaPhoneSquare } from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";
import { Tag } from "@/components/ui/tag";
import NextImage from "next/image";
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
async function SelectPresent() {
  return (
    <Suspense fallback={<p>분석중입니다.</p>}>
      <Center
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        mx="auto"
        py={8}
        px={8}
      >
        {/* 상단 텍스트 */}
        <Text fontSize="4xl" mb={2} fontWeight="bolder">
          {now} 상담 결과
        </Text>
        <Box
          width="full"
          my="8"
          bgColor="gray.100"
          borderRadius="4xl"
          alignContent="center"
        >
          <Center color="white" fontSize="2xl" fontWeight="bold">
            <NextImage
              width="500"
              height="500"
              alt="d"
              src="/angry.png"
            ></NextImage>
          </Center>
        </Box>
        {/* 서브 텍스트 */}
        <Text fontSize="2xl" my="4" color="green.500" fontWeight="bold">
          280원 적립 완료!
        </Text>
        <Text fontSize="3xl" fontWeight="bold">
          오늘 요약
        </Text>
        <Text fontSize="lg" my="4" color="green.500">
          오늘 요약
        </Text>
        <Text fontSize="3xl" fontWeight="bold">
          오늘 감정
        </Text>
        <Stack direction="row">
          <Tag color="green.500" size="xl">
            <Heading color="green.500">기쁨</Heading>
          </Tag>
          <Tag color="green.500" size="xl">
            <Heading color="green.500">슬픔</Heading>
          </Tag>
          <Tag color="green.500" size="xl">
            <Heading color="green.500">화남</Heading>
          </Tag>
        </Stack>
      </Center>
    </Suspense>
  );
}

export default SelectPresent;
