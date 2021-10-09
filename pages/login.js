import React from 'react';
import { Formik } from 'formik';
import { Text, Input, Heading, Button, VStack } from "@chakra-ui/react";
import { login } from './api/auth/api';
import { useRouter } from 'next/router';


export default function Basic() {

  const router = useRouter();
  const [error, setError] = React.useState(false);
  // const [userName, setUsername] = React.useState("");
  // const [email, setEmail] = React.useState("");
  // const [passwordHash, setPasswordHash] = React.useState("");


  return (
    <>

      <VStack spacing='1.5rem'>

        <Heading mt='40px' fontSize="4xl" fontWeight="semibold" lineHeight="short">
          Entre e veja as suas tarefas
        </Heading>

        <Formik

          initialValues={{ userName: '', email: '', passwordHash: '' }}
          validate={ values => {
            const errors = {};
            if (!values.userName) {
              errors.userName = 'Required';
            } else if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.passwordHash)
            ) {
              errors.email = 'Invalid email address';
            }
            return errors;
          }}
          //   onSubmit={(values, { setSubmitting }) => {
          //     setTimeout(() => {
          //       alert(JSON.stringify(values, null, 2));
          //       setSubmitting(false);
          //     }, 400);
          //   }}
          // >
          onSubmit={async (values) => {
            try {
              await login(
                values.userName,
                values.email,
                values.passwordHash,
              );
              router.push("/tarefas");
            } catch (err) {
              console.error(err);
              setError(true);
            }
          }
          } >
          {({
            values, errors, touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (


            <form onSubmit={ (e) => {
              e.preventDefault();
              handleSubmit(e)
             }}>

              <VStack spacing='2rem'>

                <Input
                  focusBorderColor="lime"
                  type="text"
                  name="userName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.userName}
                  size="lg"
                  placeholder='Digite seu nome'
                />
                {errors.userName && touched.userName && errors.userName}

                <Input
                  focusBorderColor="lime"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  size="lg"
                  placeholder='Agora seu email'
                />

                {errors.email && touched.email && errors.email}
                <Input
                  focusBorderColor="lime"
                  type="password"
                  name="passwordHash"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.passwordHash}
                  size="lg"
                  placeholder='E agora sua senha'
                />
                {errors.passwordHash && touched.passwordHash && errors.passwordHash}
                <Button
                  borderRadius='5' height="48px" color='gray.50' bgColor='brand.700'
                 type="submit" disabled={isSubmitting}  
                  _hover={{
                    bgColor: 'gray.50',
                    color: 'brand.700'
                  }}
                >
                  Entrar
                </Button>

                <Text>
                  <a href='./signUp'>Clique aqui se ainda não tiver uma conta.</a>
                </Text>

              </VStack>
            </form>
          )}
        </Formik>

      </VStack>
    </>

  )
}