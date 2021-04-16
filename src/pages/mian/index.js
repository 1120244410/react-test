import './index.css';
import login from '@/service/login.js';
import { Layout } from 'antd';
import MenuComponent from '@/components/layout/menu';
const { Header, Content } = Layout;

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
        <Layout>
          <Header style={{ background: '#fff' }}>Header</Header>
          <Content>content</Content>
        </Layout>
      </Layout>
    </>
  );
}

export default Main;
