import {
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { IndividualService } from "./IndividualService";

export const MyService = () => {
  return (
    <Box mt={5} position={"relative"}>
      <Box overflow={"auto"}>
        <Box minW={350}>
          <HStack justify={["center", "flex-end"]} spacing={[10, 20]}>
            {Social_Items.map((item) => (
              <Text color={"#5454D4"} textStyle={"navItemsStyle"}>
                {item.label}
              </Text>
            ))}
          </HStack>
        </Box>
      </Box>

      <Flex flexDirection={"column"} pl={[0, "10%"]} my={"15%"}>
        <Text textStyle={"onHoverHeading"} transition="all 1.5s ease-out">
          Think.
          <br />
          Make.Solve.
        </Text>
      </Flex>

      <Flex
        direction={"column"}
        align={"flex-start"}
        mt={["10%", "10%"]}
        color={"#fff"}
      >
        <HStack spacing={5}>
          <Divider w={20} display={{ base: "none", md: "block" }} />
          <Heading fontSize={[21, 25]} fontWeight={400}>
            What I Do
          </Heading>
        </HStack>

        <Text fontSize={[50]} mt={5}>
          Creating digital experiences that are <br /> intuitive, engaging, and
          human-centered is my passion.
        </Text>
      </Flex>
      <Box mt={"8%"}>
        <IndividualService />
      </Box>
    </Box>
  );
};

const Social_Items = [
  {
    label: "LinkedIn",
  },

  {
    label: "dribbles",
    href: "#",
  },
  {
    label: "Behance",
    href: "#",
  },
];
