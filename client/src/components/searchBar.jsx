import {
  Flex,
  InputGroup,
  Input,
  InputLeftElement,
  InputRightElement,
  Spacer,
  useBreakpointValue,
  Center,
} from "@chakra-ui/react";

import { AiOutlineSearch } from "react-icons/ai";
import { CiFilter } from "react-icons/ci";
import { NavProfile } from "./navProfile";

export const SearchBar = () => {
  const profileSize = useBreakpointValue({
    base: "0px",
    sm: "200px",
    md: "300px",
    lg: "400px",
    xl: "500px",
    xl: "",
  });

  return (
    <Flex
      bg={"white"}
      borderBottom={"1px"}
      borderColor={"gray.200"}
      w={"full"}
      h={"full"}
    >
      <Flex
        h={"50px"}
        px={"10px"}
        mt={"10px"}
        borderLeft={"1px"}
        borderColor={"gray.300"}
        alignItems={"center"}
        flexDirection={"column"}
      />
      <Center>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <AiOutlineSearch color="gray.300" />
          </InputLeftElement>
          <InputRightElement>
            <CiFilter color="gray.300" />
          </InputRightElement>
          <Input type="tel" bg={"gray.200"} placeholder="Search menu..." />
        </InputGroup>
      </Center>
      <Spacer />
      <Flex
        h={"50px"}
        px={"10px"}
        mt={"10px"}
        borderRight={"1px"}
        borderColor={"gray.300"}
        alignItems={"center"}
        flexDirection={"column"}
        ml={"10%"}
      />
      <Center width={profileSize}>
        <NavProfile />
      </Center>
    </Flex>
  );
};
