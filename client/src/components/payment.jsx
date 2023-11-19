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
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Input,
  useToast,
} from "@chakra-ui/react";
import axios from "axios"
import { useState } from "react";
import { useSelector } from "react-redux";

export const Payment = () => {
  const cartItems = useSelector((state) => state.cart.items)
  const totalPrice = cartItems.reduce((acc, cartItem) => acc + cartItem.subTotal, 0)
  console.log(cartItems);
  const [payment, setPayment] = useState("");
  const parsedPayment = parseFloat(payment);
  
  const toast = useToast();

  const calculateChange = () => {
    if (!isNaN(parsedPayment)) {
      return parsedPayment - totalPrice;
    }
    return 0;
  };

  const handleConfirmPayment = async () => {
    if (isNaN(parsedPayment) || parsedPayment <= 0) {
      toast({
        title: "Error",
        description: "Payment must be a valid number greater than 0",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } else if (parsedPayment < totalPrice) {
      toast({
        title: "Error",
        description: "Insufficient Money. Payment should be equal to or greater than the total price amount",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } else {
      try {
        await axios.post('http://localhost:2000/transactions', {
          totalPrice: totalPrice,
          payment: parsedPayment,
          change: calculateChange()
        })
        await axios.post('http://localhost:2000/transactions/details', 
          { cartItems }
        )
        // for (const item of cartItems) {
        //   console.log(item);
        //   await axios.post('http://localhost:2000/transactions/details', {
        //     ProductId: item.id,
        //     quantity: item.quantity
        //   })
        toast({
          title: "Success",
          description: "Payment successful",
          status: "success",
          duration: 5000,
          isClosable: true,
        });

      } catch (error) {
        console.log(error);
        toast({
          title: 'Error',
          description: 'Failed to confirm payment',
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
      }
      
    }
  }

  return (
    <Stack> 
      <TableContainer mx={'auto'} overflowY={"auto"} w={'100%'} h={'70vh'}>
        <Table variant={'simple'}>
          <Thead>
            <Tr>
              <Th>Item</Th>
              <Th>Qty</Th>
              <Th>Price</Th>
            </Tr>
          </Thead>
          <Tbody>
            {cartItems?.map((cartItem) => (
              <Tr key={cartItem.id}>
                <Td w={'70%'}>
                  <Flex>
                    <Center>
                      <Image rounded={"md"} w={"60px"} h={'50px'} src={`http://localhost:2000/${cartItem.urlProductImg}`} alt={cartItem.productName} />
                    </Center>
                    <Stack
                      ml={"10px"}
                      w={'100%'}
                      rowGap={"6px"}
                      justify="space-between"
                    >
                      <Text fontWeight={"bold"}>{cartItem.productName}</Text>
                      <Text color={"orange"} fontSize={'md'}>
                        {cartItem.productPrice.toLocaleString("id-ID", {style: "currency", currency: "IDR", minimumFractionDigits: 0})}
                      </Text>                                     
                    </Stack>
                  </Flex>
                </Td>
                <Td w={'10%'}>
                  <Center mx={'2px'}>
                    <Text fontSize={'lg'}>{cartItem.quantity}</Text>
                  </Center>
                </Td>
                <Td w={'20%'}>
                  <Center>
                    <Text fontSize={'md'}>
                      {cartItem.subTotal.toLocaleString("id-ID", {style: "currency", currency: "IDR", minimumFractionDigits: 0})}
                    </Text>
                  </Center>
                </Td>
              </Tr>              
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <Box
        borderTop={"1px"}
        borderColor={"gray.200"}
        h={"30vh"}
      >
        <Flex justifyContent={"space-between"} alignItems={'center'} px={"5%"} h={'5vh'}>
          <Text fontWeight={"semibold"}>Total Price</Text>
          <Text fontWeight={"bold"}>
            {totalPrice.toLocaleString("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 })}
          </Text>
        </Flex>
        <Flex justifyContent="space-between" alignItems="center" px={"5%"} h={'5vh'}>
          <Text fontWeight="semibold">Payment</Text>
          <Center>
            <Text fontWeight={"bold"} mr={'2'}>Rp </Text>
            <Input
              type="number"
              value={payment.toLocaleString("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 })}
              border={'1px'}
              borderColor={'#DB1783'}
              onChange={(e) => setPayment(e.target.value)}
              textAlign={'right'}
            />
          </Center>
        </Flex>
        <Flex justifyContent="space-between" alignItems="center" px={"5%"} h={'5vh'}>
          <Text fontWeight="semibold">Change</Text>
          <Text fontWeight="bold">
            {calculateChange().toLocaleString("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 })}
          </Text>
        </Flex>
        <Flex justifyContent={"center"} alignItems={"center"}>
          <Button bg={"#DB1783"} color={'white'} px={"80px"} my={'2%'} onClick={handleConfirmPayment}>
            Confirm Payment
          </Button>
        </Flex>
      </Box>
    </Stack>
  );
};
