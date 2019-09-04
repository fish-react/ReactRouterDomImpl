import React from 'react';
import {Route} from 'react-router';
import {BrowserRouter, Switch} from 'react-router-dom';

import './App.css';

import China from './components/China';
import AnHui from './components/AnHui';
import ZheJiang from './components/ZheJiang';
import ShouXian from './components/ShouXian';

export default class App extends React.Component{
  render () {
    return (
      <BrowserRouter>
        {/* 这个路由具有包容性，后续其他所有路由都会匹配到这个组件，除非使用exact */}
        <Route path="/" component={China}/>

        {/* 因为使用了exact，只有精确匹配到/AnHui，才会使用这个 */}
        <Route path="/AnHui" exact component={AnHui}/>

        <Route path="/AnHui/ShouXian" component={ShouXian}/>

        {/* 这种层级路由，匹配到/AnHui/ShouXian 时，/路由也被匹配到了，渲染相关的组件
            如果不希望这种情况发生，可以是用exact属性，这样只有精确匹配的时候才会渲染组件 */}

        <Route path="/ZheJiang" component={ZheJiang}/>
        {/* 现在没有子路由了，一切都可以写成上面的写法 */}
      </BrowserRouter>
    )
  }
}
