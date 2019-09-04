import React from 'react';
import {Link} from 'react-router-dom';

export default class ZheJiang extends React.Component {
  render () {
    return (
      <div>
        <h3>浙江</h3>
        <p><Link to="/AnHui">前往安徽</Link></p>
        <p><Link to="/ZheJiang/WenZhou">前往温州</Link></p>
      </div>
    )
  }
}
