import {
  Box,
  Heading,
  Container,
  Text,
  Stack,
  Center,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useBreakpointValue,
} from '@chakra-ui/react'
import AddProduct from './addProduct'
import { FiPlus } from "react-icons/fi";
import React from "react";
import { SettingsPage } from "../pages/settingPage";

export function ManageProducts() {
  const modalSize = useBreakpointValue({
    base: "full",
    sm: "sm",
    md: "md",
    lg: "lg",
    xl: "xl",
  });

  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);

  return (
    <>
      <SettingsPage />

// Ini yang anugrah
//       <Container maxW={'3xl'}>
//         <Stack
//           as={Box}
//           textAlign={'center'}
//           spacing={{ base: 8, md: 14 }}
//           py={{ base: 20, md: 36 }}>
//           <Heading
//             fontWeight={600}
//             fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
//             lineHeight={'110%'}
//           >
//             Welcome to
//           </Heading>
//           <Heading fontWeight={600}
//             fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
//             lineHeight={'110%'}
//             as={'span'}
//             color={'#DB1783'}
//           >
//             Manage Products Page
//           </Heading>
//           <Center>
//             <Button
//               bg={"#DB1783"}
//               color={"white"}
//               variant="solid"
//               leftIcon={<FiPlus />}
//               onClick={onOpen}
//               _hover={{
//                 bg: "#FFD4E9",
//                 color: "#DB1783",
//               }}
//             >
//               Add Product
//             </Button>
//             <Modal
//               finalFocusRef={finalRef}
//               isOpen={isOpen}
//               onClose={onClose}
//               size={modalSize}
//               isCentered
//             >
//               <ModalOverlay />
//               <ModalContent bg={"white"}>
//                 <ModalCloseButton />
//                 <ModalBody>
//                   <AddProduct onClose={onClose} />
//                 </ModalBody>
//               </ModalContent>
//             </Modal>
//           </Center>
//         </Stack>
//       </Container>
    </>
  );
}
