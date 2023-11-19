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
    Input,
  } from "@chakra-ui/react";
  import { useFormik } from "formik";
  import axios from "axios";
  import { useState } from "react";
  
  export const ModalEditCategory = ({ isOpen, onClose, onEdit, category }) => {
    const [editedCategory, setEditedCategory] = useState(category.category);
  
    const formik = useFormik({
      initialValues: {
        editCategory: category.category,
      },
      onSubmit: async (values) => {
        try {
          await axios.patch(`http://localhost:2000/categories/${category.id}`, {
            category: values.editCategory,
          });
          onEdit(category.id);
          onClose();
        } catch (err) {
          console.log(err);
        }
      },
    });
  
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit your category</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={formik.handleSubmit}>
            <ModalBody>
              <Flex flexDirection={"column"} m={"auto"} alignItems={"center"}>
                <Box mt="20px" textAlign="center">
                  <label htmlFor="editCategory">New Category Name:</label>
                  <Input
                    id="editCategory"
                    name="editCategory"
                    type="text"
                    value={formik.values.editCategory}
                    onChange={formik.handleChange}
                    mt="2"
                  />
                </Box>
              </Flex>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button type="submit" colorScheme="red">
                Submit
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    );
  };
  