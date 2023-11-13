import {
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

const ChangePasswordSchema = Yup.object().shape({
  oldPassword: Yup.string()
    .password()
    .required("Password is required"),
  newPassword: Yup.string()
    .password()
    .notOneOf([Yup.ref('oldPassword')], 'New password cannot be the same as the old password')       
    .required('New password is required'),     
  newPasswordConfirmation: Yup.string()
    .password()
    .oneOf([Yup.ref('newPassword')], 'New password must match!')       
    .required('New password confirmation is required')   
})

export function ChangePassword() {
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
              my={3}
            >
              <FiLogIn fontSize={"20px"} />
            </Box>
          </Center>
          <Formik
            initialValues={{
              oldPassword: '',
              newPassword: '',
              newPasswordConfirmation
            }}
            validationSchema={LoginSchema}
            onSubmit={(values, action) => {
              handleSubmit(values)
              action.resetForm()
            }}
          >
            <Form>
              <FormControl id="oldPassword" isRequired>
                <FormLabel>Current Password</FormLabel>
                <InputGroup>
                    <Field
                        as={Input}
                        id="oldPassword"
                        name="oldPassword"
                        type={showPassword ? 'text' : 'oldPassword'}
                        variant="filled"
                        bg='#FFD4E9'
                    />
                    <InputRightElement h={'full'}>
                        <Button
                            variant={'ghost'}
                            onClick={() => setShowPassword((showPassword) => !showPassword)}>
                            {showPassword ? <ViewIcon/> : <ViewOffIcon/>}
                        </Button>
                    </InputRightElement>
                </InputGroup>
                <ErrorMessage
                    component="FormControl"
                    name="oldPassword"
                    style={{ color: "red"}}
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                    <Field
                        as={Input}
                        id="password"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        variant="filled"
                        bg='#FFD4E9'
                    />
                    <InputRightElement h={'full'}>
                        <Button
                            variant={'ghost'}
                            onClick={() => setShowPassword((showPassword) => !showPassword)}>
                            {showPassword ? <ViewIcon/> : <ViewOffIcon/>}
                        </Button>
                    </InputRightElement>
                </InputGroup>
                <ErrorMessage
                    component="FormControl"
                    name="password"
                    style={{ color: "red"}}
                />
              </FormControl>
              <FormControl id="passwordConfirmation" isRequired>
                  <FormLabel>Password Confirmation</FormLabel>
                  <InputGroup>
                      <Field
                          as={Input}
                          id="passwordConfirmation"
                          name="passwordConfirmation"
                          type={showPasswordConfirmation ? 'text' : 'password'}
                          variant="filled"
                          bg='#FFD4E9'
                      />
                      <InputRightElement h={'full'}>
                          <Button
                              variant={'ghost'}
                              onClick={() => setShowPasswordConfirmation((showPasswordConfirmation) => !showPasswordConfirmation)}>
                              {showPasswordConfirmation ? <ViewIcon/> : <ViewOffIcon/>}
                          </Button>
                      </InputRightElement>
                  </InputGroup>
                  <ErrorMessage
                      component="FormControl"
                      name="passwordConfirmation"
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
          </Formik>
        </Stack>
      </Box>
    </Stack>
  )
}
