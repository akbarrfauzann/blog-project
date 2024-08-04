import { Layout } from "antd";
import CustomHeader from "./Components/Header";
import CustomContent from "./Components/Content";
import "./App.css";

const { Header, Content } = Layout;

const App = () => {
  return (
    <Layout>
      <Header className="header">
        <CustomHeader />
      </Header>
      <Content className="content">
        <CustomContent />
      </Content>
    </Layout>
  );
};

export default App;
