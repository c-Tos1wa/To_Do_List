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
      <Text>Hora de organizar suas tarefas</Text>
      <Input type='text' value={userInput} onChange={handleChange} placeholder='Adicione uma tarefa' />
      <Button onClick={handleSubmit}>Adicionar</Button>
      <ul>
        {
          todoList.length >= 1 ? todoList.map((todo, idx) => {

            return <li key={idx}>{todo}<Button onClick={(e) => {
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