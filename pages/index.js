import { Image, Button, VStack, HStack,Text } from '@chakra-ui/react';

export default function Home() {
  return (
    <>
    <VStack>
      <Text>
        Organize seu dia-a-dia com esse To Do
      </Text>
      <Image 
        src='./capa.png' 
        alt='Imagem de um quadro com várias tarefas' 
      />
      <HStack spacing='10' align='center'>
        <Button backgroundColor='yellow'>Login</Button>
        <Button backgroundColor='yellow'>Cadastre-se</Button>
      </HStack>
    </VStack>
    </>
  )
}