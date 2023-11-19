import { Box, Flex, Grid, GridItem, Image } from "@chakra-ui/react";
import { Sidebar } from "../components/sidebar";
import { SearchBar } from "../components/searchBar";
import { SettingsMenu } from "../components/settingsMenu";
import { MdSecurity } from "react-icons/md";
import foodImg from "../assets/color-doodle-food-burger-pattern_1409-3918.avif";
import foodImg2 from "../assets/fast-food-background-linear-graphic-snack-collection-junk-food-engraved-top-view-illustration-vector-illustration_91128-1528.avif";
import {
  BrowserRouter as Router,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { MyProfile } from "../components/myProfile";
import { ManageCashiers } from "../components/manageCashiers";
import { ManageProducts } from "../components/manageProducts";
import { Security } from "../components/security";
import { AboutUs } from "../components/aboutUs";
import { CgProfile } from "react-icons/cg";
import { FiArchive, FiAlertCircle, FiUsers } from "react-icons/fi";

const Components = ({ match }) => {
  const { path } = match;

  switch (path) {
    case "/settings/my-profile":
      return <MyProfile />;
    case "/settings/manage-cashiers":
      return <ManageCashiers />;
    case "/settings/manage-products":
      return <ManageProducts />;
    case "/settings/security":
      return <Security />;
    case "/settings/about-us":
      return <AboutUs />;
    default:
      return null;
  }
};

export const SettingsPage = () => {
  const token = localStorage.getItem("token");
  const location = useLocation();
  const { pathname } = location;

  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <Grid
      templateAreas={{
        base: ` "subnav main"
                "subnav main"`,
        md: `"nav header header"
                "nav subnav main"
                "nav subnav main"`,
      }}
      gridTemplateRows={{
        base: "70px 1fr 50px",
        md: "70px 1fr 50px",
      }}
      gridTemplateColumns={{
        base: "60px 150px 1fr",
        md: "60px 280px 1fr",
        lg: "90px 250px 1fr",
        xl: "50px 300px 1fr",
        "2xl": "150px 350px 1fr",
      }}
    >
      <Box
        display={{ base: "none", md: "block" }}
        as={GridItem}
        area={"header"}
        w={"full"}
        position={"sticky"}
        top={"0"}
        zIndex={1}
      >
        <SearchBar />
      </Box>
      <Box
        display={{ base: "none", md: "block" }}
        as={GridItem}
        area={"nav"}
        h={"100vh"}
        position={"sticky"}
        top={"0"}
        zIndex={1}
      >
        <Sidebar />
      </Box>
      <Box
        display={{ base: "none", md: "block", lg: "none" }}
        ml={"18.5%"}
        mt={"5%"}
        w={"85vw"}
        h={"15vw"}
      >
        <Image
          objectFit={"cover"}
          w={"100%"}
          h={"100%"}
          rounded={"lg"}
          opacity={"90%"}
          border={"2px"}
          borderColor={"gray.200"}
          src={foodImg}
        />
      </Box>
      <Box
        display={{ base: "none", md: "block" }}
        px={"6px"}
        bg={"red"}
        m={"1rem"}
        pb={"9%"}
        mt={{ md: "26%", xl: "6.9%" }}
        ml={"110px"}
        alignItems={"center"}
        border={"1px solid"}
        borderColor={"gray.200"}
        rounded={"xl"}
        as={GridItem}
        area={"subnav"}
        position={"fixed"}
      >
        <SettingsMenu onNavigate={handleNavigation} />
      </Box>
      <Box
        display={{ base: "none", md: "block", lg: "none" }}
        position={"fixed"}
        h={"26.5vh"}
        w={"26.9vw"}
        bottom={"0.5%"}
        left={"12.5%"}
      >
        <Image
          objectFit={"cover"}
          w={"100%"}
          h={"100%"}
          rounded={"xl"}
          opacity={"90%"}
          src={foodImg2}
        />
      </Box>
      <Box
        display={{ base: "block", md: "flex" }}
        top={{ md: "20%", xl: "11.3%" }}
        w={{ base: "100vw", md: "509px", xl: "900px" }}
        minH={{ base: "90vh", md: "86.1vh" }}
        right={{ md: "2px", xl: "0" }}
        bg={"white"}
        my={{ base: "0", md: "1rem" }}
        mr={"1rem"}
        border={"1px solid"}
        borderColor={"gray.200"}
        rounded={{ base: "0", md: "xl" }}
        as={GridItem}
        area={"main"}
        position={"fixed"}
      >
        <Components match={{ path: pathname }} />
      </Box>
      <Box
        display={{ base: "block", md: "none" }}
        position={"fixed"}
        bottom={"20px"}
        left={"10%"}
        py={"16px"}
        w={"80%"}
        rounded={"lg"}
        bg={"pink"}
      >
        <Flex fontSize={"20px"} justifyContent={"space-around"}>
          <CgProfile
            cursor={"pointer"}
            onClick={() => handleNavigation("/settings/my-profile")}
          />
          <FiUsers
            cursor={"pointer"}
            onClick={() => handleNavigation("/settings/manage-cashiers")}
          />
          <FiArchive
            cursor={"pointer"}
            onClick={() => handleNavigation("/settings/manage-products")}
          />
          <MdSecurity
            cursor={"pointer"}
            onClick={() => handleNavigation("/settings/security")}
          />
          <FiAlertCircle
            cursor={"pointer"}
            onClick={() => handleNavigation("/settings/about-us")}
          />
        </Flex>
      </Box>
    </Grid>
  );
};
