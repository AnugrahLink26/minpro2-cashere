import React, { useRef } from 'react'
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  useDisclosure, 
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton
} from '@chakra-ui/react'
import { LoginTest } from './LoginTest'
import { useSelector } from 'react-redux'

export function HomeNotLoginTest() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const userData = useSelector((state) => state.value)
  const initialRef = useRef(null)
  const finalRef = useRef(null)

  return (
    <>
      <Container maxW={'3xl'}>
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
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            <Button
              colorScheme={'green'}
              bg={'#DB1783'}
              rounded={'full'}
              px={6}
              onClick={onOpen}
              _hover={{
                bg: '#E89ECA',
              }}>
              Login
            </Button>
            <Modal 
              isOpen={isOpen} 
              onClose={onClose} 
              initialFocusRef={initialRef}
              finalFocusRef={finalRef}
              size={'sm'}
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader />
                <ModalCloseButton />
                <ModalBody>
                  <LoginTest />
                </ModalBody>
              </ModalContent>
            </Modal>
          </Stack>
        </Stack>
      </Container>
    </>
  )
}
