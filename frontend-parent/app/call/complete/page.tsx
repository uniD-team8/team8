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
import ky, { TimeoutError } from "ky";
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
const fetcher = ky.create({
  prefixUrl: "",
  retry: 0,
  timeout: 10000,
  throwHttpErrors: false,
  hooks: {
    beforeError: [
      (error) => {
        if (error instanceof TimeoutError) {
          console.error(error);
        }
        return error;
      },
    ],
  },
});
interface ResData {
  status: string;
  data: {
    emotions: string[];
    missions: string[];
    summary: string[];
  };
}
const res: ResData = await fetcher
  .post("https://frontapi-634993750515.us-central1.run.app/analyze-dialog", {
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      dialog_text: `- 1
    
    AI: 안녕하세요, 선생님! 저는 AI 돌봄 상담사예요. 오늘도 전화 드려서 안부 여쭙고자 연락드렸어요. 요즘은 어떻게 지내세요?
    
    노인: 아, 그래, 고마워. 뭐 요즘 그냥 집에서 쉬고 있지.
    
    AI: 잘 쉬고 계시다니 다행이네요. 최근에 도로에서 조금 넘어지셨다는 이야기를 들었는데요, 그때 다치신 곳은 괜찮으신가요?
    
    노인: 어휴, 그랬지 뭐. 무릎이랑 손목이 좀 아팠는데, 지금은 괜찮아졌어.
    
    AI: 그래도 걱정이 되네요. 넘어지셨을 때 얼마나 놀라셨을까요. 앞으로는 걸으실 때 주변 잘 살피시고 천천히 걸으시는 게 좋을 것 같아요. 요즘은 무릎이랑 손목에 특별히 불편함은 없으신가요?
    
    노인: 요 며칠 좀 쑤시는 거 빼고는 괜찮아. 나이 드니 이젠 다 그렇지 뭐.
    
    AI: 무릎 쑤시고 손목 아픈 건 평소에도 관리가 중요해요. 선생님께서 복용 중이신 관절약도 꾸준히 드시는 게 도움이 되실 거예요. 요즘 약은 잘 챙겨 드시고 계세요?
    
    노인: 아, 그래. 빠뜨리지 않고 챙겨 먹고 있지.
    
    AI: 잘하고 계시네요! 선생님처럼 꼼꼼하게 약 챙겨 드시는 것도 아주 중요해요. 오늘은 식사는 하셨나요?
    
    노인: 아까 아침에 죽 먹었어. 점심은 뭐 해 먹어야 할지 고민 중이야.
    
    AI: 죽을 드셨군요! 점심은 조금 속에 기운이 날 만한 반찬과 함께 드시는 것도 좋을 것 같아요. 혹시 식사하실 때 식욕은 괜찮으세요? 요즘 입맛에 변화가 있으셨나요?
    
    노인: 입맛이 좀 없긴 해. 예전 같진 않네.
    
    AI: 그렇군요. 요즘 입맛이 떨어지신 게 걱정이네요. 영양이 충분히 공급되셔야 기운 내시는데요. 가능하면 좋아하시는 과일이나 간단한 간식을 조금씩 드셔보시는 건 어떠세요?
    
    노인: 맞아, 과일은 먹고 싶더라. 내가 좋아하는 사과라도 사 와야겠어.
    
    AI: 아주 좋은 생각이세요! 사과는 영양도 풍부하고 드시기에도 좋죠. 또 요즘은 밤에 잠은 잘 주무세요?
    
    노인: 음, 좀 뒤척이다 자긴 하는데, 크게 문제는 없어.
    
    AI: 다행이네요. 선생님께서 편안히 주무시는 것도 건강에 아주 중요해요. 요즘 아픈 곳 없이 푹 주무시는 게 정말 큰 도움이 되죠. 그래도 혹시 불편한 점이 있으면 꼭 말씀해 주세요.
    
    노인: 그래, 고마워. 요즘 같은 때에 누가 이렇게 챙겨주는 것도 복이지.
    
    AI: 이렇게 건강에 대해 꾸준히 이야기 나누는 게 저도 참 기쁩니다, 선생님. 늘 건강하시도록 자주 연락드릴게요! 언제든지 도움이 필요하시면 말씀해 주세요.
    
- 2
    
    AI: 선생님, 요즘 날씨가 조금 쌀쌀해졌죠? 이런 날은 예전처럼 산책을 나가시기도 어렵죠. 혹시 요즘 즐겁게 하고 계신 취미가 있으실까요?
    
    노인: 글쎄… 예전에는 바깥도 나가고 친구들도 자주 만났는데, 요즘은 집에만 있으니까 할 게 별로 없네. 뭐, 책을 좀 보긴 하는데 잘 안 읽혀.
    
    AI: 예전에는 친구분들과 만나시고 활기찬 시간 보내셨겠네요. 그리운 시간들이 생각나실 것 같아요. 책도 평소에 좋아하시던 것과 다르게 요즘엔 좀 마음이 안 가시나요?
    
    노인: 맞아, 그렇더라고. 요새는 뭘 해도 예전 같지가 않아. 가끔 마음이 허하고… 그냥 혼자 있는 기분이야.
    
    AI: 아, 선생님. 혼자 계시는 시간이 많아지면 누구나 그럴 수 있죠. 좋아하셨던 취미나 활동을 잠시라도 해보시면 기분 전환에 도움이 될 거예요. 혹시 손쉬운 스트레칭이나 간단한 취미 활동을 해보시는 건 어떨까요? 또 제가 자주 연락드려서 대화 나눌 테니, 필요하실 때 언제든 편하게 말씀해 주세요.
    
    노인: 고마워… 누군가 이렇게 얘기 들어주니까 마음이 조금은 편해지는 것 같아.
    
    AI: 다행이에요, 선생님. 가끔은 이렇게 이야기 나누는 것만으로도 큰 위로가 될 수 있거든요. 선생님의 이야기를 듣고 챙겨 드리는 게 제 기쁨이에요. 좋아하셨던 옛날 사진을 보거나 간단한 그림 그리기도 기분을 밝게 할 수 있대요.
    
    노인: 그림이라… 예전에 꽃을 좋아해서 꽃 그림을 그려본 적이 있어. 그땐 참 좋았는데.
    
    AI: 꽃 그림이라니, 정말 멋진 취미를 갖고 계셨네요! 혹시 여유가 되시면 그때처럼 꽃이나 자연 풍경을 다시 한 번 그려보셔도 좋을 것 같아요. 작은 변화라도 늘 응원하겠습니다.
    
    노인: 네, 그렇게 해볼게. 덕분에 조금 기운이 나는 것 같아.
    
    AI: 저도 기뻐요, 선생님. 다음에 또 연락드릴게요. 오늘도 따뜻하게 잘 지내세요!`,
      callback_url: "ee",
    }),
  })
  .json();
// "data": {
//     "emotions": [
//       "1. 'happy'\n2. 'annoyed'"
//     ],
//     "missions": [
//       "1. \"주변 친구들과 새로운 취미나 관심사를 공유하면서 서로에게 영감을 주세요.\"",
//       "2. \"도시의 문화행사나 공연에 참여하여 새로운 경험을 즐기며 에너지를 얻어보세요.\"",
//       "3. \"가까운 공원이나 자연환경에서 조깅이나 산책을 통해 몸과 마음을 건강하게 유지해보세요.\""
//     ],
//     "summary": [
//       "- \"ww\"이란 메시지를 보내고 싶어하는 것 같다.",
//       "- 상대방의 이해를 받기 위해 더 긴 대화가 필요한 것 같다.",
//       "- 대화가 이어질 것으로 예상된다."
//     ]
//   }

const KeywordConverter = {
  happy: "기쁨",
  satisfied: "만족",
  positive_feeling: "긍정적인 느낌",
  peaceful: "평화",
  stable: "안정감",
  mindful: "마음의 평화",
  depressed: "우울",
  lost: "상실감",
  overwhelmed: "좌절",
  angry: "화남",
  annoyed: "짜증",
  dissatisfied: "불만",
  worried: "걱정",
  tense: "긴장",
  stress: "스트레스",
};

const EmojiMapping = {
  기쁨: "/happy.png",
  만족: "/happy.png",
  "긍정적인 느낌": "/happy.png",
  평화: "/happy.png",
  안정감: "/happy.png",
  "마음의 평화": "/happy.png",
  우울: "/sad.png",
  상실감: "/sad.png",
  좌절: "/sad.png",
  화남: "/angry.png",
  짜증: "/angry.png",
  불만: "/angry.png",
  걱정: "/sad.png",
  긴장: "/sad.png",
  스트레스: "/sad.png",
};

console.log(res.data);

const emotionList: string[] = [];

for (const key in KeywordConverter) {
  for (const emotion2 of res.data.emotions) {
    if (emotion2.includes(key)) {
      emotionList.push(KeywordConverter[key as keyof typeof KeywordConverter]);
    }
  }
}
console.log(emotionList);
const emotionResultsRender = emotionList.map((result) => (
  <Tag color="green.500" size="xl" key={result}>
    <Heading color="green.500">{result}</Heading>
  </Tag>
));

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
              width="250"
              height="250"
              alt="d"
              src={
                EmojiMapping[emotionList[0] as keyof typeof EmojiMapping] ??
                "/happy.png"
              }
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
        <Text fontSize="lg" my="4">
          {res.data.summary}
        </Text>
        <Text fontSize="3xl" fontWeight="bold">
          오늘 감정
        </Text>
        <Stack direction="row">{emotionResultsRender ?? ""}</Stack>
      </Center>
    </Suspense>
  );
}

export default SelectPresent;
