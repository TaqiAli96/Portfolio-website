import {
  Heading,
  SimpleGrid,
  Text,
  VStack,
  Box,
  HStack,
  Circle,
  Square,
  Flex,
  keyframes,
} from "@chakra-ui/react";
import React from "react";
import { BsArrowLeft } from "react-icons/bs";

export const IndividualService = () => {
  //   const spin = keyframes`

  //     from {
  //     transform: rotate(10deg);

  //   }
  //   to{
  //       transform: rotate(60deg);

  //   }
  // `;
  return (
    <Box>
      {" "}
      <SimpleGrid columns={[1, 2, 2, 3, 4]} spacing={10}>
        {Services.map((service) => (
          <VStack
            spacing={"10%"}
            p={"38px"}
            role={"group"}
            transition="all 1.5s ease-out"
            rounded={"2xl"}
            color={"#fff"}
            _hover={{
              background: "#5454D4",
              cursor: "pointer",
              transition: "all 1.5s ease-out",
            }}
          >
            <Circle
              size={"180px"}
              bg={"#5454D4"}
              _groupHover={{ bg: "#fff", transition: "all 1.5s ease-out" }}
            >
              <Square size="90px" bg={"#FA6060"}></Square>
            </Circle>

            <Heading fontSize={25} bg={"transparent"}>
              {service.label}
            </Heading>
            <Text
              fontSize={20}
              textAlign={"center"}
              bg={"transparent"}
              lineHeight={10}
            >
              {service.description}
            </Text>
          </VStack>
        ))}
      </SimpleGrid>
      <Flex justify={["center", "flex-end"]} mt={"6%"}>
        <HStack
          justify={"end"}
          spacing={"50px"}
          flexDirection={["column", "row"]}
          role="group"
        >
          <Circle
            size={"150px"}
            bg={"#5454D4"}
            color={"#fff"}
            transition="all 1s ease-out"
            _groupHover={{
              transform: "rotate(-0.5turn);",
              bg: "#fff",
              color: "#5454D4",
            }}
          >
            <BsArrowLeft
              fontSize={"80px"}
              style={{ background: "transparent" }}
            />
          </Circle>
          <Text
            fontSize={26}
            fontWeight={400}
            color={"#fff"}
            transition="all 1s ease-out"
            data-text={"Let's Connect"}
            _before={{
              display: "block",
              color: "transparent",
              content: "attr(data-text)",
              overflow: "hidden",

              fontWeight: 700,
            }}
            _groupHover={{
              color: "#5454D4",
              fontWeight: 700,
              // filter: "blur(2px)",
              // animation: `${spin} 2s linear`,
            }}
          >
            Let's Connect
          </Text>
        </HStack>
      </Flex>
    </Box>
  );
};

const Services = [
  {
    label: "User Interface",
    description:
      "We have got quite a few already made templates for better project management that you can use now.",
  },
  {
    label: "User Experience",
    description:
      "We have got quite a few already made templates for better project management that you can use now.",
  },
  {
    label: "Branding",
    description:
      "We have got quite a few already made templates for better project management that you can use now.",
  },
  {
    label: "Graphik Design",
    description:
      "We have got quite a few already made templates for better project management that you can use now.",
  },
];
