import {
  Card,
  Box,
  List,
  Text,
  Center,
  Flex,
  Highlight,
  Button,
} from "@chakra-ui/react";
import { LuAlertCircle, LuCircleDashed } from "react-icons/lu";
import {
  ProgressBar,
  ProgressRoot,
  ProgressLabel,
  ProgressValueText,
} from "@/components/ui/progress";
import { AvatarGroup, Avatar } from "@/components/ui/avatar";
import { Image } from "@chakra-ui/react";
import ChangeButton from "@/components/ChangeButton";
import NextImage from "next/image";
import NavButton from "./_components/NavButton";

const nowProduct = {
  id: 1,
  title: "선물 1",
  points: 100,
  src: "http://artroll.co.kr/wp-content/uploads/2016/01/%EA%B9%80%ED%83%9C%EC%A4%80-%EB%8C%80%EA%B0%80%EC%A1%B1-22-1024x683.jpg",
};

const missionList = [
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

const missionListRender = missionList.map((mission) => {
  return (
    <List.Item key={mission.title} bgColor="gray.100" p="2" borderRadius="xl">
      <List.Indicator asChild color="green.500">
        <LuCircleDashed />
      </List.Indicator>
      <Flex justifyContent="space-between" width="full">
        <Box>
          <Text color="black.400">{mission.title}</Text>
        </Box>
        <Box>
          <Text color="green.500">+{mission.point}</Text>
        </Box>
      </Flex>
    </List.Item>
  );
});

const Page = () => {
  return (
    <Box className="bg-slate-100" pb="20">
      <Box width="340px" mx="auto" pt="4">
        <Flex justifyContent="space-between">
          <Box>
            <Text fontSize="xl" color="grey.100" fontFamily="hakgyoansim">
              <NextImage
                src="/seoroheart.png"
                width="100"
                height="50"
                alt="seroheart"
              ></NextImage>
            </Text>
          </Box>
        </Flex>
      </Box>
      <Box width="340px" mx="auto" pt="4">
        <Card.Root width="320px" variant="elevated">
          <Card.Body gap="2">
            <Card.Title>영숙님과 지민님 가족</Card.Title>
            <Card.Description>
              <Image src="/parents.jpg" />
            </Card.Description>
          </Card.Body>
        </Card.Root>
      </Box>

      <Box width="340px" mx="auto" pt="4">
        <Card.Root width="320px" variant="elevated">
          <Card.Body gap="2">
            <Flex justifyContent="space-between">
              <Card.Title>목적 달성률</Card.Title>
              <ChangeButton />
            </Flex>
            <Box>
              <Center>
                <AvatarGroup width="50%">
                  <Avatar size="full" src="/coffee.jpeg"></Avatar>
                </AvatarGroup>
              </Center>
            </Box>
            <Card.Description fontSize="md">
              <Text>현재 1900p 쌓았어요!</Text>
              <Text>
                지민님과 함께 메가커피 아메리카노 얻을때까지
                <Highlight query="1700p" styles={{ color: "green.400" }}>
                  , 1700p 남았어요!
                </Highlight>
              </Text>
            </Card.Description>
            <ProgressRoot
              colorPalette="green"
              striped
              max={3600}
              min={0}
              value={1900}
            >
              <ProgressLabel />
              <ProgressValueText />
              <ProgressBar />
            </ProgressRoot>
          </Card.Body>
        </Card.Root>
      </Box>
      <Box width="340px" mx="auto" pt="4">
        <Card.Root width="320px" variant="elevated">
          <Card.Body gap="2">
            <Card.Title>활동 추천</Card.Title>
            <List.Root gap="2" variant="plain" align="center">
              {missionListRender}
              <List.Item key="Pharmacy" bgColor="gray.100" p="2">
                <List.Indicator asChild color="green.500">
                  <LuCircleDashed />
                </List.Indicator>
                <Flex justifyContent="space-between" width="full">
                  <Box>
                    <Text color="black.400">약 기록하기</Text>
                  </Box>
                  <Box>
                    <Text color="green.500">+100</Text>
                  </Box>
                </Flex>
                <NavButton route="/health"></NavButton>
              </List.Item>
            </List.Root>
          </Card.Body>
        </Card.Root>
      </Box>
    </Box>
  );
};

export default Page;
