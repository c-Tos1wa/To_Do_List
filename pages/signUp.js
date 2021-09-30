import { Formik } from 'formik'
import { Input, Text, VStack, Button, FormErrorMessage, Link } from '@chakra-ui/react'

export default function SignUp() {
  return (
    <>
      <Text
        textAlign='center'
        mt='5'
        fontSize='2xl'
        fontWeight='bold'
        textShadow='1px 1px #F0FFFF'
      >
        Crie sua conta
      </Text>

      <VStack justifyContent='center' alignItems='center' my='5'>
      <Formik
        initialValues={{
          name: '',
          username: '',
          email: '',
          password: ''
         }}
         validate= { values => {
           const errors = {}
            console.log(errors)
           if(!values.name){
             errors.name = 'Nome é obrigatório.'
           }if (!values.username){
             errors.username = 'Nome de usuário é obrigatório'
           } if (!values.email){
             errors.email = 'Email é obrigatório'
           } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
           ) {
             errors.email = 'Email inválido'
           }
           if (!values.password){
             errors.password = 'Senha é obrigatória'
           } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.password)) {
             errors.password = 'Senha inváida. Tente com um caracter especial'
           }
           return errors
         }}
         onSubmit={(values, actions) => {
           setTimeout(() => {
             alert(JSON.stringify(values, null, 2))
             actions.setSubmitting(false)
           }, 1000)
         }}>
           {({ 
             values, errors, touched, handleChange, handleBlur, handleSubmit
           }) => (
             <form onSubmit={handleSubmit}>
               <VStack spacing='5' alignItems='center' justifyContent='center'>
                 
                 <Input
                  name='name'
                  type='text'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  placeholder='Digite seu nome completo'
                  variant='flushed'
                  size= 'lg'
                />
                <Text>{errors.name}</Text>
                <Input
                  name='username'
                  type='text'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                  placeholder='Digite seu nome de usuário'
                  variant='flushed'
                  size= 'lg'
                />
                <Text>{errors.username}</Text>

                <Input
                  name='email'
                  type='email'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={ values.email}
                  placeholder='Digite seu email'
                  variant='flushed'
                  size= 'lg'
                />
                <Text>{errors.email}</Text>

                <Input
                  name='password'
                  type='password'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={ values.password}
                  placeholder='Digite uma senha'
                  variant='flushed'
                  size= 'lg'
                />
                <Text>{errors.password}</Text>

                <Button
                type='submit'
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
                
              <Text>
                <a href='./login'>Se tiver uma conta, clique aqui</a>
              </Text>
                
               </VStack>

             </form>
           )}
         </Formik>
         </VStack>
    </>
  )
}