import {
  Box,
  Text,
  Flex,
  Stack,
  InputGroup,
  Input,
  InputRightElement,
  Image,
} from "@chakra-ui/react";

import { AiOutlineSearch } from "react-icons/ai";
import iconPink from "../assets/iconPink.jpg";

export const MobileHeader = () => {
  return (
    <Flex bg={"#F1F3F4"} flexDirection={"column"} mx={"20px"} mt={"30px"}>
      <Flex>
        <Box>
          <Text fontWeight={"semibold"} fontSize={"1.2rem"}>
            Your Cash, Your Way,
          </Text>
          <Text fontWeight={"bold"} fontSize={"2rem"}>
            {" "}
            Cashere Today!
          </Text>
        </Box>
        <Box ml={"55px"} mt={"10px"}>
          <Image w={"45px"} rounded={"full"} src={iconPink} />
        </Box>
      </Flex>
      <Stack spacing={4}>
        <InputGroup>
          <InputRightElement>
            <AiOutlineSearch color="gray.300" fontSize={"25px"} />
          </InputRightElement>
          <Input
            type="tel"
            bg={"gray.200"}
            placeholder="Search food here"
            rounded={"xl"}
          />
        </InputGroup>
      </Stack>
    </Flex>
  );
};
