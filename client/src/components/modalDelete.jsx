import {
  Box,
  Button,
  Flex,
  Modal,
  Text,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { AiFillExclamationCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export const ModalDelete = ({ isOpen, onClose, product }) => {
  const navigate = useNavigate();
  const finalRef = React.useRef(null);
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:2000/products/${product.id}`);
      navigate("/settings/manage-products");
      onClose();
    } catch (err) {
      console.log("Error deleting product:", err);
    }
  };

  return (
    <>
      <Modal
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        centerContent
      >
        <ModalOverlay />
        <ModalContent mt={"15%"}>
          <ModalHeader>
            Are you sure? <AiFillExclamationCircle />
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex flexDirection={"column"} m={"auto"} alignItems={"center"}>
              <Text mt={"20px"} textAlign={"center"}>
                Do you really want to delete the product:{" "}
                <strong>{product.productName}</strong>? This process cannot be
                undone.
              </Text>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button onClick={() => handleDelete()} colorScheme="red">
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
