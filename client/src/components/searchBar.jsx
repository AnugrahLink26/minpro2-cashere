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
} from "@chakra-ui/react";

import iconPink from "../assets/iconPink.jpg";

import { AiOutlineSearch } from "react-icons/ai";
import { CiFilter } from "react-icons/ci";
import { GrPowerReset } from "react-icons/gr";
import { LuPencilLine } from "react-icons/lu";
export const SearchBar = () => {
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
      <Button
        bg={"white"}
        border={"1px"}
        borderColor={"gray.300"}
        columnGap={"10px"}
        mt={"1.4%"}
        ml={"2%"}
      >
        <GrPowerReset />
        <Text fontWeight={"normal"} fontSize={"sm"}>
          Reset Order
        </Text>
      </Button>
      <Button
        bg={"white"}
        border={"1px"}
        borderColor={"gray.300"}
        columnGap={"10px"}
        mt={"1.4%"}
        ml={"1%"}
      >
        <LuPencilLine />
        <Text fontWeight={"normal"} fontSize={"sm"}>
          Create a note
        </Text>
      </Button>

      <Box
        w={"24px"}
        h={"8vh"}
        mt={"0.9%"}
        borderRight={"1px"}
        borderColor={"gray.300"}
      ></Box>

      <Box mt={"1.1%"} ml={"8%"}>
        <Flex alignItems={"center"}>
          <Image src={iconPink} w={"40px"} h={"40px"} rounded={"full"} />
          <Flex ml={"10px"} flexDirection={"column"}>
            <Text fontWeight={"bold"}>Gulugulu</Text>
            <Text fontSize={"sm"}>Mon, 12 Jan</Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};
