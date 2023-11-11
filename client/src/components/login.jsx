import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  Center,
  FormErrorMessage,
  useBreakpointValue
} from '@chakra-ui/react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setData } from "../redux/userSlice";
import { FiLogIn } from "react-icons/fi";

YupPassword(Yup)

const LoginSchema = Yup.object().shape({
  username: Yup.string()
    .required("Username is required"),
  password: Yup.string()
    .password()
    .required("Password is required"),    
})

export function Login() {
  const dispatch = useDispatch()

  const formWidth = useBreakpointValue({ base: '0px', sm: '150px', md: '250px', lg: '350px', xl: '450px' })

  const handleSubmit = async (data) => {
    try {
      const response = await axios.get(`http://localhost:2000/users/login?username=${data.username}&password=${data.password}`)
      if (response.data.token) {
        dispatch(setData(response.data.checkLogin));
        localStorage.setItem("token", response.data?.token);
        window.location.reload();
      } else {
        alert("Account not found");
      }
    } catch (error) {
      console.log(error);
    }
  }  

  return (
    <Stack >
      <Box py={10} w={formWidth}>
        <Stack spacing={4}>
          <Center display={'flex'} flexDirection={'column'}>
            <Heading fontSize={'2xl'}>Login to your account</Heading>
            <Box
              w={"40px"}
              h={"40px"}
              bg={"#ED0A72"}
              borderRadius="50%"
              display="flex"
              alignItems="center"
              justifyContent="center"
              color="white"
              my={2}
            >
              <FiLogIn fontSize={"20px"} />
            </Box>
          </Center>
          <Formik
            initialValues={{
              username: '',
              password: ''
            }}
            validationSchema={LoginSchema}
            onSubmit={(values, action) => {
              handleSubmit(values)
              action.resetForm()
            }}
          >
            {(props) => {
              return (
                <Form>
                  <FormControl id="username" mb={5}>
                    <FormLabel htmlFor="username">Username</FormLabel>
                    <Field
                      as={Input}
                      id="username"
                      name="username"
                      type="username"
                      variant="filled"
                      bg='#FFD4E9'
                      
                    />
                    <ErrorMessage
                      component="FormControl"
                      name="username"
                      style={{ color: "red"}}
                    />
                  </FormControl>
                  <FormControl id="password" mb={5}>
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <Field
                      as={Input}
                      id="password"
                      name="password"
                      type="password"
                      variant="filled"
                      bg='#FFD4E9'                          
                      class="
                        bg-gray-50 border 
                        border-gray-500 
                        text-gray-900 
                        text-sm 
                        rounded-lg 
                        block 
                        w-full 
                        p-2.5 
                      "
                    />
                    <ErrorMessage
                      component="FormControl"
                      name="password"
                      style={{ color: "red"}}
                    />
                  </FormControl>
                  <Stack spacing={5}>
                    <Checkbox>Remember me</Checkbox>
                    <Button
                      type='submit'
                      bg={'#DB1783'}
                      color={'white'}
                      _hover={{
                      bg: '#FFD4E9',
                      color: '#DB1783'
                    }}>
                      Login
                    </Button>
                    <Text color={'#DB1783'}>Forgot password?</Text>
                  </Stack>
                </Form>
              )
            }}
          </Formik>
        </Stack>
      </Box>
    </Stack>
  )
}
