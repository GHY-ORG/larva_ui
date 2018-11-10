import ReactDOM from 'react-dom';
import router from './util/router';

const CONTAINER = document.getElementById('root');

if (!CONTAINER) {
  throw new Error('当前页面不存在 <div id="root"></div> 节点.');
}

ReactDOM.render(router, CONTAINER);
