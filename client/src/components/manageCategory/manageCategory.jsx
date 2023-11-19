import { Box, Flex, Grid, GridItem, Button } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { AddModalCategory } from "./addModalCategory";
import { ModalDeleteCategory } from "./modalDeleteCategory";
import { ModalEditCategory } from "./modalEditCategory";
import { AiFillEdit, AiTwotoneDelete } from "react-icons/ai";

export const ManageCategory = () => {
  const [categories, setCategories] = useState([]);
  const [addCategoryModal, setAddCategoryModal] = useState(false);
  const [deleteCategoryModal, setDeleteCategoryModal] = useState(false);
  const [editCategoryModal, setEditCategoryModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await axios.get(`http://localhost:2000/categories`);
        setCategories(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getCategories();
  }, []);

  const handleAddCategory = (categoryName) => {
    console.log("Adding new category", categoryName);
    // Add logic to send a request to add a new category
  };

  const handleDeleteCategory = (categoryId) => {
    setCategories((prevCategories) =>
      prevCategories.filter((category) => category.id !== categoryId)
    );
    // Add logic to send a request to delete the category
  };

  const handleEditCategory = (categoryId, newCategoryName) => {
    setCategories((prevCategories) =>
      prevCategories.map((category) =>
        category.id === categoryId
          ? { ...category, category: newCategoryName }
          : category
      )
    );
    // Add logic to send a request to edit the category
  };

  const handleAddCategoryButtonClick = () => {
    setAddCategoryModal(true);
  };

  const handleAddCategoryModalClose = () => {
    setAddCategoryModal(false);
  };

  const handleDeleteCategoryModalOpen = (category) => {
    setSelectedCategory(category);
    setDeleteCategoryModal(true);
  };

  const handleDeleteCategoryModalClose = () => {
    setSelectedCategory(null);
    setDeleteCategoryModal(false);
  };

  const handleEditCategoryModalOpen = (category) => {
    setSelectedCategory(category);
    setEditCategoryModal(true);
  };

  const handleEditCategoryModalClose = () => {
    setSelectedCategory(null);
    setEditCategoryModal(false);
  };

  return (
    <>
      <Grid
        bg={"white"}
        px={"20px"}
        mt={"20px"}
        templateColumns={{ md: "repeat(4,1fr)", xl: "repeat(6,1fr)" }}
        columnGap={"20px"}
        rowGap={"20px"}
      >
        <GridItem
          textAlign={"center"}
          pt={"12px"}
          rounded={"md"}
          transitionDuration={"0.3s"}
          cursor={"pointer"}
          fontWeight={"semibold"}
          bg={"pink"}
          _hover={{
            boxShadow: "0 4px 7px rgba(255, 182, 193, 0.5)",
          }}
          onClick={handleAddCategoryButtonClick}
        >
          Add new category
        </GridItem>
        {categories.map((item) => (
          <GridItem
            key={item.id}
            textAlign={"center"}
            pt={"8px"}
            rounded={"md"}
            cursor={"pointer"}
            transitionDuration={"0.3s"}
            bg={"pink"}
            _hover={{
              boxShadow: "0 4px 7px rgba(255, 182, 193, 0.5)",
            }}
          >
            {item?.category}
            <Flex columnGap={"4px"} pl={"5px"} pb={"4px"}>
              <Box
                _hover={{ color: "red" }}
                transitionDuration={"0.3s"}
                onClick={() => handleDeleteCategoryModalOpen(item)}
              >
                <AiTwotoneDelete />
              </Box>
              <Box
                _hover={{ color: "yellow.200" }}
                transitionDuration={"0.3s"}
                onClick={() => handleEditCategoryModalOpen(item)}
              >
                <AiFillEdit />
              </Box>
            </Flex>
          </GridItem>
        ))}
      </Grid>
      <AddModalCategory
        isOpen={addCategoryModal}
        onClose={handleAddCategoryModalClose}
        onAddCategory={handleAddCategory}
      />
      {selectedCategory && (
        <ModalDeleteCategory
          isOpen={deleteCategoryModal}
          onClose={handleDeleteCategoryModalClose}
          onDelete={handleDeleteCategory}
          category={selectedCategory}
        />
      )}
      {selectedCategory && (
        <ModalEditCategory
          isOpen={editCategoryModal}
          onClose={handleEditCategoryModalClose}
          onEdit={handleEditCategory}
          category={selectedCategory}
        />
      )}
    </>
  );
};
