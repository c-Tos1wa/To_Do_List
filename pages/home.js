import { useState } from 'react'
import { Text, Button, Input, Select, VStack, Stack, Wrap, WrapItem, Checkbox, Grid } from '@chakra-ui/react';

const index = () => {

  const [userInput, setUserInput] = useState('')

  const [todoList, setTodoList] = useState([])

  const handleChange = (e) => {
    e.preventDefault()

    setUserInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setTodoList([
      userInput,
      ...todoList
    ])

    setUserInput('')
  }

  const handleDelete = (todo) => {
    const updateArr = todoList.filter(todoItem => todoList.indexOf(todoItem) != todoList.indexOf(todo))
    setTodoList(updateArr)
  }

  return (
    <>
      <VStack alignItems='center' spacing='6'>
        <Text alignItems='center' textAlign='center' m='5' fontSize='2xl'>
          Hora de organizar suas tarefas
        </Text>
        <Input
          textAlign='center'
          type='text'
          placeholder='Adicione uma tarefa'
          variant='flushed'
          my='3' p='5'
          value={userInput}
          onChange={handleChange}
        />

        <Button
          variant='outline'
          mx='5' p='5'
          onClick={handleSubmit}
        >
          Adicionar</Button>
      </VStack>

      <VStack alignItems='center' spacing='6' marginTop='6'>
        
          <Wrap>


            <Stack direction='column' >
              {
                todoList.length >= 1 ? todoList.map((todo, idx) => {
                  return <li key={idx}>{todo}<Checkbox colorSchema='red' ml='5'>Concluído</Checkbox>
                    <WrapItem alignItems='center' justifyContent='space-around'>
                      <Select mt='6' placeholder="Prioridade" size="md" variant="outline" mb='4' mr='2.5'>
                        <option value="option1">Alta</option>
                        <option value="option2">Média</option>
                        <option value="option3">Grande</option>
                      </Select>
                      <Button variant='outline' _hover={{
                        bgColor: 'gray.50',
                        color: 'brand.700'
                      }}

                        mx='10' p='5' onClick={(e) => {
                          e.preventDefault()
                          handleDelete(todo)
                        }}>Apagar</Button>
                    
                   
                      
                      </WrapItem>
                    
                  </li>

                })
                  :  'Registre uma tarefa'
              }
            </Stack>


          </Wrap>
      
      </VStack>

    </>
  )
}
export default index;