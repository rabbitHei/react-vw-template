import React, { Component } from 'react';
import './home.scss';
import appImgs from '@/constant/appImgs.js'
export default class Home extends Component {

  render() {
    return (
      <div>
        <img src={appImgs.back} alt="" />
        <p className="home">this is home page</p>
      </div>
    )
  }
}