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
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { AddIcon, MinusIcon, CloseIcon } from '@chakra-ui/icons'
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, incrementQuantity, decrementQuantity } from "../redux/cartSlice";
import { Payment } from "./payment";

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
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  }

  const handleIncrementQuantity = (itemId) => {
    dispatch(incrementQuantity(itemId));
  };
  
  const handleDecrementQuantity = (itemId) => {
    dispatch(decrementQuantity(itemId));
  };

  const totalPrice = cartItems.reduce((acc, cartItem) => acc + cartItem.subTotal, 0)
  
  return (
    <Flex bg={"white"} flexDirection={"column"} h={'100vh'}>
      <Stack>
        <Stack h={"85vh"} overflowY={"auto"} rowGap={"2%"}>
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
// Luthfi
//      h={"26vh"}
        borderTop={"1px"}
        borderColor={"gray.200"}
        h={"15vh"}
      >
        <Flex justifyContent={"space-between"} alignItems={'center'} px={"5%"} h={'5vh'}>
          <Text fontWeight={"semibold"}>Total Price</Text>
          <Text fontWeight={"bold"}>
            {totalPrice.toLocaleString("id-ID", {style: "currency", currency: "IDR", minimumFractionDigits: 0})}
          </Text>
        </Flex>
        <Flex justifyContent={"center"} alignItems={"center"}>
          <Button bg={"#DB1783"} color={'white'} px={"80px"} my={'2%'} ref={btnRef} onClick={onOpen}>
            Checkout
          </Button>
          <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            finalFocusRef={btnRef}
            size={'md'}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Confirm Payment</DrawerHeader>
              <DrawerBody>
                <Payment />
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Flex>
      </Box>
    </Flex>
  );
};
