import RouterView from '@/router/index.js';
import service from '@/service/main.js';
import { Layout } from 'antd';
import MenuComponent from '@/components/layout/menu';
import './index.css';

const { Header, Content } = Layout;

function Main() {
  service.login({
    name: 'hanjj',
    pw: '123',
  });
  service.admin({
    name: 'hanjj',
    pw: '123',
  });
  return (
    <>
      <Layout className="page">
        <MenuComponent />
        <Layout>
          <Header style={{ background: '#fff' }}>Header</Header>
          <Content>
            <RouterView />
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default Main;
