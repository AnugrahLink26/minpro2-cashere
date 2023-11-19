import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { AiOutlinePlus, AiFillEdit, AiTwotoneDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { ModalDelete } from "../components/modalDelete";
import axios from "axios";
import Switch from "react-switch";

export const SettingsPage = () => {
  const [selectedProduct, setSelectedProduct] = React.useState(null);
  const [product, setProduct] = useState([]);

  const getProduct = async () => {
    try {
      const result = await axios.get(`http://localhost:2000/products`);
      setProduct(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleToggle = async (productId, currentStatus) => {
    try {
      await axios.patch(`http://localhost:2000/products/status/${productId}`, {
        isActive: !currentStatus,
      });
      await getProduct();
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getProduct();
  }, []);

  const handleDelete = (product) => {
    setSelectedProduct(product);
  };

  return (
    <>
      <Box
        as={Link}
        to={"/settings/manage-products/manage-category"}
        bg={"pink"}
        rounded={"md"}
        px={"10px"}
        py={"5px"}
        left={{ base: "7%", md: "5%" }}
        top={"1%"}
        position={"absolute"}
        fontWeight={"semibold"}
        cursor={"pointer"}
        _hover={{ bg: "pink.200" }}
      >
        Manage Category
      </Box>
      <Grid
        overflowY={"auto"}
        overflowX={"hidden"}
        sx={{
          "&::-webkit-scrollbar": {
            display: "none",
          },
          scrollbarWidth: "none",
        }}
        w={"100%"}
        h={{ base: "84vh", md: "70vh" }}
        templateColumns={{
          base: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(3, 1fr)",
        }}
        mt={{ base: "13%", md: "10%", xl: "5%" }}
        pl={{ md: "5%" }}
        ml={{ base: "30px", md: "0" }}
        columnGap={"1%"}
        rowGap={"2%"}
      >
        <GridItem
          as={Link}
          to={"/settings/manage-product/add-product"}
          colSpan={1}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          border={"dashed"}
          borderColor={"pink"}
          w={{ base: "85%", md: "90%", lg: "80%" }}
          h={{ base: "30vh", md: "25vh", lg: "40vh" }}
          rounded={"md"}
          cursor={"pointer"}
        >
          <AiOutlinePlus />
          Add new dish
        </GridItem>
        {product.map((item) => (
          <GridItem
            key={item.id}
            colSpan={1}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            border={"1px"}
            borderColor={"gray"}
            w={{ base: "85%", md: "90%", lg: "80%" }}
            h={{ base: "34vh", md: "25vh", lg: "40vh" }}
            rounded={"md"}
            cursor={"pointer"}
          >
            <Flex
              mb={{ base: "80px", md: "70px", xl: "50px" }}
              flexDirection={"column"}
            >
              <Box
                w={{ base: "345px", md: "200px" }}
                h={{ base: "15vh", md: "10vh", xl: "18vh" }}
              >
                <Image
                  src={`http://localhost:2000/${item.urlProductImg}`}
                  objectFit={"cover"}
                  w={"100%"}
                  h={"100%"}
                  rounded={"md"}
                />
              </Box>
              <Box h={"55px"} mt={"10px"}>
                <Flex justifyContent={"space-between"}>
                  <Text
                    fontSize={"lg"}
                    w={"140px"}
                    fontWeight={"bold"}
                    mb={"15px"}
                  >
                    {item.productName}
                  </Text>
                  <Text pt={"6px"} fontSize={"xs"}>
                    {item.isActive ? "Active" : "Inactive"}
                  </Text>
                </Flex>
                <Text w={"200px"}>{item.productDescription}</Text>
                <Flex mt={"5px"} justifyContent={"space-between"}>
                  <Text fontWeight={"bold"} color={"orange"}>
                    Rp {item.productPrice}
                  </Text>
                  <Text fontStyle={"italic"}>Stock / {item.productStock}</Text>
                </Flex>
                <Flex columnGap={"4px"} mt={{ base: "10px", md: "0" }}>
                  <Box
                    rounded={"sm"}
                    w={"18px"}
                    transitionDuration={"0.5s"}
                    _hover={{ color: "red" }}
                    fontSize={"lg"}
                    type="submit"
                    onClick={() => handleDelete(item)}
                  >
                    <AiTwotoneDelete />
                  </Box>
                  <Box
                    as={Link}
                    to={`/update-product/${item.id}`}
                    rounded={"sm"}
                    w={"18px"}
                    transitionDuration={"0.5s"}
                    _hover={{ color: "yellow.400" }}
                    fontSize={"lg"}
                    type="submit"
                  >
                    <AiFillEdit />
                  </Box>
                  <Box ml={{ base: "70%", md: "50%" }}>
                    <Switch
                      onChange={() => handleToggle(item.id, item.isActive)}
                      checked={item.isActive}
                      height={18}
                    />
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </GridItem>
        ))}
        {selectedProduct && (
          <ModalDelete
            isOpen={!!selectedProduct}
            onClose={() => setSelectedProduct(null)}
            product={selectedProduct}
            centerContent
          />
        )}
      </Grid>
    </>
  );
};
