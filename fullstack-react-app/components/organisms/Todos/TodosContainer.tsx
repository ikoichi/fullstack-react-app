import axios from "axios"
import { useEffect, useState } from "react"
import { Todos } from "./Todos"

const fetchTodos = async () => {
  const response = await fetch("/api/todos")
  const data = await response.json()
  return data
}

type TodosContainerProps = {
  refreshTodoToken: string
}

export const TodosContainer: React.FC<TodosContainerProps> = ({
  refreshTodoToken,
}) => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetchTodos().then((todos) => setTodos(todos))
  }, [refreshTodoToken])

  const onTodoBlur = async (todoId: string, newTitle: string) => {
    axios.put(`/api/todo/${todoId}`, { title: newTitle })
  }

  return <Todos todos={todos} onTodoBlur={onTodoBlur} />
}
