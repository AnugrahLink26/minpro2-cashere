import { Box, Button, Center, Container, Flex, Grid, GridItem, Link, Spacer, useBreakpointValue } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { FiHome, FiSettings, FiLogOut } from "react-icons/fi";
import { VscGraph } from "react-icons/vsc";

import logo1 from "../assets/logo1.png";

export const Sidebar = () => {
  const iconSize = useBreakpointValue({ base: '0px', sm: '10px', md: '20px', lg: '30px', xl: '40px' })
  const iconBoxSize = useBreakpointValue({base: "0px", sm: "70px", md: "80px", lg: "90px", xl: "100px"})

  const menuList = [
    { 'icon': <FiHome fontSize={iconSize} />, 'name':'Home', 'path': '/' },
    { 'icon': <VscGraph fontSize={iconSize} />, 'name':'Report', 'path': '/reports' },
    { 'icon': <FiSettings fontSize={iconSize} />, 'name':'Setting', 'path': '/settings' },
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
    <Center>
      <Grid bg={"white"} h={"100vh"}>
        <Flex direction={'column'}>
          <Image src={logo1} mt={"20px"}/> 
          <Container
            h={"40vh"}
            mt={"50px"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-between"}
          >
            {menuList.map((item) => (
              <Link href={item.path} _hover={{ textDecoration: 'none' }}>
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
                    flexDirection={"column"}
                    alignItems={"center"}
                    rowGap={1}
                  >
                    {item.icon}
                    {item.name}
                  </Box>
                </Box>
              </Link>
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
    </Center>
  );
};
