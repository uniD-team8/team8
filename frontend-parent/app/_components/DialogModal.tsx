"use client";

import { Button } from "@/components/ui/button";
import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Heading, IconButton, Text } from "@chakra-ui/react";
import { FiAlertCircle } from "react-icons/fi";
import NextImage from "next/image";

const DialogModal = () => {
  return (
    <DialogRoot>
      <DialogTrigger asChild>
        <IconButton
          variant="outline"
          size="sm"
          color="green.500"
          bgColor="white"
        >
          <FiAlertCircle></FiAlertCircle>
        </IconButton>
      </DialogTrigger>
      <DialogContent justifyContent="center">
        <DialogHeader>
          <DialogTitle>자녀분이 사진을 보내왔어요!</DialogTitle>
        </DialogHeader>
        <DialogBody>
          <NextImage
            src="/child.jpeg"
            alt="child"
            width={200}
            height={200}
          ></NextImage>
          <Heading size="3xl">내 인생 최고의 순간, UniDthon</Heading>
        </DialogBody>
      </DialogContent>
    </DialogRoot>
  );
};

export default DialogModal;
