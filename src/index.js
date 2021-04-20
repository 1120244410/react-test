import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import Main from '@/pages/main/index.js';

import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';

moment.locale('zh-cn');

ReactDOM.render(
  <Router>
    <Main />
  </Router>,
  document.getElementById('root')
);
