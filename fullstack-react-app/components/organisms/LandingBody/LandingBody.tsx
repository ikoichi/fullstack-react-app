import {
  Box,
  Container,
  SimpleGrid,
  Text,
  Flex,
  ListItem,
  UnorderedList,
} from "@chakra-ui/layout"
import React from "react"

export const LandingBody = () => (
  <Container>
    <SimpleGrid columns={2} spacing={10} p="64px 24px">
      <Box>
        <Box
          backgroundColor="gray.300"
          width="100%"
          height="225px"
          borderRadius="16px"
        ></Box>
      </Box>
      <Flex flexDirection="column" justifyContent="center">
        <Text mb="8px">Including the market standard technologies</Text>
        <UnorderedList>
          <ListItem>Next.js</ListItem>
          <ListItem>ChakraUI</ListItem>
          <ListItem>PostgreSQL</ListItem>
        </UnorderedList>
      </Flex>
    </SimpleGrid>
  </Container>
)
