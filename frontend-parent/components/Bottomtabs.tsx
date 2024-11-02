import { Box, IconButton, Flex } from "@chakra-ui/react";
import { FaHome, FaSearch, FaUser } from "react-icons/fa";

export default function BottomTabs() {
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
        >
          <FaHome />
        </IconButton>
        <IconButton
          aria-label="Search"
          variant="ghost"
          colorScheme="teal"
          size="lg"
        >
          <FaSearch />
        </IconButton>
        <IconButton
          aria-label="Profile"
          variant="ghost"
          colorScheme="teal"
          size="lg"
        >
          <FaUser />
        </IconButton>
      </Flex>
    </Box>
  );
}
