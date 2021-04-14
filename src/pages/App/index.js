import './index.css';
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

function App(props) {
  console.log(props);
  return (
    <>
      <Layout className={'page'}>
        <Sider>Sider</Sider>
        <Layout>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer>footer</Footer>
        </Layout>
      </Layout>
    </>
  );
}

export default App;
