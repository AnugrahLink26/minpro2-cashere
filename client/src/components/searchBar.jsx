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
    <Box bg={"white"}>
      <Flex
        bg={"white"}
        borderBottom={"1px"}
        borderColor={"gray.200"}
        w={{ md: "80vw", lg: "full" }}
        h={"full"}
      >
        <Stack spacing={4} mt={{ md: "3%", lg: "0.6%" }} ml={"2%"}>
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
          px={"10px"}
          mt={{ md: "12px", lg: "5px" }}
          alignItems={"center"}
          flexDirection={"column"}
          ml={"10%"}
        >
          <Text mt={"5%"} fontSize={"xs"}>
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
          mt={{ md: "3%", lg: "0.7%" }}
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
          mt={{ md: "3%", lg: "0.7%" }}
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
          mt={"0.3%"}
          borderRight={"1px"}
          borderColor={"gray.300"}
        ></Box>

        <Box mt={{ md: "1.5%", lg: "0.5%" }} ml={{ md: "2%", lg: "8%" }}>
          <Flex alignItems={"center"}>
            <Image src={iconPink} w={"40px"} h={"40px"} rounded={"full"} />
            <Flex ml={"10px"} flexDirection={"column"}>
              <Text fontWeight={"bold"}>Gulugulu</Text>
              <Text fontSize={"sm"}>Mon, 12 Jan</Text>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};
