import React, { ReactElement } from "react"
import { Todo } from ".prisma/client"
import { Flex, Heading, Input } from "@chakra-ui/react"

type TodosProps = {
  todos: Todo[]
  onTodoBlur: (todoId: string, newTitle: string) => Promise<void>
}

export const Todos: React.FC<TodosProps> = ({ todos, onTodoBlur }) => {
  return (
    <>
      <Heading size="md" mb="16px" mt="24px">
        Todos
      </Heading>
      {todos.map((todo) => (
        <Flex key={todo.id} my="4px">
          <Input
            defaultValue={todo.title}
            variant="unstyled"
            onBlur={(event) => {
              if (todo.title === event.target.value) {
                return
              }
              onTodoBlur(todo.id, event.target.value)
            }}
          />
        </Flex>
      ))}
    </>
  )
}
