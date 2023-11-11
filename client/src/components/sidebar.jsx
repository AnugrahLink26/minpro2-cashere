import { Box, Button, Container, Flex, Grid, GridItem, Spacer, useBreakpointValue } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

import { FiHome, FiSettings, FiLogOut } from "react-icons/fi";
import { VscGraph } from "react-icons/vsc";

import logo1 from "../assets/logo1.png";

export const Sidebar = () => {
  const iconSize = useBreakpointValue({ base: '0px', sm: '20px', md: '30px', lg: '40px', xl: '50px' })
  const iconBoxSize = useBreakpointValue({base: "0px", sm: "80px", md: "90px", lg: "100px", xl: "110px"})

  const menuList = [
    { 'icon': <FiHome fontSize={iconSize} />, 'name':'Home' },
    { 'icon': <VscGraph fontSize={iconSize} />, 'name':'Report' },
    { 'icon': <FiSettings fontSize={iconSize} />, 'name':'Setting' },
    
  ]

  const handleLogOut = async () => {
    try {
      localStorage.removeItem("token");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Grid bg={"white"} h={"100vh"}>
      <Flex direction={'column'}>
        <Image src={logo1} marginX={"auto"} my={"12.5px"} /> 
        <Container
          h={"50vh"}
          mt={"50px"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
        >
          {menuList.map((item) => (
            <Box
              rowGap={"0.5"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              cursor={"pointer"}
            >
              <Box
                w={iconBoxSize}
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
                {item.icon}
                {item.name}
              </Box>
            </Box>
          ))}
        </Container>
        <Spacer />
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          cursor={"pointer"}
        >
          <Box
            w={iconBoxSize}
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
            <FiLogOut onClick={handleLogOut} fontSize={iconSize} />
            Log Out
          </Box>
        </Box>
      </Flex>
    </Grid>
  );
};
