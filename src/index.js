import ReactDOM from 'react-dom';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import './index.css';
import Main from '@/pages/main/index.js';

import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';

moment.locale('zh-cn');

const ShowMain = withRouter(Main);
ReactDOM.render(
  <Router>
    <ShowMain />
  </Router>,
  document.getElementById('root')
);
