import {
  Box,
  Flex,
  Grid,
  Text,
  Image,
  GridItem,
  Button,
  Stack,
  Center,
  IconButton,
} from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { AddIcon, MinusIcon, CloseIcon } from '@chakra-ui/icons'
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, incrementQuantity, decrementQuantity } from "../redux/cartSlice";

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
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.items)
  const isTransaction = useSelector((state) => state.transaction.isTransaction)

  const modalSize = useBreakpointValue({
    base: "full",
    sm: "sm",
    md: "md",
    lg: "lg",
    xl: "xl",
  });

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  }

  const handleIncrementQuantity = (itemId) => {
    dispatch(incrementQuantity(itemId));
  };
  
  const handleDecrementQuantity = (itemId) => {
    dispatch(decrementQuantity(itemId));
  };

  const total = cartItems.reduce((acc, cartItem) => acc + cartItem.subTotal, 0)
  
  return (
    <Flex bg={"white"} flexDirection={"column"} h={'100vh'}>
      <Stack>
        <Stack h={"75vh"} overflowY={"auto"} rowGap={"2%"}>
          {cartItems?.map((cartItem) => (
            <Grid w={"100%"}>
              <AnimatedGridItem>
                <Flex
                  as={GridItem}
                  py={"10px"}
                  pl={"10px"}
                  rounded={"md"}
                  h={'80px'}
                >
                  <Center w={'10%'}>
                    <IconButton 
                      icon={<CloseIcon />}
                      colorScheme="red"
                      aria-label='Remove Item'
                      size={'sm'}
                      onClick={() => {handleRemoveFromCart(cartItem.id)}}
                    />
                  </Center>
                  <Flex w={'65%'}>
                    <Image rounded={"md"} w={"60px"} src={`http://localhost:2000/${cartItem.urlProductImg}`} alt={cartItem.productName} />
                    <Stack
                      ml={"10px"}
                      w={'100%'}
                      rowGap={"6px"}
                      justify="space-between"
                    >
                      <Text fontWeight={"bold"}>{cartItem.productName}</Text>
                      <Flex justify="space-between" mr={'15%'}>
                        <Center>
                          <Text color={"orange"} fontSize={'md'}>
                            {cartItem.productPrice.toLocaleString("id-ID", {style: "currency", currency: "IDR", minimumFractionDigits: 0})}
                          </Text>
                        </Center>
                        <Center w={'25%'} mx={'2px'}>
                          <IconButton 
                            isRound={true}
                            bg='white'
                            color={'#DB1783'}
                            aria-label='Reduce Item'
                            size={'xs'}
                            icon={<MinusIcon />}
                            _hover={{
                              bg: "#DB1783",
                              color: "white",
                            }}
                            onClick={() => handleDecrementQuantity(cartItem.id)}
                          />
                          <Text fontSize={'lg'} mx={'3'} mt={'1'}>{cartItem.quantity}</Text>
                          <IconButton 
                            isRound={true}
                            bg='white'
                            color={'#DB1783'}
                            aria-label='Add Item'
                            size={'xs'}
                            icon={<AddIcon />}
                            _hover={{
                              bg: "#DB1783",
                              color: "white",
                            }}
                            onClick={() => handleIncrementQuantity(cartItem.id)}
                          />
                        </Center>
                      
                      </Flex>                
                    </Stack>
                  </Flex>
                  <Center mr={'10px'} w={'25%'}>
                    <Text fontSize={'md'} mx={'3'} mt={'1'}>
                      {cartItem.subTotal.toLocaleString("id-ID", {style: "currency", currency: "IDR", minimumFractionDigits: 0})}
                    </Text>
                  </Center>
                </Flex>
              </AnimatedGridItem>
            </Grid>
          ))}
        </Stack>
      </Stack>
      <Box
        borderTop={"1px"}
        borderColor={"gray.200"}
        h={"16vh"}
      >
        <Flex justifyContent={"space-between"} px={"5%"} mt={"2%"}>
          <Text fontWeight={"semibold"}>Total</Text>
          <Text fontWeight={"bold"}>
            {total.toLocaleString("id-ID", {style: "currency", currency: "IDR", minimumFractionDigits: 0})}
          </Text>
        </Flex>
        <Flex justifyContent={"center"} alignItems={"center"}>
          <Button bg={"#DB1783"} color={'white'} px={"80px"} my={'2%'}>
            Checkout
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};
