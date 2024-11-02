import React from "react";
import {
  ChakraProvider,
  Box,
  Button,
  Avatar,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@chakra-ui/react";

function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  return (
    <Box p={4}>
      <Button onClick={openDialog}>선물 보내기</Button>

      <DialogRoot open={isOpen} onOpenChange={(e) => setIsOpen(e.open)} onExitComplete={chang}>
        <DialogContent>
          <DialogHeader>선물 보내기</DialogHeader>
          <DialogBody>
            {/* Avatar */}
            <Box display="flex" flexDirection="column" alignItems="center">
              <Avatar size="xl" name="User Avatar" />
              {/* Horizontal lines */}
              <Box mt={4} w="100%" h="2px" bg="gray.200" />
              <Box mt={2} w="100%" h="2px" bg="gray.200" />
              <Box mt={2} w="100%" h="2px" bg="gray.200" />
              <Box mt={2} w="100%" h="2px" bg="gray.200" />
            </Box>
          </DialogBody>
          <DialogFooter>
            <Button onClick={closeDialog}>닫기</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Box>
  );
}

export default App;
