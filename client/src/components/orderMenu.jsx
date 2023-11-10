import burger from "../assets/burger.jpg";
import {
  AiOutlineStar,
  AiOutlineCoffee,
  AiOutlineArrowDown,
} from "react-icons/ai";
import { CiBurger, CiPizza, CiBowlNoodles } from "react-icons/ci";
import { Image, Text, Box, Flex, Grid, GridItem } from "@chakra-ui/react";

export const OrderMenu = () => {
  return (
    <Box bg={"#F1F3F4"} pt={"20px"} h={"full"}>
      <Box w={{ base: "100%", md: "95%" }} mx={"10px"}>
        <Flex columnGap={"2%"} justifyContent={"center"}>
          <Box
            px={"10px"}
            py={"2px"}
            bg={"white"}
            rounded={"md"}
            display={"flex"}
            alignItems={"center"}
            columnGap={"4px"}
          >
            <AiOutlineStar />
            Most Ordered
          </Box>
          <Box
            px={"10px"}
            py={"2px"}
            bg={"white"}
            rounded={"md"}
            display={"flex"}
            alignItems={"center"}
            columnGap={"4px"}
          >
            <AiOutlineCoffee />
            Coffee
          </Box>
          <Box
            px={"10px"}
            py={"2px"}
            bg={"white"}
            rounded={"md"}
            display={"flex"}
            alignItems={"center"}
            columnGap={"4px"}
          >
            <CiBurger />
            Burger
          </Box>
          <Box
            px={"10px"}
            py={"2px"}
            bg={"white"}
            rounded={"md"}
            display={"flex"}
            alignItems={"center"}
            columnGap={"4px"}
          >
            <CiPizza />
            Italian
          </Box>
          <Box
            px={"10px"}
            py={"2px"}
            bg={"white"}
            rounded={"md"}
            display={"flex"}
            alignItems={"center"}
            columnGap={"4px"}
          >
            <CiBowlNoodles />
            Bowl Noodles
          </Box>
        </Flex>
        <Flex mt={"4%"} justifyContent={"space-between"}>
          <Box>Order Menu</Box>
          <Box display={"flex"} alignItems={"center"} columnGap={"3px"}>
            <Text fontSize={"15px"}>Cheaper</Text>
            <AiOutlineArrowDown />
          </Box>
        </Flex>
        <Grid
          templateColumns={{
            base: "repeat(2,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(4, 1fr)",
          }}
          ml={{ base: "7%", md: "7%", lg: "5%" }}
          mr={{ base: "20%", md: "0" }}
        >
          <GridItem
            as={"Box"}
            colSpan={1}
            mt={"20px"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            bg={"white"}
            w={"170px"}
            pt={"10px"}
            rounded={"md"}
            shadow={"2xl"}
            pb={"8px"}
          >
            <Box w={"150px"} display={"flex"} justifyContent={"center"}>
              <Image src={burger} w={"full"} rounded={"md"} h={"100px"} />
            </Box>
            <Box
              w={"150px"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"start"}
            >
              <Text fontWeight={"bold"}>Burger</Text>
              <Text fontSize={"xs"}>Our delicious pure beef patty.</Text>
              <Text fontWeight={"bold"} color={"orange"}>
                $5.48
              </Text>
            </Box>
          </GridItem>
          <GridItem
            as={"Box"}
            colSpan={1}
            mt={"20px"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            bg={"white"}
            w={"170px"}
            pt={"10px"}
            rounded={"md"}
            shadow={"2xl"}
            pb={"8px"}
          >
            <Box w={"150px"} display={"flex"} justifyContent={"center"}>
              <Image src={burger} w={"full"} rounded={"md"} h={"100px"} />
            </Box>
            <Box
              w={"150px"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"start"}
            >
              <Text fontWeight={"bold"}>Burger</Text>
              <Text fontSize={"xs"}>Our delicious pure beef patty.</Text>
              <Text fontWeight={"bold"} color={"orange"}>
                $5.48
              </Text>
            </Box>
          </GridItem>
          <GridItem
            as={"Box"}
            colSpan={1}
            mt={"20px"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            bg={"white"}
            w={"170px"}
            pt={"10px"}
            rounded={"md"}
            shadow={"2xl"}
            pb={"8px"}
          >
            <Box w={"150px"} display={"flex"} justifyContent={"center"}>
              <Image src={burger} w={"full"} rounded={"md"} h={"100px"} />
            </Box>
            <Box
              w={"150px"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"start"}
            >
              <Text fontWeight={"bold"}>Burger</Text>
              <Text fontSize={"xs"}>Our delicious pure beef patty.</Text>
              <Text fontWeight={"bold"} color={"orange"}>
                $5.48
              </Text>
            </Box>
          </GridItem>
          <GridItem
            as={"Box"}
            colSpan={1}
            mt={"20px"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            bg={"white"}
            w={"170px"}
            pt={"10px"}
            rounded={"md"}
            shadow={"2xl"}
            pb={"8px"}
          >
            <Box w={"150px"} display={"flex"} justifyContent={"center"}>
              <Image src={burger} w={"full"} rounded={"md"} h={"100px"} />
            </Box>
            <Box
              w={"150px"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"start"}
            >
              <Text fontWeight={"bold"}>Burger</Text>
              <Text fontSize={"xs"}>Our delicious pure beef patty.</Text>
              <Text fontWeight={"bold"} color={"orange"}>
                $5.48
              </Text>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};
