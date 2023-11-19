import React, { useEffect, useState } from "react";
import axios from "axios";
import { Text, Box, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const Category = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  const onSelect = (id) => {
    navigate(`/category/${id}`);
    window.location.reload();
  };

  const getCategories = async () => {
    try {
      const result = await axios.get(`http://localhost:2000/categories`);
      setCategories(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);
  return (
    <Flex pl={{ base: "48%", md: "11%", xl: "0px" }} columnGap={"5px"}>
      {categories.map((item) => (
        <Flex
          key={item.id}
          mt={"20px"}
          onClick={() => onSelect(item.id)}
          _hover={{ cursor: "pointer" }}
        >
          <Flex
            py={{ base: "0px", xl: "10px" }}
            px={"6px"}
            rounded={"md"}
            bg={"pink.400"}
            alignItems={"center"}
            textAlign={"center"}
          >
            <Text>{item.category}</Text>
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
};
