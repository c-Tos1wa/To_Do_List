import useState from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {
  Text,
  Input,
  VStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,
  Link
} from '@chakra-ui/react'


export default function SignUp() {

  const formik = useFormik({
    initialValues: {
      name: '',
      username: '',
      email: '',
      password: ''
    },
    validationSchema: yup.object().shape({
      name: yup
        .string()
        .max(20, 'Nome de ve ter menos de 20 letras')
        .required("Este campo é obrigatório!"),
      username: yup
        .string()
        .min(2)
        .required('Este campo é obrigatório'),
      email: yup
        .string()
        .email()
        .required('Email é obrigatório'),
      password: yup
        .string()
        .required('Entre com uma senha')
        .matches(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
          'A senha deve conter no minimo 8 dígitos com letras maiúsculas e minúsculas e um caracter especial'
        )
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <>

      <VStack
        //bgColor='brand.500'
        alignItems='center'
        p='5'
      >
        <Text
          mb='5'
          fontSize='3xl'
          fontWeight='bold'
          textShadow='1px 1px #F0FFFF'
        >
          Crie sua conta
        </Text>
        <form onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit(e)
        }}>
          <VStack
            bgColor='#F0FFFF'
            borderWidth='1px'
            borderRadius='5'
            p='5'>
            <FormControl id='name'>
              <FormLabel>
                Nome
              </FormLabel>
              <Input
                type='text'
                name='name'
                placeholder='nome_completo'
                variant='flushed'
                size='lg'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name && <FormErrorMessage>{formik.errors.name}</FormErrorMessage>}
            </FormControl>
            <FormControl id='username'>
              <FormLabel>
                Username
              </FormLabel>
              <Input
                type='text'
                name='username'
                placeholder='username'
                variant='flushed'
                size='lg'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.username}
              />
            </FormControl>
            <FormControl id='email'>
              <FormLabel>
                Email
              </FormLabel>
              <Input
                type='email'
                name='email'
                placeholder='teste@teste.com.br'
                variant='flushed'
                size='lg'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
            </FormControl>
            <FormControl id='password'>
              <FormLabel>
                Senha
              </FormLabel>
              <Input
                type='password'
                name='password'
                placeholder='********'
                variant='flushed'
                size='lg'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
            </FormControl>
            <Button
              mt='5'
              p='3'
              bgColor='brand.700'
              color='gray.50'
              borderRadius='5'
              _hover={{
                bgColor: 'gray.50',
                color: 'brand.700'
              }}
            >
              CRIAR
            </Button>
          </VStack>
          <Text
            m='4'
          >
            Se tiver uma conta, clique aqui.
          </Text>
        </form>
      </VStack>

    </>
  )
}

