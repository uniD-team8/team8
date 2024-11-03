import {
  Card,
  Box,
  List,
  Text,
  Center,
  Flex,
  Highlight,
  Heading,
  Button,
} from "@chakra-ui/react";
import { LuCircleDashed } from "react-icons/lu";
import {
  ProgressBar,
  ProgressRoot,
  ProgressLabel,
  ProgressValueText,
} from "@/components/ui/progress";
import { AvatarGroup, Avatar } from "@/components/ui/avatar";
import { Image } from "@chakra-ui/react";
import ChangeButton from "@/components/ChangeButton";
import { randomInt } from "crypto";
import CheckButton from "./_components/Checkbutton";
import NextImage from "next/image";

const medicine = {
  id: 1,
  medication: "인슐린 7unit SC",
  isTodayEat: 0,
  userId: 3,
};
const nowProduct = {
  id: 1,
  title: "선물 1",
  points: 100,
  src: "http://artroll.co.kr/wp-content/uploads/2016/01/%EA%B9%80%ED%83%9C%EC%A4%80-%EB%8C%80%EA%B0%80%EC%A1%B1-22-1024x683.jpg",
};

const AImissionList = [
  {
    title: "주변 동네 산책하기",
    point: "100",
  },
  {
    title: "커뮤니티 센터나 노인복지센터 활동 참여",
    point: "100",
  },
  {
    title: "그림 그리기",
    point: "100",
  },
];

const missionListRender = AImissionList.map((mission) => {
  return (
    <List.Item key={mission.title}>
      <List.Indicator asChild color="green.500">
        <LuCircleDashed />
      </List.Indicator>
      <Flex justifyContent="space-between" width="full">
        <Box height="full" my="auto">
          <Text color="black.400">
            {mission.title} +{mission.point}원
          </Text>
        </Box>
        <Box>
          <CheckButton></CheckButton>
        </Box>
      </Flex>
    </List.Item>
  );
});

const Page = () => {
  return (
    <Box className="bg-slate-100" pb="20">
      {AImissionList.length ? (
        <Box width="340px" mx="auto" pt="4">
          <Card.Root width="320px" variant="elevated">
            <Card.Body gap="2">
              <Card.Title>AI 미션</Card.Title>
              <List.Root gap="2" variant="plain" align="center">
                {missionListRender}
              </List.Root>
            </Card.Body>
          </Card.Root>
        </Box>
      ) : (
        ""
      )}
      <Box width="340px" mx="auto" pt="4">
        <Card.Root width="320px" variant="elevated">
          <Card.Body gap="2">
            <Flex justifyContent="space-between" mb="2">
              <Card.Title>약 기록</Card.Title>
              <Card.Title color="green.500">
                100 points {medicine.isTodayEat ? "달성" : "획득 가능"}
              </Card.Title>
            </Flex>
            <Flex>
              <Avatar size="2xl" src="/medicine.png"></Avatar>
              <Flex
                ml="4"
                mr="0"
                height="full"
                width="full"
                my="auto"
                justifyContent="space-between"
              >
                <Heading size="lg">
                  {medicine.medication}
                  <Text>
                    {medicine.isTodayEat ? "투여 완료" : "투여하셨나요?"}
                  </Text>
                </Heading>
                {medicine.isTodayEat ? "" : <CheckButton />}
              </Flex>
            </Flex>
          </Card.Body>
        </Card.Root>
      </Box>

      <Box width="340px" mx="auto" pt="4">
        <Card.Root width="320px" variant="elevated">
          <Card.Body gap="2">
            <Flex justifyContent="space-between">
              <Card.Title>위급상황 알림</Card.Title>
            </Flex>
            <Box>
              <Center>
                <AvatarGroup width="50%">
                  <Avatar size="full" src="/emergency.jpg"></Avatar>
                </AvatarGroup>
              </Center>
            </Box>
            <Heading size="md">
              위급상황 발생시 아래 연락처로 연락드려요. 지민님 전화번호:
              010-4085-9038
            </Heading>
          </Card.Body>
        </Card.Root>
      </Box>
    </Box>
  );
};

export default Page;
