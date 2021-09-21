import { FormControl, FormLabel, Input, Text } from "@chakra-ui/react";


function logIn() {

  function validaNome(){
    // função para validar o nome, caso a pessoa não digite
    let nome_ = document.forms["name"].value;
    if (nome_ == '' || nome_ in ['1, 2, 3, 4, 5, 6, 7, 8, 9, 0']){
      alert('Digite o seu nome ou email para LogIn')
    }
      return false;
  }

  return <>

      <Text fontSize="xl" fontWeight="semibold" lineHeight="short">
        Entre e veja as suas tarefas.
      </Text>
      <FormControl>

        <FormLabel for='name'>
          Nome ou email
        </FormLabel>

        <Input 
          type='email' 
          onsubmit="validaNome()"
          isRequired 
        />

        <FormLabel 
          for='senha'
        >
          Senha
        </FormLabel>

        <Input type='password' isRequired />

      </FormControl>
  
  </>
}

export default logIn