import { Text, Flex, Input,  VStack, FormControl, FormLabel, Button, Link } from '@chakra-ui/react'


export default function SignUp (){
 return (
   <>
     <VStack alignItems='center' justifyContent='center'>
        <Text>
          Crie sua conta
        </Text>
        <VStack >
          <FormControl id='name'>
            <FormLabel
              justifyContent='center'
            >Nome</FormLabel>
            <Input 
              type='text'
              placeholder='Digite seu nome' 
            />
          </FormControl>
          <FormControl id='username'>
            <FormLabel>Username</FormLabel>
            <Input
              type='text'
              placeholder='Digite um username'
            />
          </FormControl>
          <FormControl id='email'>
            <FormLabel>Email</FormLabel>
            <Input
              type='email'
              placeholder='Digite seu email'
            />
          </FormControl>
          <FormControl id='password'>
            <FormLabel>Senha</FormLabel>
            <Input
              type='password'
              placeholder='Digite uma senha'
            />
          </FormControl>
          <Button
            bgColor='brand.700'
            color='gray.50'
          >CRIAR</Button>
        </VStack>
        <Text>
          Se tiver uma conta, clique aqui
        </Text>
   </VStack>

   </>
 ) 
}