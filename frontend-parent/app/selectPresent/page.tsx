import React from "react";
import { ChakraProvider, Box, Text, Image, Center } from "@chakra-ui/react";
import { Avatar, AvatarGroup } from "@/components/ui/avatar";
import TransparentButton from "@/components/TransparentButton"; // 클라이언트 컴포넌트 가져오기
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
        선물 선택하기
      </Text>

      {/* 서브 텍스트 */}
      <Center>
        <Box>
          <Text fontSize="2xl" color="gray.500">
            현재 선택: {nowProduct.title}
          </Text>
          <Text fontSize="2xl" color="gray.500">
            목표 포인트: {nowProduct.points}
          </Text>
        </Box>
      </Center>
      <Box width="full">
        <Center>
          <AvatarGroup width="50%" minHeight="60">
            <Avatar
              size="full"
              name="Coffee"
              src="https://gdimg.gmarket.co.kr/4162144715/still/280?ver=1727422494"
            />
          </AvatarGroup>
        </Center>
      </Box>
      {/* 상품 리스트 렌더링 */}
      {products.map((product) => (
        <Box
          key={product.id}
          mx="auto"
          height="100px"
          bg="gray.100"
          mb={4}
          display="flex"
          alignItems="center"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          position="relative" // 투명한 버튼을 덮기 위해 position 설정
        >
          <Image
            src={product.src}
            alt={product.title}
            boxSize="100px"
            objectFit="cover"
            mr={4}
          />

          {/* 상품 정보 (오른쪽) */}
          <Box>
            <Text fontSize="lg" fontWeight="bold">
              {product.title} 선택
            </Text>
            <Text color="gray.500">{product.points} 포인트</Text>
          </Box>

          {/* 투명한 버튼 추가 */}
          <TransparentButton productId={product.id} />
        </Box>
      ))}
    </Box>
  );
}

export default SelectPresent;
