import { Image, Button, VStack, HStack,Text } from '@chakra-ui/react';
import Head from 'next/head'

export default function Home() {
  return (
    <>
    <Head>
      <title>Agenda</title>
      <meta name="description" content="" />
    </Head>
    <VStack>
      <Text 
        mt='5'
        fontSize='xl'>
        Organize seu dia-a-dia com a Agenda
      </Text>
      <Image 
        src='./checkList.png' 
        alt='Imagem de várias pessoas organizando suas tarefas' 
      />
      <HStack spacing='5' align='center'>
        <Button backgroundColor='brand.600'>Login</Button>
        <Button backgroundColor='brand.600'>Cadastre-se</Button>
      </HStack>
    </VStack>
    </>
  )
}