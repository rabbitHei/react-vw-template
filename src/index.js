import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import './index.scss';
import './index.less';
import './utils/axiosMiddleware';
// import { BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import '@/utils/sdkConfig';//sdk
import FastClick from 'fastclick';

// import VConsole from 'vconsole';
// const vconsole = new VConsole();

FastClick.attach(document.body);

ReactDOM.render(
  <Routes />,
  document.getElementById('root')
);


serviceWorker.unregister();
