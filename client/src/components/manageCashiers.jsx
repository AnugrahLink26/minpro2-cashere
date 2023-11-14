import {
  Box,
  Heading,
  Container,
  Text,
  Stack,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Center,
} from '@chakra-ui/react'
import axios from 'axios';
import { useEffect, useState } from 'react';

export function ManageCashiers() {
  const [cashierData, setCashierData] = useState([])

  const fetchCashierData = async () => {
    try {
      const response = await axios.get('http://localhost:2000/admins/cashiers')
      setCashierData(response.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchCashierData()
  }, [])

  return (
      <TableContainer mx={'auto'}>
        <Table variant={'simple'}>
          <Thead>
            <Tr>
              <Th>Cashier Name</Th>
              <Th>Gender</Th>
              <Th>Username</Th>
              <Th>Email</Th>
              <Th>Phone No.</Th>
              <Th>Status</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {
              cashierData.map((cashier) => (
                <Tr key={cashier.id}>
                  <Td>{ cashier.fullname }</Td>
                  <Td>{ cashier.gender }</Td>
                  <Td>{ cashier.username }</Td>
                  <Td>{ cashier.email }</Td>
                  <Td>{ cashier.phoneNumber }</Td>
                  <Td>{ cashier.isVerified == true ? 'Active' : 'Inactive' }</Td>
                </Tr>
              ))
            }
          </Tbody>
        </Table>
      </TableContainer>

    // <Container maxW={'3xl'}>
    //   <Stack
    //     as={Box}
    //     textAlign={'center'}
    //     spacing={{ base: 8, md: 14 }}
    //     py={{ base: 20, md: 36 }}>
    //     <Heading
    //       fontWeight={600}
    //       fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
    //       lineHeight={'110%'}>
    //       Welcome to <spacing/>
    //       <Text as={'span'} color={'#DB1783'}>
    //         Manage Cashiers Page
    //       </Text>
    //     </Heading>
    //   </Stack>
    // </Container>
  )
}
