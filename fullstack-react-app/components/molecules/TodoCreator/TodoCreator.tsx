import React from "react"
import axios from "axios"
import { Input, Flex, IconButton, Heading } from "@chakra-ui/react"
import { AddIcon } from "@chakra-ui/icons"

type TodoCreatorProps = {
  onTodoCreated: () => void
}

export const TodoCreator: React.FC<TodoCreatorProps> = ({ onTodoCreated }) => {
  const [title, setTitle] = React.useState("")
  const [isLoading, setLoading] = React.useState(false)

  const onCreate = () => {
    setLoading(true)
    axios
      .post("/api/todo", {
        title,
      })
      .then(() => {
        onTodoCreated()
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <Flex flexDirection="column" py="16px">
      <Heading size="md" mb="4px">
        Create Todo
      </Heading>
      <Flex>
        <Input
          placeholder="Something to do..."
          onChange={(e) => setTitle(e.target.value)}
        />
        <IconButton
          icon={<AddIcon />}
          variant="solid"
          colorScheme="blue"
          aria-label="Create todo"
          ml="4px"
          onClick={onCreate}
          isLoading={isLoading}
        />
      </Flex>
    </Flex>
  )
}
