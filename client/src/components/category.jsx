import React, { useEffect, useState } from "react";
import axios from "axios";

import { AiOutlineStar, AiOutlineCoffee } from "react-icons/ai";
import { CiBurger, CiPizza } from "react-icons/ci";
import { GiSandwich, GiChickenLeg, GiSausage } from "react-icons/gi";
import { RiCake3Line } from "react-icons/ri";
import { Text, Box, Flex } from "@chakra-ui/react";

const iconMap = {
  Star: <AiOutlineStar />,
  Coffee: <AiOutlineCoffee />,
  Burger: <CiBurger />,
  Sandwich: <GiSandwich />,
  Pizza: <CiPizza />,
  Cake: <RiCake3Line />,
  ChickenLeg: <GiChickenLeg />,
  Sausage: <GiSausage />,
};

export const Category = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    try {
      const result = await axios.get(`http://localhost:2000/categories`);
      console.log(result.data);
      setCategories(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);
  return (
    <Flex columnGap={"10px"}>
      {categories.map((item) => (
        <Flex key={item.id} mt={"20px"}>
          <Flex
            px={"8px"}
            rounded={"md"}
            bg={"pink.100"}
            alignItems={"center"}
            textAlign={"center"}
          >
            {iconMap[item.category]}
            <Text>{item.category}</Text>
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
};
