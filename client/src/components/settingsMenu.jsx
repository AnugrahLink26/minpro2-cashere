import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Spacer,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { FiArchive, FiAlertCircle, FiUsers } from "react-icons/fi";
import { MdSecurity } from "react-icons/md";
import { useSelector } from "react-redux";
import { ChangePassword } from "./security";

export function SettingsMenu() {
  const user = useSelector((state) => state.user.value);

  const iconSize = useBreakpointValue({
    base: "0px",
    sm: "20px",
    md: "30px",
    lg: "40px",
    xl: "30px",
    "2xl": "50px",
  });
  const headingSize = useBreakpointValue({
    base: "0px",
    md: "15px",
    lg: "18px",
    xl: "10px",
    "2xl": "20px",
  });

  const subMenuAdmin = [
    {
      icon: <CgProfile fontSize={iconSize} />,
      name: "My Profile",
      detail: "Edit profile & profile picture",
      to: "/settings/my-profile",
    },
    {
      icon: <FiUsers fontSize={iconSize} />,
      name: "Manage Cashiers",
      detail: "Update & delete cashier",
      to: "/settings/manage-cashiers",
    },
    {
      icon: <FiArchive fontSize={iconSize} />,
      name: "Manage Products",
      detail: "Update & delete products",
      to: "/settings/manage-products",
    },
    {
      icon: <MdSecurity fontSize={iconSize} />,
      name: "Security",
      detail: "Change Password",
      to: "/settings/security",
    },
    {
      icon: <FiAlertCircle fontSize={iconSize} />,
      name: "About Us",
      detail: "More about cashere",
      to: "/settings/about-us",
    },
  ];

  const subMenuCashier = [
    {
      icon: <CgProfile fontSize={iconSize} />,
      name: "My Profile",
      detail: "Edit profile & profile picture",
    },
    {
      icon: <MdSecurity fontSize={iconSize} />,
      name: "Security",
      detail: "Change Password",
    },
    {
      icon: <FiAlertCircle fontSize={iconSize} />,
      name: "About Us",
      detail: "More about cashere",
    },
  ];

  return (
    <Box>
      {subMenuAdmin.map((menu) => (
        <RouterLink to={menu.to}>
          <Box
            flexDirection={"column"}
            alignItems={"center"}
            mt={"20px"}
            py={"10px"}
            _hover={{
              bg: "#FFD4E9",
              color: "#DB1783",
              transitionDuration: "0.5s",
            }}
          >
            <Flex ml={"3%"}>
              <Center mx={"1%"}>{menu.icon}</Center>
              <Stack ml={"10px"}>
                <Heading fontSize={headingSize}>{menu.name}</Heading>
                <Text fontSize={"15px"}>{menu.detail}</Text>
              </Stack>
            </Flex>
          </Box>
        </RouterLink>
      ))}
    </Box>
  );
}
