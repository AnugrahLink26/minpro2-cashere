import {
  FormControl,
  FormLabel,
  Input,
  Box,
  Stack,
  Button,
  Heading,
  Textarea,
  Img,
  Text,
  Flex,
} from "@chakra-ui/react";
import bgFood from "../assets/bg-food.jpg";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useState } from "react";

const ProductSchema = Yup.object().shape({
  productName: Yup.string().required("Product name is required"),
  productPrice: Yup.number().required("Product price is required"),
  productCategory: Yup.string().required("Product category is required"),
  productDescription: Yup.string().required("Product description is required"),
  productStock: Yup.string().required("Product stock is required"),
  urlProductImg: Yup.string().required("Image is required"),
});

export const AddProduct = () => {
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e, setFieldValue) => {
    const file = e.currentTarget.files[0];

    if (file) {
      setFieldValue("urlProductImg", file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (data) => {
    console.log(data);
    try {
      const formData = new FormData();
      formData.append("productName", data.productName);
      formData.append("productPrice", data.productPrice);
      formData.append("productCategory", data.productCategory);
      formData.append("productDescription", data.productDescription);
      formData.append("productStock", data.productStock);
      formData.append("urlProductImg", data.urlProductImg);

      const postProduct = await axios.post(
        `http://localhost:2000/products`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      window.location.reload();
      console.log(postProduct);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Box bg={"white"} h={"auto"} rounded={"xl"} w={"80%"} mx={"auto"}>
      <Stack px={6}>
        <Heading mt={"2%"} color={"#DB1783"}>
          Create Product
        </Heading>
        <Formik
          initialValues={{
            productName: "",
            productPrice: "",
            productCategory: "",
            productDescription: "",
            productStock: "",
            urlProductImg: "",
          }}
          validationSchema={ProductSchema}
          onSubmit={(values, action) => {
            handleSubmit(values);
            action.resetForm();
          }}
        >
          {({ setFieldValue }) => (
            <Form>
              <Stack spacing={4} mt={"1%"}>
                <Flex columnGap={"10px"} mx={"auto"}>
                  <FormControl id="productName" isRequired>
                    <Field
                      as={Input}
                      name="productName"
                      type="text"
                      variant="outline"
                      placeholder="Product name"
                      style={{
                        width: "475px",
                      }}
                    />
                  </FormControl>
                  <FormControl id="productCategory" isRequired>
                    <Field
                      as={Input}
                      name="productCategory"
                      type="text"
                      variant="outline"
                      placeholder="Product category"
                      style={{
                        width: "475px",
                      }}
                    />
                  </FormControl>
                </Flex>
                <Flex columnGap={"10px"} mx={"auto"}>
                  <FormControl id="productPrice" isRequired>
                    <Field
                      as={Input}
                      name="productPrice"
                      type="number"
                      variant="outline"
                      placeholder="Product Price"
                      style={{
                        width: "475px",
                      }}
                    />
                  </FormControl>
                  <FormControl id="productStock" isRequired>
                    <Field
                      as={Input}
                      name="productStock"
                      type="number"
                      variant="outline"
                      placeholder="Product stock"
                      style={{
                        width: "475px",
                      }}
                    />
                  </FormControl>
                </Flex>
                <FormControl id="productDescription" isRequired>
                  <Field
                    as={Textarea}
                    name="productDescription"
                    type="text"
                    variant="outline"
                    placeholder="Product description"
                  />
                </FormControl>
                <FormLabel>
                  <FormControl id="urlProductImg" isRequired>
                    <Box
                      w={"75.3vw"}
                      h={"50vh"}
                      overflow={"hidden"}
                      border={"1px"}
                      borderRadius={"md"}
                      borderColor={"gray.300"}
                      cursor={"pointer"}
                      position={"relative"}
                    >
                      <Img
                        src={imagePreview || bgFood}
                        objectFit={"cover"}
                        w={"100%"}
                        h={"100%"}
                        opacity={"40%"}
                      />
                      <Text
                        position="absolute"
                        top="50%"
                        left="50%"
                        transform="translate(-50%, -50%)"
                        color="gray.700"
                        fontSize="2xl"
                        fontWeight="bold"
                      >
                        Upload your image
                      </Text>
                    </Box>

                    <Input
                      name="urlProductImg"
                      id="urlProductImg"
                      type="file"
                      variant="outline"
                      display="none"
                      onChange={(e) => handleImageChange(e, setFieldValue)}
                    />
                  </FormControl>
                </FormLabel>
                <Stack pt={2} mb={"25px"}>
                  <Button
                    w={"100px"}
                    type="submit"
                    loadingText="Submitting"
                    bg={"#DB1783"}
                    color={"white"}
                    isLoading={false}
                    _hover={{ bg: "#FFD4E9", color: "#DB1783" }}
                  >
                    Save data
                  </Button>
                </Stack>
              </Stack>
            </Form>
          )}
        </Formik>
      </Stack>
    </Box>
  );
};
