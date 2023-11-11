import {
  Box,
  Text,
  Flex,
  Stack,
  Image,
  InputGroup,
  Input,
  InputLeftElement,
  InputRightElement,
  Button,
  Divider
} from "@chakra-ui/react";

import { AiOutlineSearch } from "react-icons/ai";
import { CiFilter } from "react-icons/ci";
import { GrPowerReset } from "react-icons/gr";
import { useSelector } from "react-redux";

export const SearchBar = () => {
  const user = useSelector((state) => state.user.value);

  return (
    <Flex
      bg={"white"}
      borderBottom={"1px"}
      borderColor={"gray.200"}
      w={"full"}
      h={"full"}
    >
      <Stack spacing={4} mt={"1.2%"} ml={"2%"}>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <AiOutlineSearch color="gray.300" />
          </InputLeftElement>
          <InputRightElement>
            <CiFilter color="gray.300" />
          </InputRightElement>
          <Input type="tel" bg={"gray.200"} placeholder="Search menu..." />
        </InputGroup>
      </Stack>

      <Flex
        h={"50px"}
        px={"10px"}
        mt={"10px"}
        borderRight={"1px"}
        borderColor={"gray.300"}
        alignItems={"center"}
        flexDirection={"column"}
        ml={"10%"}
      >
        <Text mt={"10%"} fontSize={"xs"}>
          Order No.
        </Text>
        <Text fontSize={"sm"} fontWeight={"bold"}>
          #14802
        </Text>
      </Flex>
    </Flex>
  );
};
