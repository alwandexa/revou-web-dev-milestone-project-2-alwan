import { Flex, Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import "../src/css/main.css";

function App() {
  return (
    <Flex>
      <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Flex>
  );
}

export default App;
