import ReactDOM from 'react-dom';
import './index.css';
import Main from './pages/main';

import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';

moment.locale('zh-cn');

ReactDOM.render(<Main />, document.getElementById('root'));
