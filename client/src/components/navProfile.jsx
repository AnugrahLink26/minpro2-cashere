import {
  Box,
  Text,
  Flex,
  Avatar,
  Center,
  Button,
  Spacer,
  useBreakpointValue,
  Stack,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { FiPlus } from "react-icons/fi";

export function NavProfile() {
    const user = useSelector((state) => state.user.value);
    const token = localStorage.getItem("token")

    const profileWidth = useBreakpointValue({ base: '0px', sm: '200px', md: '300px', lg: '400px', xl: '500px' })

    return (
        <Box alignItems={"center"} w={profileWidth}>
            {
                token ? 
                <Flex >
                    <Flex ml={'8%'}>
                        <Avatar 
                            size={'md'}
                            name={user.username}
                            ref={user.urlPhotoProfile}
                        />
                        <Stack ml={"10px"} >
                            <Text fontSize={"sm"} fontWeight={"bold"}>
                                {user.username}
                            </Text>
                            <Text fontSize={"sm"}>
                                { user.isAdmin ? 'Admin' : 'Cashier' }
                            </Text>
                        </Stack>
                    </Flex>
                    <Spacer />
                    <Flex mr={'8%'} alignItems={'center'}>
                        <Button 
                            bg={'#DB1783'}
                            color={'white'}
                            variant='solid'
                            _hover={{
                                bg: '#FFD4E9',
                                color: '#DB1783'
                        }}>
                            <FiPlus />
                            Register Cashier
                        </Button>
                    </Flex>
                </Flex>
                :
                <Flex>
                    <Avatar size={"md"}/>
                    <Center>
                        <Text ml={"10px"} fontSize={"sm"} fontWeight={"bold"}>Not logged in</Text>
                    </Center>
                </Flex>
            }
        </Box>
    )
}
