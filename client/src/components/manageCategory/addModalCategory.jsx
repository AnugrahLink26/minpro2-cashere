import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const validationSchema = Yup.object().shape({
  category: Yup.string().required("Category name is required"),
});

export const AddModalCategory = ({ isOpen, onClose, onAddCategory }) => {
  const handleAddCategory = async (data, actions) => {
    try {
      await axios.post(`http://localhost:2000/categories`, data);

      onAddCategory(data);
      onClose();
      actions.resetForm();
    } catch (err) {
      console.log(err);
      actions.setSubmitting(false);
    }
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent mt={"15%"}>
        <ModalHeader>Add New Category</ModalHeader>
        <ModalCloseButton />
        <Formik
          initialValues={{ category: "" }}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => handleAddCategory(values, actions)}
        >
          <Form>
            <ModalBody>
              <Field
                as={Input}
                name="category"
                type="text"
                placeholder="create new category"
              />
              <ErrorMessage name="category" component="div" />
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={"3"} onClick={onClose}>
                Close
              </Button>
              <Button colorScheme="green" type="submit">
                Add Category
              </Button>
            </ModalFooter>
          </Form>
        </Formik>
      </ModalContent>
    </Modal>
  );
};
