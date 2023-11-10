import { Box, Button, Container, Flex, Grid, GridItem } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

import { FiHome, FiSettings, FiLogOut } from "react-icons/fi";
import { RiFilePaperLine } from "react-icons/ri";

import logo1 from "../assets/logo1.png";

export const Sidebar = () => {
  return (
    <Grid bg={"white"} h={"100vh"}>
      {/* Sidebar */}
      <Box borderRight={"1px"} borderColor={"gray.200"}>
        <Container
          h={"100vh"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
        >
          <Box
            rowGap={"0.5"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            cursor={"pointer"}
          >
            <Image src={logo1} marginX={"auto"} mt={"20px"} />
            <Box
              mt={"10"}
              w={"85px"}
              py={"10px"}
              _hover={{
                bg: "#ED0A72",
                color: "white",
                transitionDuration: "0.5s",
              }}
              rounded={"xl"}
              display={"flex"}
              rowGap={"1"}
              flexDirection={"column"}
              alignItems={"center"}
            >
              <FiHome fontSize={"25px"} />
              Home
            </Box>
            <Box
              w={"85px"}
              py={"10px"}
              _hover={{
                bg: "#ED0A72",
                color: "white",
                transitionDuration: "0.5s",
              }}
              rounded={"xl"}
              display={"flex"}
              rowGap={"1"}
              flexDirection={"column"}
              alignItems={"center"}
            >
              <RiFilePaperLine fontSize={"25px"} />
              Bills
            </Box>
            <Box
              w={"85px"}
              py={"10px"}
              _hover={{
                bg: "#ED0A72",
                color: "white",
                transitionDuration: "0.5s",
              }}
              rounded={"xl"}
              display={"flex"}
              rowGap={"1"}
              flexDirection={"column"}
              alignItems={"center"}
            >
              <FiSettings fontSize={"25px"} />
              Setting
            </Box>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            cursor={"pointer"}
          >
            <Box
              w={"85px"}
              py={"10px"}
              _hover={{
                bg: "#ED0A72",
                color: "white",
                transitionDuration: "0.5s",
              }}
              rounded={"xl"}
              display={"flex"}
              rowGap={"1"}
              flexDirection={"column"}
              alignItems={"center"}
              mb={"20px"}
            >
              <FiLogOut fontSize={"25px"} />
              Log Out
            </Box>
          </Box>
        </Container>
      </Box>
    </Grid>
  );
};
