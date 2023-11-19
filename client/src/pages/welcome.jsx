import {
  Box,
  Heading,
  Container,
  Text,
  Stack,
  Button,
  Center
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';

export function Welcome() {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/login');
  }
  return (
    <Center w={'100%'} bg={'white'} h={'100vh'}>
      <Stack
        as={Box}
        textAlign={'center'}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 20, md: 36 }}>
        <Heading
          fontWeight={600}
          fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}>
          Welcome to <spacing/>
          <Text as={'span'} color={'#DB1783'}>
            Cashere
          </Text>
        </Heading>
        <Text color={'gray.500'}>
          Login to your account to proceed!
        </Text>
        <Box>
          <Button
            onClick={goToLogin}
            bg={'#DB1783'}
            color={'white'}
            _hover={{
              bg: "#FFD4E9",
              color: "#DB1783"
            }}>
            Login
          </Button>
        </Box>
      </Stack>
    </Center>
  )
}
