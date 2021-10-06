import { useState } from 'react'
import { Text, Button, Input } from '@chakra-ui/react';

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
      <Text textAlign='center' m='5' fontSize='2xl'>
        Hora de organizar suas tarefas
      </Text>
      <Input 
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
      <ul>
        {
          todoList.length >= 1 ? todoList.map((todo, idx) => {

            return <li key={idx}>{todo}<Button variant='outline'
            mx='10' p='5' onClick={(e) => {
              e.preventDefault()
              handleDelete(todo)
            }}>Apagar</Button></li>
          })
            : 'Registre uma tarefa'
        }
      </ul>

    </>
  )
}
export default index;