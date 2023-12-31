import { Image, Text, Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import { DropBar } from "./dropbar";
import { MobileHeader } from "./mobileHeader";
import { motion } from "framer-motion";
import { Category } from "./manageCategory/category";
import { useEffect, useState } from "react";
import axios from "axios";
import { SortCategory } from "./sortCategory";
import { AiOutlineArrowDown } from "react-icons/ai";
import { Image, Text, Box, Flex, Grid, GridItem, Button } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, incrementQuantity, updateSubTotal } from "../redux/cartSlice";

export const OrderMenu = ({ id, products }) => {
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.product.value);
  const cartItems = useSelector((state) => state.cart.items)
  
  const getProduct = async () => {
    let url = `http://localhost:2000/products`;
    try {
      if (id && id !== "1") {
        url += `/${id}`;
      }
      const result = await axios.get(url);
      const activeProducts = result.data.filter((item) => item.isActive);
      setProduct(activeProducts, products);
    } catch (err) {
      console.log(err);
    }
  };

  const getSortProduct = async () => {
    try {
      let sortUrl = `http://localhost:2000/products`;
      if (window.location.pathname === "/category/cheaper") {
        sortUrl += "/cheaper";
      } else if (window.location.pathname === "/category/expensive") {
        sortUrl += "/expensive";
      } else if (window.location.pathname === "/category/A-Z") {
        sortUrl += "/A-Z";
      } else if (window.location.pathname === "/category/Z-A") {
        sortUrl += "/Z-A";
      }
      const result = await axios.get(sortUrl);
      setProduct(result.data);
    } catch (err) {
      console.log(err);
    }
  };
  
  const handleAddToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      dispatch(incrementQuantity(product.id));
    } else {
      dispatch(addToCart({ ...product, quantity: 1, subTotal: product.productPrice }));
    }
  };

  useEffect(() => {
    if (
      window.location.pathname === "/category/cheaper" ||
      window.location.pathname === "/category/expensive" ||
      window.location.pathname === "/category/A-Z" ||
      window.location.pathname === "/category/Z-A"
    ) {
      getSortProduct();
    } else {
      getProduct();
    }
  }, [id]);
  
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Box
          w={"80%"}
          ml={"10%"}
          mb={"2%"}
          zIndex={20}
          display={{ base: "block", md: "none" }}
          position={"fixed"}
          bottom={"0"}
        >
          <DropBar />
        </Box>
        <Box display={{ base: "block", md: "none" }}>
          <MobileHeader />
        </Box>
        <Box
          bg={"#F1F3F4"}
          w={{ md: "131%", xl: "100%" }}
          pt={"20px"}
          h={"full"}
        >
          <Box
            w={{ base: "90%", md: "90%", lg: "95%" }}
            mx={{ base: "4%", md: "auto" }}
          >
            <Flex
              w={{ base: "100%", md: "98%", lg: "90%", xl: "90%" }}
              mx={"auto"}
              ml={{ md: "5%", lg: "auto", xl: "6.5%" }}
              columnGap={"2%"}
              justifyContent={"center"}
              overflowX={"auto"}
              overflowY={"hidden"}
              sx={{
                "&::-webkit-scrollbar": { display: "none" },
                scrollbarWidth: "none",
              }}
            >
              <Category />
            </Flex>
            <Flex
              mt={{ base: "30px", md: "4%" }}
              ml={{ base: "6%", md: "10%", lg: "0", xl: "45px" }}
              w={{ base: "355px", md: "full", lg: "full", xl: "95%" }}
              justifyContent={"space-between"}
            >
              <Box>Order Menu</Box>
              <Box>
                <SortCategory />
              </Box>
            </Flex>
            <Grid
              templateColumns={{
                base: "repeat(2,1fr)",
                md: "repeat(2,1fr)",
                lg: "repeat(4, 1fr)",
                xl: "repeat(4,1fr)",
                '2xl': "repeat(5,1fr)",
              }}
              ml={{ base: "3.5%", md: "12%", lg: "2%", xl: "35px" }}
              mt={{ base: "20%", md: "0%" }}
              columnGap={{ base: "6%", md: "15px" }}
            >
              {product
                .filter((item) => item.isActive)
                .map((item) => (
                  <GridItem
                    as={"Box"}
                    position={"relative"}
                    mt={{ base: "0", md: "20px" }}
                    mb={{ base: "30%", md: "0" }}
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                    bg={"white"}
                    w={{
                      base: "170px",
                      md: "200px",
                      lg: "170px",
                      xl: "200px",
                      "2xl": "200px",
                    }}
                    pt={{ base: "0", md: "10px" }}
                    rounded={{ base: "3xl", md: "md" }}
                    shadow={"2xl"}
                    pb={"8px"}
                  >
                    <Box display={"flex"} justifyContent={"center"}>
                      <Image
                        src={`http://localhost:2000/${item.urlProductImg}`}
                        position={{ base: "absolute", md: "block" }}
                        top={{ base: "-10", md: "2.5" }}
                        rounded={{ base: "full", md: "md" }}
                        h={{
                          base: "100px",
                          md: "140px",
                          xl: "120px",
                          "2xl": "120px",
                        }}
                      />
                    </Box>
                      <Box
                        w={{
                          base: "100px",
                          md: "180px",
                          lg: "150px",
                          xl: "180px",
                          "2xl": "180px",
                        }}
                        rounded={{ base: "full", md: "md" }}
                        h={{
                          base: "100px",
                          md: "140px",
                          xl: "120px",
                          "2xl": "120px",
                        }}
                      />
                    </Box>
                    <Box
                      w={{
                        base: "130px",
                        md: "180px",
                        lg: "150px",
                        xl: "180px",
                        "2xl": "180px",
                      }}
                      mt={{ base: "40%", md: "70%" }}
                      pb={"10px"}
                      display={"flex"}
                      flexDirection={"column"}
                      justifyContent={"start"}
                    >
                      <Text fontWeight={"bold"}>{item.productName}</Text>
                      <Text fontSize={"md"}>{item.productDescription}</Text>
                      <Text fontWeight={"bold"} color={"orange"}>
                        {item.productPrice.toLocaleString("id-ID", {style: "currency", currency: "IDR", minimumFractionDigits: 0})}
                      </Text>
                      <Text fontWeight={"bold"} fontSize={'sm'}> Stock: {item.productStock} </Text>
                      <Button
                        colorScheme="teal"
                        size="sm"
                        mt={2}
                        onClick={() => handleAddToCart(item)}
                      >
                        Add to Cart
                      </Button>
                    </Box>
                  </GridItem>
                ))}
                        mt={{ base: "40%", md: "70%" }}
                        pb={"10px"}
                        display={"flex"}
                        flexDirection={"column"}
                        justifyContent={"start"}
                      >
                        <Text fontWeight={"bold"}> {item.productName} </Text>
                        <Text fontWeight={"bold"} color={"orange"}> {item.productPrice.toLocaleString("id-ID", {style: "currency", currency: "IDR", minimumFractionDigits: 0})} </Text>
                        <Text fontWeight={"bold"} fontSize={'sm'}> Stock: {item.productStock} </Text>
                        <Button
                          colorScheme="teal"
                          size="sm"
                          mt={2}
                          onClick={() => handleAddToCart(item)}
                        >
                          Add to Cart
                        </Button>
                      </Box>
                    </GridItem>
                  )
                )
              )}
            </Grid>
          </Box>
        </Box>
      </motion.div>
    </>
  );
};
