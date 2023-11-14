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
  useBreakpointValue,
  InputGroup,
  InputRightElement
} from '@chakra-ui/react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setData } from "../redux/userSlice";
import { FiLogIn } from "react-icons/fi";
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

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

export function Security() {
  const dispatch = useDispatch()

  const [showOldPassword, setShowOldPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showNewPasswordConfirmation, setShowNewPasswordConfirmation] = useState(false)

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
              newPasswordConfirmation: ''
            }}
            validationSchema={ChangePasswordSchema}
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
                        type={showOldPassword ? 'text' : 'password'}
                        variant="filled"
                        bg='#FFD4E9'
                    />
                    <InputRightElement h={'full'}>
                        <Button
                            variant={'ghost'}
                            onClick={() => setShowOldPassword((showOldPassword) => !showOldPassword)}>
                            {showOldPassword ? <ViewIcon/> : <ViewOffIcon/>}
                        </Button>
                    </InputRightElement>
                </InputGroup>
                <ErrorMessage
                    component="FormControl"
                    name="oldPassword"
                    style={{ color: "red"}}
                />
              </FormControl>
              <FormControl id="newPassword" isRequired>
                <FormLabel>New Password</FormLabel>
                <InputGroup>
                    <Field
                        as={Input}
                        id="newPassword"
                        name="newPassword"
                        type={showNewPassword ? 'text' : 'password'}
                        variant="filled"
                        bg='#FFD4E9'
                    />
                    <InputRightElement h={'full'}>
                        <Button
                            variant={'ghost'}
                            onClick={() => setShowNewPassword((showNewPassword) => !showNewPassword)}>
                            {showNewPassword ? <ViewIcon/> : <ViewOffIcon/>}
                        </Button>
                    </InputRightElement>
                </InputGroup>
                <ErrorMessage
                    component="FormControl"
                    name="newPassword"
                    style={{ color: "red"}}
                />
              </FormControl>
              <FormControl id="newPasswordConfirmation" isRequired>
                  <FormLabel>Password Confirmation</FormLabel>
                  <InputGroup>
                      <Field
                          as={Input}
                          id="newPasswordConfirmation"
                          name="newPasswordConfirmation"
                          type={showNewPasswordConfirmation ? 'text' : 'password'}
                          variant="filled"
                          bg='#FFD4E9'
                      />
                      <InputRightElement h={'full'}>
                          <Button
                              variant={'ghost'}
                              onClick={() => setShowNewPasswordConfirmation((showNewPasswordConfirmation) => !showNewPasswordConfirmation)}>
                              {showNewPasswordConfirmation ? <ViewIcon/> : <ViewOffIcon/>}
                          </Button>
                      </InputRightElement>
                  </InputGroup>
                  <ErrorMessage
                      component="FormControl"
                      name="newPasswordConfirmation"
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
                  Change Password
                </Button>
              </Stack>
            </Form>
          </Formik>
        </Stack>
      </Box>
    </Stack>
  )
}
