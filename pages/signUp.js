import { Text, Box, Input,  VStack, FormControl, FormLabel, Container, Button, Link } from '@chakra-ui/react'

export default function SignUp (){
 return (
   <>
     <VStack 
        bgColor='brand.500'
        alignItems='center' 
        justifyContent='center'
        p='12'
      >
        <Text 
          mb='5'
          fontSize='xl'
          fontWeight='bold'
          textShadow='1px 1px #ffffff'
        >
          Crie sua conta
        </Text>
        <VStack 
          bgColor='gray.50' 
          borderWidth='1px' borderRadius='5' p='5'>
          <FormControl id='name'>
            <FormLabel>
              Nome
            </FormLabel>
            <Input 
              type='text'
              placeholder='Digite seu nome'
              size='lg' 
            />
          </FormControl>
          <FormControl id='username'>
            <FormLabel>
              Username
            </FormLabel>
            <Input
              type='text'
              placeholder='Digite um username'
              size='lg'
            />
          </FormControl>
          <FormControl id='email'>
            <FormLabel>
              Email
            </FormLabel>
            <Input
              type='email'
              placeholder='Digite seu email'
              size='lg'
            />
          </FormControl>
          <FormControl id='password'>
            <FormLabel>
              Senha
            </FormLabel>
            <Input
              type='password'
              placeholder='Digite uma senha'
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