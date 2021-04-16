import './index.css';
import main from '@/service/main.js';
import { Layout } from 'antd';
import MenuComponent from '@/components/layout/menu';
const { Header, Content } = Layout;

function Main() {
  main.login({
    name: 'hanjj',
    pw: '123',
  });
  main.admin({
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
