import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import './index.scss';
import './utils/axiosMiddleware';
// import { BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import '@/utils/sdkConfig';//sdk

// import VConsole from 'vconsole';
// const vconsole = new VConsole();

ReactDOM.render(
  <Routes />,
  document.getElementById('root')
);


serviceWorker.unregister();
