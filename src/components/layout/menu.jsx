import { Component } from 'react';
import { Layout, Menu } from 'antd';

import { menus } from '@/misc/menus.js';
import Logo from './logo';
const { SubMenu } = Menu;

class MenuComponent extends Component {
  onOpenChange() {}
  render() {
    return (
      <Layout.Sider
        style={{
          overflowY: 'auto',
          height: '100%',
          position: 'fixed',
          left: 0,
        }}
        theme="light"
      >
        <Logo />
        <Menu mode="inline">
          {menus.map((m, i) => {
            return (
              <SubMenu key={m.link || i} icon={m.icon} title={m.title}>
                {m.children && m.children.length
                  ? m.children.map((c, j) => {
                      return <Menu.Item key={c.link || j}>{c.title}</Menu.Item>;
                    })
                  : null}
              </SubMenu>
            );
          })}
        </Menu>
      </Layout.Sider>
    );
  }
}

export default MenuComponent;
