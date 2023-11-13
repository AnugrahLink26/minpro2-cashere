import { Box, Center, Container, Flex, Heading, Spacer, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import { CgProfile } from "react-icons/cg";
import { FiArchive, FiAlertCircle, FiUsers } from "react-icons/fi";
import { MdSecurity } from "react-icons/md";
import { useSelector } from "react-redux";


export function SettingsMenu() {
    const user = useSelector((state) => state.user.value)

    const iconSize = useBreakpointValue({ base: '0px', sm: '20px', md: '30px', lg: '40px', xl: '50px' })
    const headingSize = useBreakpointValue({ base: '0px', md: '15px', lg: '18px', xl: '20px' })

    const subMenuAdmin = [
        { 'icon': <CgProfile fontSize={iconSize} />, 'name': 'My Profile', 'detail': 'Edit profile & profile picture' },
        { 'icon': <FiUsers fontSize={iconSize} />, 'name': 'Manage Cashiers', 'detail': 'Update & delete cashier' },
        { 'icon': <FiArchive fontSize={iconSize} />, 'name': 'Manage Products', 'detail': 'Update & delete products' },
        { 'icon': <MdSecurity fontSize={iconSize} />, 'name': 'Security', 'detail': 'Change Password' },
        { 'icon': <FiAlertCircle fontSize={iconSize} />, 'name': 'About Us', 'detail': 'Edit profile & profile picture' },
    ]

    const subMenuCashier = [
        { 'icon': <CgProfile fontSize={iconSize} />, 'name': 'My Profile', 'detail': 'Edit profile & profile picture' },
        { 'icon': <MdSecurity fontSize={iconSize} />, 'name': 'Security', 'detail': 'Change Password' },
        { 'icon': <FiAlertCircle fontSize={iconSize} />, 'name': 'About Us', 'detail': 'Edit profile & profile picture' },
    ]

    return (
        <Box>
            {subMenuAdmin.map((menu) => (
                <Box
                    flexDirection={"column"}
                    alignItems={"center"}
                    mt={'20px'}
                    py={'10px'}
                    _hover={{
                        bg: "#FFD4E9",
                        color: "#DB1783",
                        transitionDuration: "0.5s",
                    }}
                >
                    <Flex ml={'3%'}>
                        <Center mx={'1%'}>
                            {menu.icon}
                        </Center>
                        <Stack ml={'10px'}>
                            <Heading fontSize={headingSize}>
                                {menu.name}
                            </Heading>
                            <Text fontSize={'15px'}>
                                {menu.detail}
                            </Text>
                        </Stack>
                    </Flex>
                </Box>
            ))}
        </Box>
    )
}
