import {
  Box,
  Stack,
  Button,
  Heading,
  Input,
  Textarea,
  Img,
  Text,
  Flex,
  Select,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import bgFood from "../assets/bg-food.jpg";

const ProductSchema = Yup.object().shape({
  productName: Yup.string(),
  productPrice: Yup.number(),
  productCategory: Yup.string(),
  productDescription: Yup.string(),
  productStock: Yup.number(),
  urlProductImg: Yup.string(),
});

export const UpdateProduct = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [categories, setCategories] = useState([]);
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

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`http://localhost:2000/categories`);
        setCategories(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCategories();
  }, []);

  const handleSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("productName", data.productName);
      formData.append("productPrice", data.productPrice);
      formData.append("productCategory", data.productCategory);
      formData.append("productDescription", data.productDescription);
      formData.append("productStock", data.productStock);
      formData.append("urlProductImg", data.urlProductImg);

      console.log(formData);

      await axios.patch(
        `http://localhost:2000/products/${params.id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      navigate("/settings/manage-products");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box
      bg={"white"}
      h={{ md: "100vh", xl: "auto" }}
      rounded={"xl"}
      w={{ base: "100%", md: "80%" }}
      mx={"auto"}
    >
      <Stack px={6}>
        <Heading mt={"2%"} color={"#DB1783"}>
          Update Product
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
                  <FormControl id="productName">
                    <Field
                      as={Input}
                      name="productName"
                      type="text"
                      variant="outline"
                      placeholder="Product name"
                      width={{ base: "185px", md: "322px", xl: "475px" }}
                    />
                  </FormControl>
                  <FormControl id="productCategory">
                    <Field
                      as={Select}
                      name="productCategory"
                      variant="outline"
                      placeholder="Select product category"
                      width={{ base: "185px", md: "322px", xl: "475px" }}
                    >
                      {categories.map((category) => (
                        <option key={category.id} value={category.category}>
                          {category.category}
                        </option>
                      ))}
                    </Field>
                  </FormControl>
                </Flex>
                <Flex columnGap={"10px"} mx={"auto"}>
                  <FormControl id="productPrice">
                    <Field
                      as={Input}
                      name="productPrice"
                      type="number"
                      variant="outline"
                      placeholder="Product Price"
                      width={{ base: "185px", md: "322px", xl: "475px" }}
                    />
                  </FormControl>
                  <FormControl id="productStock">
                    <Field
                      as={Input}
                      name="productStock"
                      type="number"
                      variant="outline"
                      placeholder="Product stock"
                      width={{ base: "185px", md: "322px", xl: "475px" }}
                    />
                  </FormControl>
                </Flex>
                <FormControl id="productDescription">
                  <Field
                    as={Textarea}
                    name="productDescription"
                    type="text"
                    variant="outline"
                    placeholder="Product description"
                  />
                </FormControl>
                <FormLabel>
                  <FormControl id="urlProductImg">
                    <Box
                      w={{ base: "89vw", md: "75.3vw" }}
                      h={"40vh"}
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
                    Update data
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
