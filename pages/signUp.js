import { Formik } from 'formik';
import schema from '../components/schema'

import {
  Text,
  Input,
  VStack,
  FormControl,
  FormErrorMessage,
  Button,
  Link
} from '@chakra-ui/react'



export default function SignUp() {

  return (
    <div>
      <Formik
        validationSchema={schema}
        initialValues={{
          name: '',
          username: '',
          email: '',
          password: '',
        }
      }

        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
          }, 1000);
        }}
      >
        {({
          values,
          errors,
          handleChange,
          handleBlur,
          handleSubmit
        }) => (

          <form onSubmit={handleSubmit}>
            <VStack
              alignItems='center'
              p='5'
            >
              <Text
                mb='5'
                fontSize='2xl'
                fontWeight='bold'
                textShadow='1px 1px #F0FFFF'
              >
                Crie sua conta
              </Text>
              <VStack spacing='3'>
                <Input
                  name='name'
                  type='text'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  placeholder='Digite seu nome completo'
                  variant='flushed'
                  size='lg'
                />
                <FormErrorMessage>{errors.name}</FormErrorMessage>
                <Input
                  name='username'
                  type='text'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                  placeholder='Digite seu nome de usuário'
                  variant='flushed'
                  size='lg'
                />
                <FormErrorMessage>{errors.username}</FormErrorMessage>
                <Input
                  name='email'
                  type='email'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder='Digite seu email'
                  variant='flushed'
                  size='lg'
                />
                <FormErrorMessage>{errors.email}</FormErrorMessage>

                <Input
                  name='password'
                  type='password'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder='Digite uma senha'
                  variant='flushed'
                  size='lg'
                />
                <FormErrorMessage>{errors.password}</FormErrorMessage>

              </VStack>
              <Button
                type='submit'
                //disabled={isSubmitting}
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
              <Text m='4'>
                Se tiver uma conta, clique aqui.
              </Text>
            </VStack>
          </form>

        )}

      </Formik>

    </div>
  )
}

