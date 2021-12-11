import React, { ReactElement } from "react"
import { Todo } from ".prisma/client"
import { Flex, Heading } from "@chakra-ui/react"

type TodosProps = {
  todos: Todo[]
}

export const Todos: React.FC<TodosProps> = ({ todos }) => {
  return (
    <>
      <Heading size="md" mb="16px" mt="24px">
        Todos
      </Heading>
      {todos.map((todo) => (
        <Flex key={todo.id}>{todo.title}</Flex>
      ))}
    </>
  )
}
