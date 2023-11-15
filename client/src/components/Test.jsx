import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
} from '@chakra-ui/react';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AddProductSchema = Yup.object().shape({
  productName: Yup.string().required('Product name is required'),
  productPrice: Yup.number().required('Product Price is required'),
  productDescription: Yup.string().required('Product Description is required'),
  productStock: Yup.number().required('Product Stock is required'),
  urlProductImg: Yup.mixed().required('Product Image is required'),
});

export default function AddProduct({ onClose }) {
  const handleSubmit = async (values, actions) => {
    const formData = new FormData();
    formData.append('productName', values.productName);
    formData.append('productPrice', values.productPrice);
    formData.append('productDescription', values.productDescription);
    formData.append('productStock', values.productStock);
    formData.append('urlProductImg', values.urlProductImg);

    try {
      await axios.post('http://localhost:2000/products/add-product', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('Product successfully added!');
      onClose();
    } catch (error) {
      console.log(error);
      alert('Failed to add product');
    } finally {
      actions.resetForm();
      actions.setSubmitting(false);
    }
  };

  return (
    <Stack spacing={8} mx={'auto'} py={8} px={6}>
      <Stack align={'center'}>
        <Heading fontSize={'4xl'} textAlign={'center'}>
          Add
          <Heading color={'#DB1783'}>Product</Heading>
        </Heading>
      </Stack>
      <Formik
        initialValues={{
          productName: '',
          productPrice: '',
          productDescription: '',
          productStock: '',
          urlProductImg: null,
        }}
        validationSchema={AddProductSchema}
        onSubmit={(values, actions) => {
          handleSubmit(values, actions);
        }}
      >
        {({ values, setFieldValue, isSubmitting }) => (
          <Form>
            <Stack spacing={4}>
              <FormControl id="urlProductImg" isRequired>
                <FormLabel>Product Image</FormLabel>
                <Input
                  id="urlProductImg"
                  name="urlProductImg"
                  type="file"
                  variant="filled"
                  bg="#FFD4E9"
                  onChange={(event) => {
                    setFieldValue('urlProductImg', event.currentTarget.files[0]);
                  }}
                />
              </FormControl>
              <ErrorMessage
                component="FormControl"
                name="urlProductImg"
                style={{ color: 'red' }}
              />
              {/* Other form fields */}
              <FormControl id="productName" isRequired>
                {/* ... */}
              </FormControl>
              {/* ... */}
              <Stack spacing={10} pt={2}>
                <Button
                  type="submit"
                  loadingText="Submitting"
                  size="lg"
                  bg={'#DB1783'}
                  color={'white'}
                  isLoading={isSubmitting}
                  _hover={{ bg: '#FFD4E9', color: '#DB1783' }}
                >
                  Register
                </Button>
              </Stack>
            </Stack>
          </Form>
        )}
      </Formik>
    </Stack>
  );
}
