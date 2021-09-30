import React from 'react';
import { Formik } from 'formik';
import { Link, Text, Input, Heading, Button, VStack } from "@chakra-ui/react";


const Basic = () => (
  <div>
    <VStack spacing='1.5rem' >

      <Heading mt='40px' fontSize="4xl" fontWeight="semibold" lineHeight="short">
        Entre e veja as suas tarefas
      </Heading>

      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validate={values => {
          const errors = {};
          if (!values.name) {
            errors.name = 'Required';
          } else if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (


          <form onSubmit={handleSubmit}>    {/* // começo do form  */}

            <VStack spacing='2rem'>

              <Input
                type="name"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                size="lg"
                placeholder='Digite seu nome'
              />
              {errors.name && touched.name && errors.name}

              <Input
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
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                size="lg"
                placeholder='E agora sua senha'
              />
              {errors.password && touched.password && errors.password}
              <Button height="48px" border="2px" color='brand.800'
                borderColor="brand.800" type="submit" variant="outline" disabled={isSubmitting}
                _hover='gray.200'
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

  </div>
);

export default Basic;