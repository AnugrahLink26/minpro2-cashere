import { Box, Flex } from "@chakra-ui/react";

import { GrFavorite } from "react-icons/gr";
import { BsTicketPerforated, BsCart } from "react-icons/bs";
import { FiHome } from "react-icons/fi";

export const DropBar = () => {
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
      >
        <FiHome />
        All Menu
      </Box>
      <Box
        fontWeight={"semibold"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <GrFavorite />
        Favorite
      </Box>
      <Box
        fontWeight={"semibold"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <BsTicketPerforated />
        Promo
      </Box>
      <Box
        fontWeight={"semibold"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <BsCart />
        My Order
      </Box>
    </Box>
  );
};
