import {
  Card,
  Box,
  List,
  Text,
  Center,
  Flex,
  Highlight,
  Button,
  IconButton,
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
import { fetcher } from "@/utils";
import { FiAlertCircle } from "react-icons/fi";
import DialogModal from "./_components/DialogModal";

export const dynamic = "force-dynamic";

interface Product {
  id: number;
  name: string;
  points: number;
  photo: string;
}
const nowProduct: Product = await fetcher
  .get("product/favorite/1", {
    cache: "no-store",
  })
  .json();
// const nowPoint = await fetcher.get("parent/points").json();
const nowPoint = 100;

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
            <NextImage
              src="/seoroheart.png"
              width="100"
              height="50"
              alt="seroheart"
            ></NextImage>
          </Box>
          <DialogModal />
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
                  <Avatar size="full" src={nowProduct.photo}></Avatar>
                </AvatarGroup>
              </Center>
            </Box>
            <Card.Description fontSize="md">
              현재 {nowPoint}원 쌓았어요!
            </Card.Description>
            <Card.Description fontSize="md">
              지민님과 함께 {nowProduct.name} 얻을때까지
              <Highlight query="1700p" styles={{ color: "green.400" }}>
                {`, ${(nowProduct.points - nowPoint).toString()}원 남았어요!`}
              </Highlight>
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
                    <Text color="green.500">+100원</Text>
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
