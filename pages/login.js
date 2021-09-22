import { FormControl, FormLabel, Input, Text, Button, VStack, FormHelperText } from "@chakra-ui/react";
import { Formik } from 'formik';
import * as Yup from 'yup'

function logIn() {

  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Muito curto!')
      .max(50, 'Muito longo!')
      .required('Required'),
    email: Yup.string()
      .email('Email inválido')
      .required('Required'),
    password: Yup.string()
      .min(6, 'Muito curta!')
      .max(30, 'Muito longa!')
      .required('Required'),
  });

  function validate(values) {
    const errors = {};
    if(!values.name){
      errors.name = 'É obrigatório preencher seu nome';
    }
    if(!values.email) {
      errors.name = 'É obrigatório preencher seu email'
    }
    if(!values.password) {
      errors.name = 'É obrigatório preencher sua senha'
    }

    return errors;
  }

  return <>
      <Formik
        initialValues={{
          name: '', email: '', password: '',
      }}
      
      validationSchema={SignupSchema}
      onSubmit={values => {
      }}
      >
        {({ errors, touched }) => (

      <VStack alignItems='center' spacing='10'>

        <Text fontSize="xl" fontWeight="semibold" lineHeight="short" mt='20'>
          Entre e veja as suas tarefas.
        </Text>

      <FormControl id='nome' alignItems='center' autoComplete='off' >
        <VStack>
              <FormLabel for='name'>
                Digite seu nome: 
              </FormLabel>
            
              <Input for='name' maxW='30%' placeHolder='Seu nome completo' type='text' />
        </VStack>
      </FormControl>

      <FormControl id='email' alignItems='center' autoComplete='off'>
        <VStack>
           
              <FormLabel for='email' alignItems='center'>
                E-mail:
              </FormLabel>

              <Input type='email' placeHolder='Digite seu email'
                maxW='30%' autoComplete='off' onSubmit={onSubmit} />

        <FormHelperText>Digite seu melhor email.</FormHelperText>
        </VStack>
      </FormControl>

      <FormControl id='senha' autoComplete='off'>
        <VStack>
          <FormLabel for='senha'>
            Senha
          </FormLabel>

          <Input 
            type='password' placeHolder='Digite sua senha'
            maxW='30%' minLength='6'
            pattern='^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,12}$'
            title='A senha deve conter entre 6 e 12 carácteres, letras maiúsculas e minúsculas e um numeral'
          />
          <FormHelperText>Uma senha com letras maiúsculas e minúsculas, algum numeral e entre 6 e 12 carácteres.</FormHelperText>
        </VStack>

      </FormControl>

      <Button mt='26' type="submit">
        Enviar
      </Button>

      </VStack>

      )}
      </Formik>
  </>
}

export default logIn