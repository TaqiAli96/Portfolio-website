import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Link,
  Popover,
  PopoverTrigger,
  useColorModeValue,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

export default function Menu() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Flex direction={"column"} mt={5} color={"#fff"} position={"relative"}>
      <Flex align={"center"} bg={"transparent"}>
        <Flex
          w={{ base: "100%" }}
          ml={{ base: -2 }}
          mt={{ base: 2 }}
          display={{ base: "flex", md: "none" }}
          justify={{ base: "end" }}
        >
          <IconButton
            sx={{ bgColor: "black" }}
            _hover={{
              bgColor: "black",
            }}
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={4} h={4} /> : <HamburgerIcon w={5} h={5} />
            }
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Box
            // flex={"1"}
            display={{ base: "none", md: "flex" }}
          >
            <Text
              textStyle={"logo"}
              sx={{ writingMode: "vertical-rl" }}
              letterSpacing={"7px"}
            >
              UI/UX <span style={{ display: "block" }}>& Product Designer</span>
            </Text>
          </Box>
          <Flex
            flex={"1"}
            justifyContent={"flex-end"}
            display={{ base: "none", md: "flex" }}
          >
            <DesktopNav />
          </Flex>
        </Flex>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
      {/* <Image src={"/images/MJ-bg.png"} /> */}
      <Flex
        direction={"column"}
        alignItems={"flex-start"}
        mt={"20%"}
        zIndex={1}
      >
        <Text textStyle={"h1"} bg={"transparent"}>
          A Designer who listens to your{" "}
          <span style={{ display: "block" }}>
            story and brings it to life through <br />
            thoughtful design.
          </span>
        </Text>
      </Flex>
    </Flex>
  );
}

const DesktopNav = () => {
  return (
    <Stack direction={"row"} spacing={4} zIndex={1} h={"25px"}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                textStyle={"navItemsStyle"}
                _hover={{
                  textDecoration: "none",
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack display={{ md: "none" }} pt={3} bg={"transparent"}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, href }) => {
  const { onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={onToggle} bg={"transparent"} zIndex={1}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
        borderBottom={"1px solid"}
        borderColor={"#4a4a4a"}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.300", "gray.200")}
        >
          {label}
        </Text>
      </Flex>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Work",
  },

  {
    label: "About",
    href: "#",
  },
  {
    label: "Contact",
    href: "#",
  },
];
