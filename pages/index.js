import { Image, Button, VStack, HStack,Text, Box, Flex } from '@chakra-ui/react';
import Head from 'next/head'
import Link from 'next/link'


export default function Home() {
  return (
    <Box maxHeight='100vh'>
    <Head>
      <title>Agenda</title>
      <meta name="description" content="" />
    </Head>
    <Flex bgGradient='linear-gradient(90deg,#11AEEB, #35F39D)' justifyContent='center' alignItems='center' minHeight='100vh'> 
    <VStack mt='1' mb='5' >
      <Text
        fontSize='2xl'
        fontWeight='bold'
      >
        Organize seu dia-a-dia com a Agenda
      </Text>
      <Image 
        borderRadius='6px'
        src='./checkList2.png' 
        alt='Imagem de várias pessoas organizando suas tarefas'
        boxSize="480px"
      />
      <HStack spacing='5' align='center'>
        <Box>
          <Link href='./signUp'>
          <Button 
            bgColor='brand.600'
            size='md'
            _hover={{
              bgColor:'brand.800',
              color: 'gray.50'
            }}
          >CADASTRE-SE
          </Button>
          </Link>
        </Box>
        <Link href='./login'>
          <Button 
            backgroundColor='brand.600'
            _hover={{
              bgColor:'brand.800',
              color: 'gray.50'
            }}
           
          >LOGIN
          </Button>
        </Link>
        <footer></footer>
      </HStack>
    </VStack>
    </Flex>
    </Box>
  )
}