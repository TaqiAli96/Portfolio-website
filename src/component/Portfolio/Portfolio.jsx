import {
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
  Text,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Carousel from "react-elastic-carousel";
import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";
import { ArrowSection } from "./ArrowSection";

export const Portfolio = () => {
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");
  const outerspacing = isLargeScreen[0] ? 100 : 0;

  const breakPoints = [
    { width: 300, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
  ];

  const PrevButton = ({ isEdge }) => {
    return <ArrowSection icon={ArrowBackIcon} prop="prev" isEdge={isEdge} />;
  };
  const NextButton = ({ isEdge }) => {
    return <ArrowSection icon={ArrowForwardIcon} prop="next" isEdge={isEdge} />;
  };
  const Arrow = ({ type, onClick, isEdge }) => {
    const pointer =
      type === "PREV" ? (
        <PrevButton isEdge={isEdge} />
      ) : (
        <NextButton isEdge={isEdge} />
      );

    return (
      <button onClick={onClick} disabled={isEdge}>
        {pointer}
      </button>
    );
  };

  return (
    <Box mt={"20%"}>
      <Flex
        direction={"column"}
        align={"flex-start"}
        mt={["10%", "10%"]}
        color={"#fff"}
      >
        <HStack spacing={5}>
          <Divider w={20} />
          <Heading fontSize={[21, 25]} fontWeight={400}>
            Portfolio
          </Heading>
        </HStack>

        <Text fontSize={[36, 70]} mt={5}>
          Checkout my latest <br />
          projects
        </Text>
      </Flex>

      <Box mt={"150px"} pos={"relative"}>
        <Carousel
          breakPoints={breakPoints}
          itemPadding={[0, 10]}
          showArrows={true}
          renderArrow={(props) => <Arrow {...props} />}
          pagination={false}
          pos={"relative"}
          outerSpacing={outerspacing}
        >
          {Images.map((item) => (
            <Box
              w={700}
              h={600}
              pos={"relative"}
              bgImage={item.image}
              backgroundSize={"cover"}
              backgroundPosition={"center"}
              borderRadius={30}
              role="group"
              overflow={"auto"}
            >
              <Box
                h={"100%"}
                bgImage={item.image}
                borderRadius={30}
                backgroundSize={"cover"}
                color={"white"}
                transition="all 1s ease-out"
                opacity={0}
                _groupHover={{
                  opacity: 1,
                  transition: "all 1s ease-in",
                  marginTop: -20,
                }}
              ></Box>
              <Flex
                bg={"#fff"}
                position="absolute"
                bottom={0}
                borderBottomRightRadius={33}
                borderBottomLeftRadius={33}
                width={"full"}
                h={100}
                opacity={0}
                transition="all .5s ease-out"
                _groupHover={{
                  opacity: 1,
                  transition: "all 2s ease-out",
                }}
                paddingLeft={5}
              >
                <VStack
                  bg={"transparent"}
                  flex={1}
                  flexDirection={"column"}
                  align={"stretch"}
                  paddingTop={5}
                >
                  <Text
                    bg={"transparent"}
                    fontWeight={"bold"}
                    fontSize={22}
                    letterSpacing={0.1}
                  >
                    Project Name
                  </Text>
                  <HStack bg={"transparent"} fontSize={15} spacing={5}>
                    <Text bg={"transparent"}>Interface Design</Text>
                    <Text bg={"transparent"}>Web Design</Text>
                    <Text bg={"transparent"}>Visual Design</Text>
                  </HStack>
                </VStack>

                <Flex
                  bg={"transparent"}
                  flexDirection={"column"}
                  align={"flex-end"}
                  pr={5}
                  py={5}
                >
                  <ArrowBackIcon
                    bg={"transparent"}
                    w={8}
                    h={8}
                    transform=" rotate(140deg)"
                    color={"silver"}
                  />
                  <Text bg={"transparent"} pt={2}>
                    Explore
                  </Text>
                </Flex>
              </Flex>
            </Box>
          ))}
        </Carousel>
      </Box>
    </Box>
  );
};

const Images = [
  { id: 1, image: "/images/slider-img.png" },
  { id: 2, image: "/images/slider-img.png" },
  { id: 3, image: "/images/slider-img.png" },
  { id: 4, image: "/images/slider-img.png" },
];
