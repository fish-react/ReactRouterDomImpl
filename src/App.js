import React from 'react';
import {Route} from 'react-router';
import {BrowserRouter} from 'react-router-dom';

import './App.css';

import China from './components/China';
import AnHui from './components/AnHui';
import ZheJiang from './components/ZheJiang';
import ShouXian from './components/ShouXian'

export default class App extends React.Component{
  render () {
    return (
      <BrowserRouter>
        <Route path="/" component={China}/>

        <Route path="/AnHui" component={AnHui}/>

        <Route path="/AnHui/ShouXian" component={ShouXian}/>

        {/* 这种层级路由，匹配到/AnHui/ShouXian 时，前面两个也被匹配到了，渲染相关的组件 */}

        <Route path="/ZheJiang" component={ZheJiang}/>
      </BrowserRouter>
    )
  }
}
