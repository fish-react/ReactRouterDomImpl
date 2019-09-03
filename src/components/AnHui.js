import React from 'react';
import {Link} from 'react-router-dom';

export default class AnHui extends React.Component {
  render () {
    return (
      <div>
        <h3>安徽</h3>
        <p><Link to="/ZheJiang">前往浙江</Link></p>

        <p><Link to="/AnHui/ShouXian">前往寿县</Link></p>
      </div>
    )
  }
}
