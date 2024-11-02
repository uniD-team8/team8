"use client";
import { Box, IconButton, Flex } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { FaHome, FaHeart, FaUser, FaPhone } from "react-icons/fa";
import React from "react";

const BottomTabs: React.FC<{}> = ({}) => {
  const router = useRouter();
  const onClickMain = () => {
    router.push("/");
  };
  return (
    <Box
      position="fixed"
      bottom="0"
      left="0"
      right="0"
      bg="white"
      borderTopWidth="1px"
      borderColor="gray.300"
      shadow="md"
      zIndex="10"
    >
      <Flex justify="space-around" py={2}>
        <IconButton
          aria-label="Home"
          variant="ghost"
          colorScheme="teal"
          size="lg"
          onClick={onClickMain}
        >
          <FaHome />
          처음
        </IconButton>
        <IconButton
          aria-label="Health"
          variant="ghost"
          colorScheme="teal"
          size="lg"
          onClick={() => router.push("/health")}
        >
          <FaHeart />
          건강
        </IconButton>
        <IconButton
          aria-label="Call"
          variant="ghost"
          colorScheme="teal"
          size="lg"
          onClick={() => router.push("/call")}
        >
          <FaPhone />
          안심콜
        </IconButton>
      </Flex>
    </Box>
  );
};

export default BottomTabs;
