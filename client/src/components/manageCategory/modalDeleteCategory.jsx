import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import axios from "axios";
import { AiFillExclamationCircle } from "react-icons/ai";

export const ModalDeleteCategory = ({ isOpen, onClose, onDelete, category }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:2000/categories/${category.id}`);
      onDelete(category.id);
      onClose();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          Are you sure? <AiFillExclamationCircle />
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex flexDirection={"column"} m={"auto"} alignItems={"center"}>
            <Box mt={"20px"} textAlign={"center"}>
              Do you really want to delete the category:{" "}
              <strong>{category.category}</strong>? This process cannot be
              undone.{" "}
            </Box>
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button onClick={handleDelete} colorScheme="red">
            Delete
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
