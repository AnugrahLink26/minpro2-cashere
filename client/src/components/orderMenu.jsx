import burger from "../assets/burger.jpg";
import {
  AiOutlineStar,
  AiOutlineCoffee,
  AiOutlineArrowDown,
} from "react-icons/ai";
import { CiBurger, CiPizza } from "react-icons/ci";
import { RiCake3Line } from "react-icons/ri";
import { GiHotDog, GiSandwich, GiChickenLeg, GiSausage } from "react-icons/gi";
import { Image, Text, Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import { DropBar } from "./dropbar";
import { MobileHeader } from "./mobileHeader";
import { motion } from "framer-motion";

export const OrderMenu = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Box
          w={"80%"}
          ml={"10%"}
          mb={"2%"}
          zIndex={20}
          display={{ base: "block", md: "none" }}
          position={"fixed"}
          bottom={"0"}
        >
          <DropBar />
        </Box>
        <Box display={{ base: "block", md: "none" }}>
          <MobileHeader />
        </Box>
        <Box bg={"#F1F3F4"} pt={"20px"} h={"full"}>
          <Box
            w={{ base: "90%", md: "100%", lg: "95%" }}
            mx={{ base: "4%", md: "auto" }}
          >
            <Flex
              h={"35px"}
              mt={"20px"}
              w={{ base: "100%", md: "100%", lg: "80%" }}
              mx={"auto"}
              ml={{ md: "7%", lg: "auto" }}
              columnGap={"2%"}
              justifyContent={"center"}
              overflowX={"auto"}
              overflowY={"hidden"}
              sx={{
                "&::-webkit-scrollbar": {
                  display: "none",
                },
                scrollbarWidth: "none",
              }}
            >
              <Box
                ml={{ base: "120%", md: "32%" }}
                px={"3px"}
                bg={"pink.100"}
                rounded={"xl"}
                display={"flex"}
                alignItems={"center"}
              >
                <AiOutlineStar />
                <Text w={"100px"}>Most Ordered</Text>
              </Box>
              <Box
                bg={"pink.100"}
                rounded={"xl"}
                display={"flex"}
                alignItems={"center"}
              >
                <AiOutlineCoffee />
                Coffee
              </Box>
              <Box
                px={"3px"}
                bg={"pink.100"}
                rounded={"xl"}
                display={"flex"}
                alignItems={"center"}
              >
                <CiBurger />
                Burger
              </Box>
              <Box
                px={"3px"}
                bg={"pink.100"}
                rounded={"xl"}
                display={"flex"}
                alignItems={"center"}
              >
                <GiSandwich />
                Sandwich
              </Box>
              <Box
                px={"3px"}
                bg={"pink.100"}
                rounded={"xl"}
                display={"flex"}
                alignItems={"center"}
              >
                <CiPizza />
                Pizza
              </Box>
              <Box
                px={"3px"}
                bg={"pink.100"}
                rounded={"xl"}
                display={"flex"}
                alignItems={"center"}
              >
                <RiCake3Line />
                Muffin
              </Box>
              <Box
                px={"3px"}
                bg={"pink.100"}
                rounded={"xl"}
                display={"flex"}
                alignItems={"center"}
              >
                <GiHotDog />
                Hotdog
              </Box>
              <Box
                px={"3px"}
                bg={"pink.100"}
                rounded={"xl"}
                display={"flex"}
                alignItems={"center"}
              >
                <GiChickenLeg />
                Chicken
              </Box>
              <Box
                px={"3px"}
                bg={"pink.100"}
                rounded={"xl"}
                display={"flex"}
                alignItems={"center"}
                mr={"5px"}
              >
                <GiSausage />
                Sausage
              </Box>
            </Flex>
            <Flex
              mt={"4%"}
              ml={{ md: "30px", lg: "0" }}
              w={{ base: "355px", md: "full", lg: "full" }}
              justifyContent={"space-between"}
            >
              <Box>Order Menu</Box>
              <Box display={"flex"} alignItems={"center"} columnGap={"3px"}>
                <Text fontSize={"15px"}>Cheaper</Text>
                <AiOutlineArrowDown />
              </Box>
            </Flex>
            <Grid
              templateColumns={{
                base: "repeat(2,1fr)",
                md: "repeat(3,1fr)",
                lg: "repeat(4, 1fr)",
                xl: "repeat(6, 1fr)"
              }}
              ml={{ base: "5%", md: "1%", lg: "2%" }}
              mr={{ base: "20%", md: "0" }}
              mt={{ base: "15%", md: "0%" }}
              columnGap={{ base: "6%", md: "8px" }}
            >
              <GridItem
                as={"Box"}
                position={"relative"}
                colSpan={1}
                mt={{ base: "0", md: "20px" }}
                mb={{ base: "30%", md: "0" }}
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                bg={"white"}
                w={{ md: "160px", lg: "170px" }}
                pt={{ base: "0", md: "10px" }}
                rounded={{ base: "3xl", md: "md" }}
                shadow={"2xl"}
                pb={"8px"}
              >
                <Box w={"150px"} display={"flex"} justifyContent={"center"}>
                  <Image
                    src={burger}
                    position={{ base: "absolute", md: "block" }}
                    top={{ base: "-10", md: "2.5" }}
                    w={{ base: "100px", md: "140px", lg: "150px" }}
                    rounded={{ base: "full", md: "md" }}
                    h={"100px"}
                  />
                </Box>
                <Box
                  w={{ base: "130px", md: "140px", lg: "150px" }}
                  mt={{ base: "40%", md: "60%" }}
                  pb={"10px"}
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
                position={"relative"}
                colSpan={1}
                mt={{ base: "0", md: "20px" }}
                mb={{ base: "30%", md: "0" }}
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                bg={"white"}
                w={{ md: "160px", lg: "170px" }}
                pt={{ base: "0", md: "10px" }}
                rounded={{ base: "3xl", md: "md" }}
                shadow={"2xl"}
                pb={"8px"}
              >
                <Box w={"150px"} display={"flex"} justifyContent={"center"}>
                  <Image
                    src={burger}
                    position={{ base: "absolute", md: "block" }}
                    top={{ base: "-10", md: "2.5" }}
                    w={{ base: "100px", md: "140px", lg: "150px" }}
                    rounded={{ base: "full", md: "md" }}
                    h={"100px"}
                  />
                </Box>
                <Box
                  w={{ base: "130px", md: "140px", lg: "150px" }}
                  mt={{ base: "40%", md: "60%" }}
                  pb={"10px"}
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
                position={"relative"}
                colSpan={1}
                mt={{ base: "0", md: "20px" }}
                mb={{ base: "30%", md: "0" }}
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                bg={"white"}
                w={{ md: "160px", lg: "170px" }}
                pt={{ base: "0", md: "10px" }}
                rounded={{ base: "3xl", md: "md" }}
                shadow={"2xl"}
                pb={"8px"}
              >
                <Box w={"150px"} display={"flex"} justifyContent={"center"}>
                  <Image
                    src={burger}
                    position={{ base: "absolute", md: "block" }}
                    top={{ base: "-10", md: "2.5" }}
                    w={{ base: "100px", md: "140px", lg: "150px" }}
                    rounded={{ base: "full", md: "md" }}
                    h={"100px"}
                  />
                </Box>
                <Box
                  w={{ base: "130px", md: "140px", lg: "150px" }}
                  mt={{ base: "40%", md: "60%" }}
                  pb={"10px"}
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
                position={"relative"}
                colSpan={1}
                mt={{ base: "0", md: "20px" }}
                mb={{ base: "30%", md: "0" }}
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                bg={"white"}
                w={{ md: "160px", lg: "170px" }}
                pt={{ base: "0", md: "10px" }}
                rounded={{ base: "3xl", md: "md" }}
                shadow={"2xl"}
                pb={"8px"}
              >
                <Box w={"150px"} display={"flex"} justifyContent={"center"}>
                  <Image
                    src={burger}
                    position={{ base: "absolute", md: "block" }}
                    top={{ base: "-10", md: "2.5" }}
                    w={{ base: "100px", md: "140px", lg: "150px" }}
                    rounded={{ base: "full", md: "md" }}
                    h={"100px"}
                  />
                </Box>
                <Box
                  w={{ base: "130px", md: "140px", lg: "150px" }}
                  mt={{ base: "40%", md: "60%" }}
                  pb={"10px"}
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
      </motion.div>
    </>
  );
};
