import {
  Box,
  Heading,
  Container,
  Text,
  Stack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Center,
  Switch,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  ModalContent,
  ModalHeader,
  IconButton,
} from '@chakra-ui/react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { FiPlus } from "react-icons/fi"

export function ManageCashiers() {
  const [cashierData, setCashierData] = useState([])
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedCashierId, setSelectedCashierId] = useState(null);

  const fetchCashierData = async () => {
    try {
      const response = await axios.get('http://localhost:2000/admins/cashiers')
      setCashierData(response.data)
    } catch (error) {
      console.log(error);
    }
  }

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:2000/admins/delete-cashier/${selectedCashierId}`);
      onClose();
      fetchCashierData();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSwitchChange = (id, isVerified) => {
    setSelectedCashierId(id);
    onOpen();
  };

  const confirmSwitchChange = async (id) => {
    try {
      await axios.patch(`http://localhost:2000/admins/update-status-cashier/${id}`, {
        isVerified: !cashierData.find((cashier) => cashier.id === id).isVerified,
      });
      onClose();
      fetchCashierData();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCashierData()
  }, [])

  return (
    <Box>
      <TableContainer mx={'auto'}>
        <Table variant={'simple'}>
          <Thead>
            <Tr>
              <Th />
              <Th>Cashier Name</Th>
              <Th>Gender</Th>
              <Th>Username</Th>
              <Th>Email</Th>
              <Th>Phone No.</Th>
              <Th>Status</Th>
              <Th />
            </Tr>
          </Thead>
          <Tbody>
            {
              cashierData.map((cashier) => (
                <Tr key={cashier.id}>
                  <Td>
                    <IconButton
                      icon={<FaTrash />}
                      colorScheme="red"
                      onClick={() => {
                        setSelectedCashierId(cashier.id);
                        onOpen();
                      }}
                    />
                  </Td>
                  <Td>{ cashier.fullname }</Td>
                  <Td>{ cashier.gender }</Td>
                  <Td>{ cashier.username }</Td>
                  <Td>{ cashier.email }</Td>
                  <Td>{ cashier.phoneNumber }</Td>
                  <Td>{ cashier.isVerified == true ? 'Active' : 'Inactive' }</Td>
                  <Td>
                    <Switch
                      isChecked={cashier.isVerified}
                      onChange={() => handleSwitchChange(cashier.id, cashier.isVerified)}
                    /> 
                  </Td>
                </Tr>
              ))
            }
          </Tbody>
        </Table>
      </TableContainer>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {selectedCashierId ? 'Delete' : 'Update'} Confirmation!
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Are you sure you want to {selectedCashierId ? 'delete this cashier' : 'change the status'}?
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="red" onClick={selectedCashierId ? handleDelete : confirmSwitchChange}>
              Confirm
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
        <Center>
          <Button
            bg={"#DB1783"}
            color={"white"}
            variant="solid"
            leftIcon={<FiPlus />}
            onClick={onOpen}
            _hover={{
              bg: "#FFD4E9",
              color: "#DB1783",
            }}
          >
            Cashier
          </Button>
        </Center>
    </Box>
  )
}
