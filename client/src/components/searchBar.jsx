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
import { useEffect, useState } from "react";
import axios from "axios";

export const SearchBar = ({ updateProduct }) => {
  const [search, setSearch] = useState("");
  const [product, setProduct] = useState([]);
  const profileSize = useBreakpointValue({
    base: "0px",
    sm: "200px",
    md: "300px",
    lg: "400px",
    xl: "500px",
  });

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:2000/products/search/${search}`
      );
      const searchData = response.data;
      setProduct(searchData);
      updateProduct(searchData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log("Product state update", product);
  }, [product]);

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
        ml={{ md: "5%", lg: "0", xl: "30px" }}
        borderLeft={"1px"}
        borderColor={"gray.300"}
        alignItems={"center"}
        flexDirection={"column"}
      />
      <Center>
        <InputGroup>
          <InputLeftElement ml={"10px"} pointerEvents="none">
            <AiOutlineSearch color="gray.300" />
          </InputLeftElement>
          <InputRightElement>
            <CiFilter color="gray.300" />
          </InputRightElement>
          <Input
            ml={"10px"}
            type="tel"
            bg={"gray.200"}
            placeholder="Search menu..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
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
