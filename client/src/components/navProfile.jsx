import {
  Box,
  Text,
  Flex,
  Avatar,
  Center,
  Button,
  Spacer,
  useBreakpointValue,
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { FiPlus } from "react-icons/fi";
import React from "react";
import RegisterCashier from "./registerCashier";

export function NavProfile() {
  const user = useSelector((state) => state.user.value);
  const token = localStorage.getItem("token");

  const profileWidth = useBreakpointValue({
    base: "0px",
    sm: "200px",
    md: "300px",
    lg: "300px",
    xl: "400px",
    "2xl": "500px",
  });
  const modalSize = useBreakpointValue({
    base: "full",
    sm: "sm",
    md: "md",
    lg: "lg",
    xl: "xl",
  });

  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);

  return (
    <Box alignItems={"center"} w={profileWidth}>
      {token ? (
        <Flex mx={"4%"}>
          <Flex>
            <Avatar
              size={"md"}
              name={user.username}
              ref={user.urlPhotoProfile}
            />
            <Stack ml={"10px"}>
              <Text fontSize={"sm"} fontWeight={"bold"}>
                {user.username}
              </Text>
              <Text fontSize={"sm"}>{user.isAdmin ? "Admin" : "Cashier"}</Text>
            </Stack>
          </Flex>
          <Spacer />
          <Flex alignItems={"center"}>
            <Button
              bg={"#DB1783"}
              color={"white"}
              variant="solid"
              leftIcon={<FiPlus />}
              onClick={onOpen}
              _hover={{
                bg: "#FFD4E9",
                color: "#DB1783",
              }}
            >
              Cashier
            </Button>
            <Modal
              finalFocusRef={finalRef}
              isOpen={isOpen}
              onClose={onClose}
              size={modalSize}
              isCentered
            >
              <ModalOverlay />
              <ModalContent bg={"white"}>
                <ModalCloseButton />
                <ModalBody>
                  <RegisterCashier onClose={onClose} />
                </ModalBody>
              </ModalContent>
            </Modal>
          </Flex>
        </Flex>
      ) : (
        <Center>
          <Avatar size={"md"} />
          <Text ml={"10px"} fontSize={"sm"} fontWeight={"bold"}>
            Not logged in
          </Text>
        </Center>
      )}
    </Box>
  );
}
