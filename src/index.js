import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';

import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';

moment.locale('zh-cn');

ReactDOM.render(
  <React.StrictMode>
    <App msg={'hello'} />
  </React.StrictMode>,
  document.getElementById('root')
);
