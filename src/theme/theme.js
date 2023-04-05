import { extendTheme } from "@chakra-ui/react";

const fonts = {
  heading: `'Inter', sans-serif`,
  body: `'Inter', sans-serif`,
  paragraph: `'Inter', sans-serif`,
};
const textStyles = {
  logo: {
    fontWeight: "600",
    fontSize: "16px",
  },
  navItemsStyle: {
    fontSize: "20px",
    fontWeight: "600",
  },
  h1: {
    fontSize: ["37px", "50px", "50px", "56px"],
    fontWeight: "bold",
    color: "#fff",
  },
  onHoverHeading: {
    fontSize: ["43px", "90px", "90px", "128px"],

    _hover: {
      color: "#1B1818",
      cursor: "pointer",
      transition: "all 1.5s ease-out",
    },
    color: "#0a0909",
    fontWeight: "900",
  },
  h3: {
    fontSize: ["16px", "20px"],
    fontWeight: "bold",
    fontFamily: "Satoshi-Medium",
  },
};

const theme = extendTheme({
  textStyles,
  fonts,
});
export default theme;
