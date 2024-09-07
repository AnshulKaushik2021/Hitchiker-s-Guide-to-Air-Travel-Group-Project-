import React from "react";
import { Flex, Heading, Text, Icon, Button, Stack } from "@chakra-ui/react";
import { MdOutlineAirplanemodeActive } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Flex
      w={"full"}
      h={"100vh"}
      backgroundImage={
        "url(https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80)"
      }
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <Link to="/login">
        <Button colorScheme={"blue"} position="absolute" right="16px" top="8px">
          Log In
        </Button>
      </Link>
      <Stack
        textAlign={"center"}
        w={"full"}
        spacing={14}
        py={30}
        pt={20}
        mt={40}
      >
        <Heading fontWeight={800} fontSize={"6xl"} color={"grey.400"}>
          Save Your Time <br />
          <Text color={"blue.400"}>On Sky</Text>
        </Heading>
        <Text fontWeight={500} fontSize={"2xl"} color={"gray.500"}>
          With the Help of Big Data and ... Hitchhikers Flights!
        </Text>
        <Stack align={"center"} alignSelf={"center"} position={"relative"}>
          <Link to="/select">
            <Button
              colorScheme={"blue"}
              rounded={"full"}
              py={1}
              px={6}
              size={"lg"}
            >
              <Icon as={MdOutlineAirplanemodeActive} mr={2} />
              Try now
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Flex>
  );
}
