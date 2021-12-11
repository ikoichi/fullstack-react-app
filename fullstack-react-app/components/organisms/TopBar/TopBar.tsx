import React from "react"
import { Flex, HStack, Link, Text } from "@chakra-ui/layout"
import { Button } from "@chakra-ui/react"
import { MenuItem } from "../../molecules/MenuItem/MenuItem"

export const TopBar = () => (
  <Flex
    w="100%"
    flexDirection="row"
    alignContent="center"
    p="8px 16px"
    justifyContent="center"
  >
    <Flex
      w={["100%", "100%", "100%", "90ch"]}
      flexDirection="row"
      alignContent="center"
    >
      <Text
        fontSize="36px"
        fontWeight="bold"
        lineHeight="42px"
        color="#1F79BA"
        flexGrow={1}
      >
        SuperApp
      </Text>
      <HStack spacing="16px" alignContent="center">
        <MenuItem text="Blog" href="/blog" />
        <MenuItem text="Product" href="/product" />
        <MenuItem text="Pricing" href="/pricing" />
      </HStack>
      <Flex marginLeft="82px">
        <Button variant="solid" colorScheme="blue">
          Get started
        </Button>
      </Flex>
    </Flex>
  </Flex>
)
