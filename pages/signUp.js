import { useFormik } from 'formik';
import * as yup from 'yup';
import { 
    Text,  
    Input,  
    VStack, 
    FormControl, 
    FormLabel, 
    FormMessageError,
    Button, 
    Link 
  } from '@chakra-ui/react'



export default function SignUp (){
const initialValues = {
  name:'',
  username:'',
  email: '',
  password:''
}

const validationSchema = yup.object().shape({
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
    ),
})





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
              placeholder='nome_completo'
              variant='flushed'
              size='lg' 
            />
          </FormControl>
          <FormControl id='username'>
            <FormLabel>
              Username
            </FormLabel>
            <Input
              type='text'
              placeholder='username'
              variant='flushed'
              size='lg'
            />
          </FormControl>
          <FormControl id='email'>
            <FormLabel>
              Email
            </FormLabel>
            <Input
              type='email'
              placeholder='teste@teste.com.br'
              variant='flushed'
              size='lg'
            />
          </FormControl>
          <FormControl id='password'>
            <FormLabel>
              Senha
            </FormLabel>
            <Input
              type='password'
              placeholder='************'
              variant='flushed'
              size='lg'
            />
          </FormControl>
          <Button
            mt='5'
            p='3'
            bgColor='brand.700'
            color='gray.50'
            borderRadius='5'
            _hover={{
              bgColor:'gray.50',
              color:'brand.700'
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
   </VStack>

   </>
 ) 
} 
