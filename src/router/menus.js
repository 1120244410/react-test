import Home from '@/pages/home';
import Flow from '@/pages/flow';

const menus = [
  {
    path: '/',
    component: Home,
    title: '欢迎',
    children: [],
  },
  {
    path: '/flow',
    component: Flow,
    title: '项目管理',
    children: [],
  },
];

export default menus;
