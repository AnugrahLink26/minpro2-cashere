import burger from "../assets/burger.jpg";
import {
  AiOutlineArrowDown,
} from "react-icons/ai";
import { Image, Text, Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import { DropBar } from "./dropbar";
import { MobileHeader } from "./mobileHeader";
import { motion } from "framer-motion";
import { Category } from "./category";

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
            w={{ base: "90%", md: "95%", lg: "95%" }}
            mx={{ base: "4%", md: "auto" }}
          >
            <Flex
              w={{ base: "100%", md: "98%", lg: "90%" }}
              mx={"auto"}
              ml={{ md: "20%", lg: "auto", xl: "6.5%" }}
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
              <Category />
            </Flex>
            <Flex
              mt={"4%"}
              ml={{ base: "4%", md: "18%", lg: "0", xl: "45px" }}
              w={{ base: "355px", md: "full", lg: "full", xl: "95%" }}
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
                md: "repeat(2,1fr)",
                lg: "repeat(4, 1fr)",
                xl: "repeat(4,1fr)",
              }}
              ml={{ base: "3%", md: "21%", lg: "2%", xl: "35px" }}
              mt={{ base: "15%", md: "0%" }}
              columnGap={{ base: "6%", md: "15px" }}
            >
              <GridItem
                as={"Box"}
                position={"relative"}
                mt={{ base: "0", md: "20px" }}
                mb={{ base: "30%", md: "0" }}
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                bg={"white"}
                w={{
                  base: "170px",
                  md: "200px",
                  lg: "170px",
                  xl: "200px",
                  "2xl": "200px",
                }}
                pt={{ base: "0", md: "10px" }}
                rounded={{ base: "3xl", md: "md" }}
                shadow={"2xl"}
                pb={"8px"}
              >
                <Box display={"flex"} justifyContent={"center"}>
                  <Image
                    src={burger}
                    position={{ base: "absolute", md: "block" }}
                    top={{ base: "-10", md: "2.5" }}
                    w={{
                      base: "100px",
                      md: "180px",
                      lg: "150px",
                      xl: "180px",
                      "2xl": "180px",
                    }}
                    rounded={{ base: "full", md: "md" }}
                    h={{
                      base: "100px",
                      md: "140px",
                      xl: "120px",
                      "2xl": "120px",
                    }}
                  />
                </Box>
                <Box
                  w={{
                    base: "130px",
                    md: "180px",
                    lg: "150px",
                    xl: "180px",
                    "2xl": "180px",
                  }}
                  mt={{ base: "40%", md: "70%" }}
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
