import './index.css';
import login from '@/service/login.js';
import { Layout } from 'antd';
import MenuComponent from '@/components/layout/menu';
const { Header, Footer, Content } = Layout;

function Main() {
  login.login({
    name: 'hanjj',
    pw: '123',
  });
  login.admin({
    name: 'hanjj',
    pw: '123',
  });
  return (
    <>
      <Layout className="page">
        <MenuComponent />
        <Layout style={{ marginLeft: 200 }}>
          <Header style={{ background: '#fff' }}>Header</Header>
          <Content>content</Content>
          <Footer>footer</Footer>
        </Layout>
      </Layout>
    </>
  );
}

export default Main;
