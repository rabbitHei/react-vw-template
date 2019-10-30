import React, { Component } from 'react';
import './home.scss';
import appImgs from '@/constant/appImgs.js';
// import { withRouter } from 'react-router';
// @withRouter

export default class Home extends Component {

  render() {
    return (
      <div>
        <img src={appImgs.back} alt="" />
        <p className="home">this is home page</p>
        <p className="less">less编译</p>
      </div>
    )
  }
}