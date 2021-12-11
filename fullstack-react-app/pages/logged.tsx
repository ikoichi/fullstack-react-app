import { Button, Center, Container, Flex, Text } from "@chakra-ui/react"
import { getSession, signOut } from "next-auth/react"
import React from "react"

function LoggedPage({ session }) {
  return (
    <Container py="64px">
      <Center>
        <Flex flexDirection="column">
          <Text mb="24px">👋 Welcome back {session.user.name}</Text>
          <Button onClick={() => signOut()}>Log out</Button>
        </Flex>
      </Center>
    </Container>
  )
}

export default LoggedPage

export async function getServerSideProps({ req, res }) {
  // is the current user logged or not? authenticated?
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
