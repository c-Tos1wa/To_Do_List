import React from 'react';
import { useState, useEffect } from 'react'
import { Text, Button, Input, VStack, Stack, Wrap, WrapItem, Checkbox } from '@chakra-ui/react';
import { createTask, getAllTasks, deleteTask, updateTask } from './api/auth/api';



const index = () => {

  const [error, setError] = useState("")
  const [userInput, setUserInput] = useState("")
  const [todoList, setTodoList] = useState("")

  //  const [task, setTask] = useState("")

  const [checkedItems, setCheckedItems] = React.useState(false)
  const [update, setUpdate] = React.useState(false)

  const handleUpdateTask = async (id) => {
    setUpdate(true)
    try {
      await updateTask(
        id,
        userInput,
        update
        // values.name,
        // values.description,
        // values.priority,
        // values.taskDone
      );
    } catch (err) {
      setError(true)
    }
       
    window.location.reload()
  }

  const handleSubmit = async (values) => {
    try {
      await createTask(
        userInput
        // values.name,
        // values.description,
        // values.priority,
        // values.taskDone
      );
    } catch (err) {
      setError(true)
    }
       
    setUserInput('')
    window.location.reload()
  }

  const handleDelete = async (id) => {
    await deleteTask(id)
    window.location.reload()
  }
  
  useEffect( () => {
    getAllTasks().then( res => setTodoList(res))
    //setData(responseData)
  }, [])
  const responseData = Array.from(todoList)

  /*
  if (!todoList) {
    getAllTasks().then((res) => setTodoList(res));
  }
  const responseData = Array.from(todoList)
  */
  

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
          onChange={(e) => {
            e.preventDefault()
            setUserInput(e.target.value)
          }}
        />
        <Checkbox 
          size="lg" 
          colorScheme="green" 
          onChange={(e) => setCheckedItems(e.target.checked)}
        >
          Filtrar as prioridades
        </Checkbox>

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
                responseData.map((data) => {

                  return <li key={data.id}>{data.name} { data.description}
                    <WrapItem alignItems='center' justifyContent='space-around'>
                      
                      
                      <Button variant='outline' _hover={{
                        bgColor: 'gray.50',
                        color: 'brand.700'
                      }}

                        mx='10' p='5' onClick={(e) => {
                          e.preventDefault()
                           handleDelete(data.id)
                        }}>
                          Apagar
                        </Button>

                      <Checkbox onCheck={handleUpdateTask} size="md" colorScheme="green" mr='6'
                      onChange={(e) => setCheckedItems(e.target.checked)}
                      >É prioridade?</Checkbox>

                      <Checkbox size="md" colorScheme="green"
                      onChange={(e) => setCheckedItems(e.target.checked)}
                      >Concluído?</Checkbox>

                    </WrapItem>

                  </li>

                })
                  // : 'Registre uma tarefa'
              }
            </Stack>


          </Wrap>
      
      </VStack>
    </>
  )
}
export default index;