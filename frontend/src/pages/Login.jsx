import React, { useState } from "react";
import { VStack, Flex, Button, Text, Input } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <Flex
      w={"full"}
      h={"100vh"}
      backgroundImage={
        "url(https://images.unsplash.com/photo-1428908728789-d2de25dbd4e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)"
      }
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack width={"400px"} margin={"auto"} mt={40}>
        <Flex justify={"center"}>
          <Text fontSize="4xl" mt={"16px"}>
            <strong>Log in</strong>
          </Text>
        </Flex>
        <Flex justify={"center"} direction={"column"} w={"100%"}>
          <Text>
            <strong>Email</strong>
          </Text>
          <Input
            placeholder={"Your email address"}
            mt={"8px"}
            borderColor={"blue.400"}
            borderWidth={2}
            _hover={{ borderColor: "blue.600" }}
          />
        </Flex>
        <Flex justify={"center"} direction={"column"} w={"100%"}>
          <Text>
            <strong>Password</strong>
          </Text>
          <Input
            type={"password"}
            placeholder={"Your password"}
            mt={"8px"}
            borderColor={"blue.400"}
            borderWidth={2}
            _hover={{ borderColor: "blue.600" }}
          />
        </Flex>
        <Flex direction={"column"} justify={"center"}>
          <Button colorScheme="blue" size="lg" width={"200px"} mt={"40px"}>
            Log In
          </Button>
          <Link to="/signup">
            <Button colorScheme="blue" size="lg" width={"200px"} mt={"20px"}>
              Sign Up
            </Button>
          </Link>
        </Flex>
      </VStack>
    </Flex>
  );
}
