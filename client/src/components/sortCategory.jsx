import React, { useState, useEffect } from "react";
import { Box, Flex, Select } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const SortCategory = () => {
  const navigate = useNavigate();
  const [sortOption, setSortOption] = useState("Sort");

  const handleSortChange = (event) => {
    const selectedOption = event.target.value;

    if (selectedOption === "A-Z") {
      navigate("/category/A-Z");
      window.location.reload();
    } else if (selectedOption === "Z-A") {
      navigate("/category/Z-A");
      window.location.reload();
    } else if (selectedOption === "cheaper") {
      navigate("/category/cheaper");
      window.location.reload();
    } else if (selectedOption === "expensive") {
      navigate("/category/expensive");
      window.location.reload();
    } else {
      setSortOption(selectedOption);
    }
  };

  useEffect(() => {
    setSortOption(window.location.pathname.split("/").pop() || "Sort");
  }, [window.location.pathname, sortOption]);

  return (
    <Box>
      <Flex align="center">
        <Select value={sortOption} onChange={handleSortChange}>
          <option value="Sort">Sort</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
          <option value="cheaper">cheaper</option>
          <option value="expensive">expensive</option>
        </Select>
      </Flex>
    </Box>
  );
};
