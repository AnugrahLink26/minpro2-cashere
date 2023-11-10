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
  FormErrorMessage
} from '@chakra-ui/react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setData } from "../redux/userSlice";

YupPassword(Yup)

const LoginSchema = Yup.object().shape({
  username: Yup.string()
    .required("Username is required"),
  password: Yup.string()
    .password()
    .required("Password is required"),    
})

export function LoginTest() {
  const dispatch = useDispatch()

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
    <Flex
      align={'center'}
      justify={'center'}
    >
      <Stack >
        <Box
          p={8}>
          <Stack spacing={4}>
            <Heading fontSize={'2xl'}>Sign in to your account</Heading>
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
              {(errors) => {
                return (
                  <Form>
                    <FormControl id="username">
                      <FormLabel htmlFor="username">Username</FormLabel>
                      <Field
                        as={Input}
                        id="username"
                        name="username"
                        type="username"
                        variant="filled"
                      />
                      <FormErrorMessage>{errors.username}</FormErrorMessage>
                    </FormControl>
                    <FormControl id="password">
                      <FormLabel htmlFor="password">Password</FormLabel>
                      <Field
                        as={Input}
                        id="password"
                        name="password"
                        type="password"
                        variant="filled"                          
                      />
                      <FormErrorMessage>{errors.password}</FormErrorMessage>
                    </FormControl>
                    <Stack spacing={10}>
                      <Stack
                        direction={{ base: 'column', sm: 'row' }}
                        align={'start'}
                        justify={'space-between'}>
                        <Checkbox>Remember me</Checkbox>
                        <Text color={'blue.400'}>Forgot password?</Text>
                      </Stack>
                      <Button
                        type='submit'
                        bg={'blue.400'}
                        color={'white'}
                        _hover={{
                        bg: 'blue.500',
                        }}>
                        Login
                      </Button>
                    </Stack>
                  </Form>
                )
              }}
            </Formik>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}
