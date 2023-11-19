import { Box, Flex } from "@chakra-ui/react";
import { BsCart } from "react-icons/bs";
import { FiHome, FiSettings } from "react-icons/fi";
import { VscGraph } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

export const DropBar = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/settings/my-profile");
  };

  return (
    <Box
      as={Flex}
      w={"100%"}
      justifyContent={"space-around"}
      rounded={"2xl"}
      py={"4%"}
      bg={"pink"}
    >
      <Box
        _focus={{ color: "red" }}
        fontWeight={"semibold"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        cursor={"pointer"}
      >
        <FiHome />
        Home
      </Box>
      <Box
        fontWeight={"semibold"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        cursor={"pointer"}
        onClick={handleOnClick}
      >
        <FiSettings />
        Settings
      </Box>
      <Box
        fontWeight={"semibold"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        cursor={"pointer"}
      >
        <VscGraph />
        Report
      </Box>
      <Box
        fontWeight={"semibold"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        cursor={"pointer"}
      >
        <BsCart />
        My Order
      </Box>
    </Box>
  );
};
