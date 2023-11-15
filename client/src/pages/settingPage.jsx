import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";
import { LuPencilLine } from "react-icons/lu";
import { BsDot } from "react-icons/bs";
import pizza from "../assets/pizza.webp";

export const SettingsPage = () => {
  return (
    <>
      <Grid
        templateColumns={{ base: "repeat(2,1fr)", lg: "repeat(3, 1fr)" }}
        mt={"5%"}
        ml={{ base: "7%", md: "6%" }}
        columnGap={"1%"}
        rowGap={"2%"}
      >
        <a href="/settings/manage-product/add-product">
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
        </a>
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
        w={{ base: "full", md: "60%", lg: "62%", xl: "70.3%" }}
        position={"fixed"}
        bg={"gray.600"}
        bottom={"1.8px"}
        right={{ base: "0", md: "2%", lg: "3%", xl: "16px" }}
        py={"20px"}
        roundedBottom={"xl"}
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
    </>
  );
};
