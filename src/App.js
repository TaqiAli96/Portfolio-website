import { Box, ChakraProvider, Divider } from "@chakra-ui/react";
import { Layout } from "./component/layout/Layout";
import Menu from "./component/Header/Menu";
import { MyService } from "./component/Services/MyService";
import { Portfolio } from "./component/Portfolio/Portfolio";
import theme from "./theme/theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Menu />
      </Layout>
      <Box mt={"6%"} display={{ base: "none", md: "block" }}>
        <Divider w={"70%"} ml={"30%"} />
      </Box>
      <Layout>
        <MyService />
        <Portfolio />
      </Layout>
    </ChakraProvider>
  );
}

export default App;
