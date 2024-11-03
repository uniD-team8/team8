import React from "react";
import { ChakraProvider, Box, Text, Image, Center } from "@chakra-ui/react";
import { Avatar, AvatarGroup } from "@/components/ui/avatar";
import TransparentButton from "@/components/TransparentButton"; // 클라이언트 컴포넌트 가져오기
import { fetcher } from "@/utils";
// 상품 데이터
interface Product {
  id: number;
  name: string;
  points: number;
  photo: string;
}

async function SelectPresent() {
  const nowProduct: Product = await fetcher.get("product/favorite/1").json();
  // const nowProduct = {
  //   id: 1,
  //   title: "메가커피 아메리카노",
  //   points: 3500,
  //   src: "/coffee.jpeg",
  // };
  // const products = [
  //   {
  //     id: 1,
  //     title: "메가커피 아메리카노",
  //     points: 3500,
  //     src: "/coffee.jpeg",
  //   },
  //   {
  //     id: 2,
  //     title: "배스킨라빈스 파인트",
  //     points: 7300,
  //     src: "/baskin.jpg",
  //   },
  //   {
  //     id: 3,
  //     title: "돼지바",
  //     points: 500,
  //     src: "/pigbar.jpg",
  //   },
  // ];

  const products: Product[] = await fetcher.get("product/list").json();

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
      <Box>
        <Text fontSize="2xl" color="gray.500">
          현재 선택: {nowProduct.name}
        </Text>
        <Text fontSize="2xl" color="gray.500">
          목표 포인트: {nowProduct.points}
        </Text>
      </Box>
      <Box width="full">
        <Center>
          <AvatarGroup width="50%" minHeight="60">
            <Avatar size="full" name="Coffee" src={nowProduct.photo} />
          </AvatarGroup>
        </Center>
      </Box>
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
            src={product.photo}
            alt={product.name}
            boxSize="100px"
            objectFit="cover"
            mr={4}
          />

          {/* 상품 정보 (오른쪽) */}
          <Box>
            <Text fontSize="lg" fontWeight="bold">
              {product.name} 선택
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
