import React, { ReactElement } from "react"
import { Todo } from ".prisma/client"
import { Checkbox, Flex, Heading, Input } from "@chakra-ui/react"

type TodosProps = {
  todos: Todo[]
  onTodoBlur: (todoId: string, newTitle: string) => Promise<void>
  onTodoCompleteToggle: (todoId: string, isCompleted: boolean) => Promise<void>
}

export const Todos: React.FC<TodosProps> = ({
  todos,
  onTodoBlur,
  onTodoCompleteToggle,
}) => {
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
            readOnly={todo.isCompleted}
            textDecoration={todo.isCompleted ? "line-through" : "none"}
            color={todo.isCompleted ? "gray.500" : "gray.700"}
            onBlur={(event) => {
              if (todo.title === event.target.value) {
                return
              }
              onTodoBlur(todo.id, event.target.value)
            }}
          />
          <Checkbox
            isChecked={todo.isCompleted}
            onChange={(e) => onTodoCompleteToggle(todo.id, e.target.checked)}
          />
        </Flex>
      ))}
    </>
  )
}
