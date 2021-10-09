import React from "react";
import { Formik } from 'formik'
import { Input, Text, VStack, Button, Flex } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { login } from "./api/auth/api";

export default function Login() {

  const router = useRouter();
  const [error, setError] = React.useState(false);

  return (
    <>

      <Flex bgGradient='linear-gradient(90deg,#11AEEB, #35F39D)' alignItems='center' justifyContent='center'>

        <VStack justifyContent='center' alignItems='center' my='5'>
          <Formik
            initialValues={{
              userName: '',
              email: '',
              passwordHash: '',
            }}
            validate={values => {
              const errors = {}
              if (!values.userName) {
                errors.userName = 'Nome de usuário é obrigatório'
              } if (!values.email) {
                errors.email = 'Email é obrigatório'
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = 'Email inválido'
              }
              if (!values.passwordHash) {
                errors.passwordHash = 'Senha é obrigatória'
              }
              return errors
            }}

            onSubmit={async (values) => {
              try {
                await login(
                  values.userName,
                  values.email,
                  values.passwordHash,
                );
                router.push("/home");
              } catch (err) {
                console.error(err);
                setError(true);
              }
            }
            } >
            {({
              values, errors, handleChange, handleBlur, handleSubmit
            }) => (

              <form onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(e)
              }}
              >
                <VStack spacing='5' alignItems='center' justifyContent='center'>


                  <Input
                    focusBorderColor="lime"
                    name='userName'
                    type='text'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.userName}
                    placeholder='Digite seu nome de usuário'
                    variant="outline"
                    size='lg'
                  />
                  <Text>{errors.userName}</Text>

                  <Input
                    focusBorderColor="lime"
                    name='email'
                    type='email'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder='Digite seu email'
                    variant="outline"
                    size='lg'
                  />
                  <Text>{errors.email}</Text>

                  <Input
                    focusBorderColor="lime"
                    name='passwordHash'
                    type='password'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.passwordHash}
                    placeholder='Digite uma senha'
                    variant="outline"
                    size='lg'
                  />
                  <Text>{errors.passwordHash}</Text>

                  <Button
                    type='submit'
                    mt='5' p='3'
                    bgColor='brand.700'
                    color='gray.50'
                    borderRadius='5'
                    _hover={{
                      bgColor: 'gray.50',
                      color: 'brand.700'
                    }}
                  >
                    LOG IN
                  </Button>

                </VStack>

              </form>
            )}
          </Formik>
        </VStack>
      </Flex>
    </>
  )
}