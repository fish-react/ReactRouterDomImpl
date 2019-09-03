import React from 'react';
import {Link} from 'react-router-dom';

export default class China extends React.Component {
  /**
   * 路由信息会被封装到this.props.location中
   */
  componentWillMount () {
    console.log(this.props.location)
  }

  render () {
    return (
      <div>
        {/* 这个路由会出现在 任意 /** 路由下，不符合我的期望  */}
        <h1><Link to="/">全国各省</Link></h1>

        <p><Link to="/ZheJiang">前往浙江</Link></p>
        <p><Link to="/AnHui">前往安徽</Link></p>
      </div>
    )
  }
}
