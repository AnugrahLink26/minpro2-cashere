import {
  Box,
  Center,
  Container,
  Flex,
  Grid,
  GridItem,
  Link,
  Spacer,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Image } from "@chakra-ui/react";
import { FiHome, FiSettings, FiLogOut } from "react-icons/fi";
import { VscGraph } from "react-icons/vsc";

import logo1 from "../assets/logo1.png";

export const Sidebar = () => {
  const iconSize = useBreakpointValue({
    base: "0px",
    md: "30px",
    lg: "40px",
    xl: "30px",
    "2xl": "40px",
  });
  const iconBoxSize = useBreakpointValue({
    base: "0px",
    md: "30px",
    lg: "90px",
    xl: "80px",
    "2xl": "100px",
  });

  const menuList = [
    { icon: <FiHome fontSize={iconSize} />, name: "Home", path: "/" },
    {
      icon: <VscGraph fontSize={iconSize} />,
      name: "Report",
      path: "/reports",
    },
    {
      icon: <FiSettings fontSize={iconSize} />,
      name: "Setting",
      path: "/settings/my-profile",
    },
  ];

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
        <Flex direction={"column"}>
          <Image src={logo1} mt={"15px"} ml={{ md: "45px", xl: "50px", "2xl": "10px" }} />
          <Container
            mt={"50px"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-between"}
          >
            {menuList.map((item, index) => (
              <Link href={item.path} _hover={{ textDecoration: "none" }}>
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
                    justifyContent={"center"}
                    cursor={"pointer"}
                    w={{ md: "116px", lg: "90px", xl: "110px" }}
                    bg={"white"}
                  >
                    <Box
                      width={iconBoxSize}
                      my={"10px"}
                      py={"10px"}
                      ml={{ md: "40px", lg: "0", xl: "45px", "2xl": "0" }}
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
                </motion.div>
              </Link>
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
                // px={'30px'}
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
                ml={{ md: "40px", lg: "0", xl: "45px", "2xl": "0" }}
              >
                <FiLogOut onClick={handleLogOut} fontSize={iconSize} />
                Log Out
              </Box>
            </Box>
          </motion.div>
        </Flex>
      </Grid>
    </Center>
  );
};
