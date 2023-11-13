import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { Sidebar } from "../components/sidebar";
import { AiOutlinePlus } from "react-icons/ai";
import { LuPencilLine } from "react-icons/lu";
import { BsDot } from "react-icons/bs";
import pizza from "../assets/pizza.webp";

export const SettingsPage = () => {
  return (
    <>
      <Flex minH={"200vh"}>
        <Box
          display={{ base: "none", md: "block", lg: "block" }}
          position={"fixed"}
          top={"0"}
          w={"153.5px"}
          zIndex={"20"}
        >
          <Sidebar />
        </Box>
        <Text
          display={{ base: "none", lg: "block" }}
          pl={"35px"}
          pr={"10px"}
          left={"12.1%"}
          top={"10px"}
          position={"fixed"}
          fontWeight={"semibold"}
          fontSize={"1.5rem"}
          zIndex={"20"}
          bg={"#F1F3F4"}
        >
          Settings
        </Text>
        <Box
          position="fixed"
          w={"80%"}
          h={"9.7vh"}
          bg={"#F1F3F4"}
          pb="20px"
          right={"0"}
          display={{ base: "none", lg: "flex" }}
          zIndex={"10"}
        ></Box>
        <Flex
          position={"fixed"}
          left={{ base: "5%", md: "18.6%", lg: "15%" }}
          bg={{ base: "pink", md: "gray.400" }}
          py={{ base: "3%", md: "1%" }}
          w={{ base: "90%", md: "18%" }}
          px={{ base: "0", md: "1%" }}
          mt={{ base: "4%", md: "30%", lg: "5%" }}
          flexDirection={{ md: "column" }}
          justifyContent={"space-around"}
          rowGap={"10%"}
          h={{ md: "90%" }}
          fontSize={"sm"}
          rounded={"md"}
          zIndex={"10"}
          _after={{
            content: '""',
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            boxShadow: { base: "0 0 10px 0px pink", md: "none" },
            zIndex: "-1",
            borderRadius: "md",
          }}
        >
          <Box>
            <Text fontWeight={"bold"}>Products Management</Text>
            <Text display={{ base: "none", md: "block" }}>
              {" "}
              Manage your product,pricing, etc
            </Text>
          </Box>
          <Box>
            <Text fontWeight={"bold"}>Security</Text>
            <Text display={{ base: "none", md: "block" }}>
              Configure Password, PIN, etc
            </Text>
          </Box>
          <Box>
            <Text fontWeight={"bold"}>About</Text>
            <Text display={{ base: "none", md: "block" }}>
              Find out more about Cashere
            </Text>
          </Box>
        </Flex>
        <Flex
          flexDirection={"column"}
          bg={"gray.400"}
          position={"sticky"}
          left={{ md: "38%", lg: "35%" }}
          mt={{ base: "20%", md: "30%", lg: "5%" }}
          rounded={"md"}
          h={"auto"}
          w={{ base: "full", md: "60%", lg: "62%" }}
          pr={"1%"}
        >
          <Text mt={"4%"} ml={"2%"} fontWeight={"bold"}>
            Products Management
          </Text>
          <Grid
            templateColumns={{ base: "repeat(2,1fr)", lg: "repeat(3, 1fr)" }}
            mt={"5%"}
            ml={{ base: "7%", md: "6%" }}
            columnGap={"1%"}
            rowGap={"2%"}
          >
            <GridItem
              as={"Box"}
              colSpan={1}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}
              border={"dashed"}
              borderColor={"orange"}
              w={{ base: "85%", md: "90%", lg: "80%" }}
              h={{ base: "30vh", md: "25vh", lg: "40vh" }}
              rounded={"md"}
              cursor={"pointer"}
            >
              <AiOutlinePlus />
              Add new dish
            </GridItem>
            <GridItem
              as={"Box"}
              colSpan={1}
              display={"flex"}
              flexDirection={"column"}
              border={"2px"}
              borderColor={"gray.200"}
              w={{ base: "85%", md: "90%", lg: "80%" }}
              h={{ base: "30vh", md: "25vh", lg: "40vh" }}
              rounded={"md"}
              cursor={"pointer"}
            >
              <Flex flexDirection={"column"} alignItems={"center"}>
                <Image
                  my={"15px"}
                  rounded={"full"}
                  w={{ base: "40%", md: "60%" }}
                  src={pizza}
                />
                <Text
                  textAlign={"center"}
                  fontWeight={"bold"}
                  px={"30px"}
                  fontSize={"xs"}
                >
                  Classic Margherita Pizza
                </Text>
                <Flex ml={"10px"} alignItems={"center"} mt={"3px"}>
                  <Text fontSize={"xs"}>$ 2.69</Text>
                  <BsDot />
                  <Text fontSize={"xs"}>100 Stock</Text>
                </Flex>
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  columnGap={"3%"}
                  mt={{ base: "20%", md: "12%", lg: "7.5%" }}
                  roundedBottom={"md"}
                  py={"10px"}
                  w={"full"}
                  bg={"pink"}
                  fontSize={"sm"}
                  fontWeight={"bold"}
                  color={"white"}
                >
                  <LuPencilLine />
                  Edit dish
                </Box>
              </Flex>
            </GridItem>
            <GridItem
              as={"Box"}
              colSpan={1}
              display={"flex"}
              flexDirection={"column"}
              border={"2px"}
              borderColor={"gray.200"}
              w={{ base: "85%", md: "90%", lg: "80%" }}
              h={{ base: "30vh", md: "25vh", lg: "40vh" }}
              rounded={"md"}
              cursor={"pointer"}
            >
              <Flex flexDirection={"column"} alignItems={"center"}>
                <Image
                  my={"15px"}
                  rounded={"full"}
                  w={{ base: "40%", md: "60%" }}
                  src={pizza}
                />
                <Text
                  textAlign={"center"}
                  fontWeight={"bold"}
                  px={"30px"}
                  fontSize={"xs"}
                >
                  Classic Margherita Pizza
                </Text>
                <Flex ml={"10px"} alignItems={"center"} mt={"3px"}>
                  <Text fontSize={"xs"}>$ 2.69</Text>
                  <BsDot />
                  <Text fontSize={"xs"}>100 Stock</Text>
                </Flex>
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  columnGap={"3%"}
                  mt={{ base: "19.5%", md: "12%", lg: "7.5%" }}
                  roundedBottom={"md"}
                  py={"10px"}
                  w={"full"}
                  bg={"pink"}
                  fontSize={"sm"}
                  fontWeight={"bold"}
                  color={"white"}
                >
                  <LuPencilLine />
                  Edit dish
                </Box>
              </Flex>
            </GridItem>
          </Grid>
          <Box
            w={{ base: "full", md: "60%", lg: "62%" }}
            position={"fixed"}
            bg={"gray.600"}
            bottom={"0"}
            right={{ base: "0", md: "2%", lg: "3%" }}
            py={"20px"}
            roundedBottom={"md"}
            pt={"2%"}
            zIndex={10}
          >
            <Flex ml={"3%"} columnGap={"2%"}>
              <Box
                textAlign={"center"}
                border={"2px"}
                borderColor={"pink"}
                color={"pink"}
                borderRadius={"md"}
                w={"25%"}
                py={"1%"}
                cursor={"pointer"}
              >
                Discard Changes
              </Box>
              <Box
                color={"white"}
                textAlign={"center"}
                bg={"pink"}
                borderRadius={"md"}
                w={"25%"}
                py={"1%"}
                _hover={{ boxShadow: "0 0 10px rgba(255, 182, 193, 0.5)" }}
                cursor={"pointer"}
              >
                Save Changes
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};
