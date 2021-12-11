import { Button, Center, Container, Flex, Text } from "@chakra-ui/react"
import { GetServerSideProps, NextApiRequest, NextApiResponse } from "next"
import { getSession, signOut } from "next-auth/react"
import React from "react"
import { TodoCreator } from "../components/molecules/TodoCreator/TodoCreator"
import { Todos } from "../components/organisms/Todos/Todos"
import { TodosContainer } from "../components/organisms/Todos/TodosContainer"
import { UserSession } from "./api/auth/[...nextauth]"

function LoggedPage({ session }: { session: UserSession }) {
  const [refreshTodoToken, setRefreshTodoToken] = React.useState<string>("")
  return (
    <Container py="64px">
      <Center>
        <Flex flexDirection="column">
          <Text mb="24px">👋 Welcome back {session?.user?.name}</Text>
          <Button onClick={() => signOut()}>Log out</Button>

          <TodoCreator
            onTodoCreated={() => setRefreshTodoToken(Math.random().toString())}
          />
          <TodosContainer refreshTodoToken={refreshTodoToken} />
        </Flex>
      </Center>
    </Container>
  )
}

export default LoggedPage

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req })

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    }
  }

  return {
    props: {
      session,
    },
  }
}
