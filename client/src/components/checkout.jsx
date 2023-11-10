import {
  Box,
  Flex,
  Grid,
  Text,
  Image,
  GridItem,
  Button,
} from "@chakra-ui/react";

import pizza from "../assets/pizza.webp";

export const CheckOut = () => {
  return (
    <Flex bg={"white"} flexDirection={"column"}>
      <Flex
        borderLeft={"1px"}
        flexDirection={"column"}
        borderColor={"gray.200"}
        h={"65vh"}
      >
        <Text mt={{ md: "20%", lg: "5%" }} ml={"8%"} fontWeight={"bold"}>
          Current Order
        </Text>

        <Grid w={"84%"} mx={"auto"} mt={"2%"} rowGap={"10px"}>
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
        </Grid>
        <Grid w={"84%"} mx={"auto"} mt={"5%"} rowGap={"10px"}>
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
        </Grid>
        <Grid w={"84%"} mx={"auto"} mt={"5%"} rowGap={"10px"}>
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
        </Grid>
        <Grid w={"84%"} mx={"auto"} mt={"5%"} rowGap={"10px"}>
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
        </Grid>
      </Flex>
      <Box
        h={"30vh"}
        borderTop={"1px"}
        borderLeft={"1px"}
        borderColor={"gray.200"}
      >
        <Flex justifyContent={"space-between"} px={"20px"} mt={"5%"}>
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
