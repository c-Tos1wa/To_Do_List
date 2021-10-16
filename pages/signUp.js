import React from "react";
import { Formik } from 'formik'
import { Input, Text, VStack, Button, Flex, Container } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { signup } from "./api/auth/api";

export default function SignUp() {

  const router = useRouter();
  const [error, setError] = React.useState(false);
  // const [userName, setUsername] = React.useState("");
  // const [email, setEmail] = React.useState(""); 
  // const [passwordHash, setPasswordHash] = React.useState("");
  // const [name, setName] = React.useState("");
  // const [lastName, setLastName] = React.useState("");

  return (
    <>

      <Flex bgGradient='linear-gradient(90deg,#11AEEB, #35F39D)' 
      alignItems='center' justifyContent='center' minHeight='100vh'>

        <VStack justifyContent='center' alignItems='center' my='5'>
          <Formik
            initialValues={{
              userName: '',
              email: '',
              passwordHash: '',
              name: '',
              lastName: ''
            }}
            validate={values => {
              const errors = {}
              console.log(errors)
              if (!values.name) {
                errors.name = 'Nome é obrigatório.'
              } if (!values.lastName) {
                errors.lastName = 'Sobrenome é obrigatório'
              } if (!values.userName) {
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
                //  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.password)) {
                errors.passwordHash = 'Senha inváida. Tente com um caracter especial'
              }
              return errors
            }}

            onSubmit={async (values) => {
              try {
                await signup(
                  values.userName,
                  values.email,
                  values.passwordHash,
                  values.name,
                  values.lastName
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
                <Container backgroundColor='white' alignItems='center' 
                padding='18' borderRadius="md" align="stretch">
                  <VStack alignItems='center'>
                  <Text
                    textAlign='center'
                    fontSize='2xl'
                    fontWeight='bold'
                    textShadow='1px 1px #F0FFFF'
                  >
                    Crie sua conta
                  </Text>

                    <Input
                      mt='2' mb='4'
                      focusBorderColor="lime"
                      name='name'
                      type='text'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      placeholder='Digite seu nome'
                      variant="outline"
                      size='lg'
                    />
                    <Text>{errors.name}</Text>

                    <Input
                      focusBorderColor="lime"
                      name='lastName'
                      type='text'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.lastName}
                      placeholder='Digite seu sobrenome'
                      variant="outline"
                      size='lg'
                    />
                    <Text>{errors.lastName}</Text>

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
                      CRIAR
                    </Button>

                    <Text>
                      <a href='./login'>Se tiver uma conta, clique aqui</a>
                    </Text>

                  </VStack>
                </Container>
              </form>
            )}
          </Formik>
        </VStack>

      </Flex>
    </>
  )
}