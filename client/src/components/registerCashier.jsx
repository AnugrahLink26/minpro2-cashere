import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
} from '@chakra-ui/react'
import { useState } from 'react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";

YupPassword(Yup)

const RegisterSchema = Yup.object().shape({
    fullname: Yup.string()
        .required("Fullname is required"),
    username: Yup.string()
        .min(3, "Username must be 3 characters at minimum")
        .required("Username is required"),
    email: Yup.string()
        .email("Invalid email address format")
        .required("Email is required"),
    password: Yup.string()
        .password()
        .required("Password is required"),
    passwordConfirmation: Yup.string()
        .oneOf([Yup.ref('password')], 'Password must match!')       
        .required('Password confirmation is required')
})

export default function RegisterCashier({ onClose }) {
    const [showPassword, setShowPassword] = useState(false)
    const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false)

    const handleSubmit = async (data) => {
        try {
            await axios.post("http://localhost:2000/admins/register-cashier", data)
            alert("Register Success")
            onClose()
        } catch (error) {
            console.log(error);
            alert("Error")
        }
    }

    return (
        <Stack spacing={8} mx={'auto'} py={8} px={6}>
            <Stack align={'center'}>
                <Heading fontSize={'4xl'} textAlign={'center'}>
                    Register
                    <Heading color={'#DB1783'}>Cashier Account</Heading>
                </Heading>
            </Stack>
            <Formik
                initialValues={{
                    fullname: '',
                    username: '',
                    email: '',
                    password: '',
                    passwordConfirmation: ''
                }}
                validationSchema={RegisterSchema}
                onSubmit={(values, action) => {
                    handleSubmit(values)
                    action.resetForm()
                }}
            >
                <Form>
                    <Stack spacing={4}>
                        <FormControl id="fullname" isRequired>
                            <FormLabel>First Name</FormLabel>
                            <Field
                                as={Input}
                                id="fullname"
                                name="fullname"
                                type="fullname"
                                variant="filled"
                                bg='#FFD4E9'
                            />
                        </FormControl>
                        <ErrorMessage
                            component="FormControl"
                            name="fullname"
                            style={{ color: "red"}}
                        />
                        <FormControl id="username" isRequired>
                            <FormLabel>Username</FormLabel>
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
                        <FormControl id="email" isRequired>
                            <FormLabel>Email address</FormLabel>
                            <Field
                                as={Input}
                                id="email"
                                name="email"
                                type="email"
                                variant="filled"
                                bg='#FFD4E9'
                            />
                            <ErrorMessage
                                component="FormControl"
                                name="email"
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
                        <Stack spacing={10} pt={2}>
                            <Button
                                type='submit'
                                loadingText="Submitting"
                                size="lg"
                                bg={'#DB1783'}
                                color={'white'}
                                isLoading={false}
                                _hover={{ bg: '#FFD4E9', color: '#DB1783' }}
                            >
                                Register
                            </Button>
                        </Stack>
                    </Stack>
                </Form>
            </Formik>
        </Stack>
    )
}