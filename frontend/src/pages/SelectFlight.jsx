import React, { useState } from "react";
import { SingleDatepicker } from "chakra-dayzed-datepicker";
import { VStack, Select, Flex, Button, Text } from "@chakra-ui/react";

export default function SelectFlight() {
  const [date, setDate] = useState(new Date());

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
      <VStack width={"640px"} margin={"auto"} mt={40}>
        <Flex justify={"center"}>
          <Text fontSize="4xl" mt={"16px"}>
            <strong>Pick Your Schedule</strong>
          </Text>
        </Flex>
        <Flex direction={"column"}>
          <Text>Date</Text>
          <SingleDatepicker
            date={date}
            onDateChange={setDate}
            propsConfigs={{
              dayOfMonthBtnProps: {
                defaultBtnProps: {
                  borderColor: "blue.400",
                  _hover: {
                    background: "blue.500",
                  },
                },
                selectedBtnProps: {
                  background: "blue.400",
                },
              },
              inputProps: {
                borderColor: "blue.400",
                borderWidth: 2,
                width: "640px",
                _hover: {
                  borderColor: "blue.600",
                },
              },
            }}
          />
        </Flex>
        <Flex direction={"row"} justify={"space-between"} w="100%">
          <Flex direction={"column"}>
            <Text>Departure</Text>
            <Select
              placeholder="Select Departure"
              borderColor="blue.400"
              borderWidth={2}
              width={"300px"}
              _hover={{ borderColor: "blue.600" }}
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </Flex>
          <Flex direction={"column"}>
            <Text>Destination</Text>
            <Select
              placeholder="Select Destination"
              borderColor="blue.400"
              borderWidth={2}
              width={"300px"}
              _hover={{ borderColor: "blue.600" }}
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </Flex>
        </Flex>
        <Flex direction={"row"} justify={"flex-end"} w={"100%"}>
          <Button
            colorScheme="blue"
            size="lg"
            mr={16}
            width={"200px"}
            mt={"40px"}
          >
            Save as bookmark
          </Button>
          <Button colorScheme="blue" size="lg" width={"200px"} mt={"40px"}>
            Submit
          </Button>
        </Flex>
      </VStack>
    </Flex>
  );
}
