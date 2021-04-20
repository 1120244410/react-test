import { Component } from 'react';
import { Layout, Menu } from 'antd';

import menus from '@/router/menus.js';
import Logo from './logo.jsx';
const { SubMenu } = Menu;

class MenuComponent extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };
  onClick(key) {
    console.log(key);
  }
  render() {
    const { collapsed } = this.state;
    return (
      <Layout.Sider
        collapsible
        collapsed={collapsed}
        style={{
          overflowY: 'auto',
          height: '100%',
        }}
        theme="light"
        onCollapse={this.onCollapse}
      >
        <Logo />
        <Menu
          mode="inline"
          style={{ height: 'calc(100% - 64px)' }}
          onClick={({ key }) => this.onClick(key)}
        >
          {menus.map((m, i) => {
            return m.children && m.children.length ? (
              <SubMenu key={m.path || i} icon={m.icon} title={m.title}>
                {m.children && m.children.length
                  ? m.children.map((c, j) => {
                      return <Menu.Item key={c.path || j}>{c.title}</Menu.Item>;
                    })
                  : null}
              </SubMenu>
            ) : (
              <Menu.Item key={m.path || i}>{m.title}</Menu.Item>
            );
          })}
        </Menu>
      </Layout.Sider>
    );
  }
}

export default MenuComponent;
