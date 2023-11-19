import {
  Box,
  Flex,
  Grid,
  Text,
  Image,
  GridItem,
  Button,
  Stack,
} from "@chakra-ui/react";

import pizza from "../assets/pizza.webp";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const AnimatedGridItem = ({ children }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ x: 0, opacity: 1, transition: { duration: 0.5 } });
  }, [controls]);

  return (
    <motion.div initial={{ x: "100%", opacity: 0 }} animate={controls}>
      {children}
    </motion.div>
  );
};

export const CheckOut = () => {
  return (
    <Flex bg={"white"} mb={{ md: "30px", lg: "0" }} flexDirection={"column"}>
      <Flex
        borderLeft={"1px"}
        flexDirection={"column"}
        borderColor={"gray.200"}
      >
        <Text mt={{ md: "20%", lg: "8%" }} ml={"8%"} fontWeight={"bold"}>
          Current Order
        </Text>

        <Stack h={"58vh"} overflowY={"auto"} rowGap={"2%"}>
          <Grid w={"84%"} mx={"auto"} mt={"2%"}>
            <AnimatedGridItem>
              <Flex
                as={GridItem}
                w={{ md: "210px", lg: "250px" }}
                bg={"gray.200"}
                py={"10px"}
                pl={"10px"}
                rounded={"md"}
              >
                <Image rounded={"md"} w={"60px"} src={pizza} />
                <Flex
                  ml={"10px"}
                  w={"160px"}
                  flexDirection={"column"}
                  rowGap={"6px"}
                >
                  <Text fontWeight={"bold"}>Pizza Enak</Text>
                  <Flex justifyContent={"space-between"}>
                    <Text color={"orange"}>$ 20.50</Text>
                  </Flex>
                </Flex>
              </Flex>
            </AnimatedGridItem>
          </Grid>
        </Stack>
      </Flex>
      <Box
        h={"26vh"}
        borderTop={"1px"}
        borderLeft={"1px"}
        borderColor={"gray.200"}
      >
        <Flex justifyContent={"space-between"} px={"20px"} mt={"10%"}>
          <Text>Subtotal</Text>
          <Text>$67.81</Text>
        </Flex>
        <Flex justifyContent={"space-between"} px={"20px"} mt={"7%"}>
          <Text fontWeight={"semibold"}>Total</Text>
          <Text fontWeight={"bold"}>$67.81</Text>
        </Flex>
        <Flex justifyContent={"center"} alignItems={"center"} h={"10vh"}>
          <Button bg={"pink"} px={"80px"}>
            Print Bills
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};
