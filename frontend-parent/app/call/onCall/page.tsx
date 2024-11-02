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
import GoCompleteButton from "../_components/GoComplete";
// 상품 데이터

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
      <Box
        width="full"
        my="8"
        height="40"
        bgColor="red.500"
        borderRadius="4xl"
        alignContent="center"
      >
        <Center color="white" fontSize="2xl" fontWeight="bold">
          <Text mr="2">
            <FaPhoneFlip />
          </Text>
          <GoCompleteButton />
        </Center>
      </Box>
    </Box>
  );
}

export default SelectPresent;
