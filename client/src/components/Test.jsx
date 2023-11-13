import { Box, Button, Center, Container, Flex, Grid, GridItem, Link, Spacer, useBreakpointValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Image } from "@chakra-ui/react";
import { FiHome, FiSettings, FiLogOut } from "react-icons/fi";
import { VscGraph } from "react-icons/vsc";

import logo1 from "../assets/logo1.png";

export const Sidebar = () => {
  const iconSize = useBreakpointValue({
    base: "0px",
    sm: "20px",
    md: "30px",
    lg: "40px",
    xl: "50px",
  });
  const iconBoxSize = useBreakpointValue({
    base: "0px",
    sm: "80px",
    md: "90px",
    lg: "100px",
    xl: "110px",
  });
  
//   const iconSize = useBreakpointValue({ base: '0px', sm: '10px', md: '20px', lg: '30px', xl: '40px' })
//   const iconBoxSize = useBreakpointValue({base: "0px", sm: "70px", md: "80px", lg: "90px", xl: "100px"})

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
    <Grid bg={"white"} h={"100vh"} borderRight={"1px"} borderColor={"gray.200"}>
      <Flex direction={"column"}>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={logo1}
            pr={{ md: "10px", lg: "10px" }}
            marginX={"auto"}
            my={"12.5px"}
          />
        </motion.div>
        <Container
          h={"50vh"}
          mt={"50px"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
        >
          {menuList.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeInOut",
              }}
            >
              <Box
                rowGap={"0.5"}
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                cursor={"pointer"}
                w={{ md: "116px", lg: "137px" }}
                bg={"white"}
                roundedLeft={"xl"}
                // F1F3F4
                _hover={{ bg: "#F1F3F4", transitionDuration: "0.5s" }}
              >
                <Box
                  w={iconBoxSize}
                  my={"10px"}
                  py={"10px"}
                  _Focus={{
                    bg: "red",
                  }}
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
                  pr={{ md: "10px", lg: "10px" }}
                >
                  {item.icon}
                  {item.name}
                </Box>
              </Box>
            </motion.div>
          ))}
        </Container>
        <Spacer />
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
            delay: menuList.length * 0.1,
            ease: "easeInOut",
          }}
        >
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
         </motion.div>
       </Flex>
    </Grid>
  );
};    