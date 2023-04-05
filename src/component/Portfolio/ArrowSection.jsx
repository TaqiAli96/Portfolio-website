import { Button, Circle, Icon } from "@chakra-ui/react";
import React from "react";

export const ArrowSection = ({ icon, prop, isEdge }) => {
  return (
    <>
      <Button
        borderRadius={100}
        w={50}
        h={50}
        isDisabled={isEdge}
        bg={"#fff"}
        position={"absolute"}
        zIndex={1}
        bottom={["-10%", "-13%"]}
        p={2}
        left={prop === "prev" && ["32%", "50%", "42%", "45%", "46%", "46%"]}
        right={prop === "next" && ["32%", "50%", "42%", "44%", "46%", "46%"]}
      >
        <Icon as={icon} bg={"transparent"} w={8} h={8} color={"#5454D4"} />
      </Button>
    </>
  );
};
