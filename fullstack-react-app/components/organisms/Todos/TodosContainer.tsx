import { useEffect, useState } from "react"
import { Todos } from "./Todos"

const fetchTodos = async () => {
  const response = await fetch("/api/todos")
  const data = await response.json()
  return data
}

export const TodosContainer = () => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetchTodos().then((todos) => setTodos(todos))
  }, [])

  return <Todos todos={todos} />
}
