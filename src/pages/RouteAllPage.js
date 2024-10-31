import React, { Component } from 'react'
// import { BrowserRouter as Router, Route, Link, Switch, Redirect, useParams, withRouter } from 'react-router-dom'
import {
  BrowserRouter as Router, Route, Link, Switch, Redirect, useHistory,
  useLocation,
  useRouteMatch,
  useParams, withRouter } from '../k-react-router-dom'
/* 自己封装 react-router-dom  */
// import BrowserRouter from '../reactRouterDom/BrowserRouter'
// import Route from '../reactRouterDom/Route'
// import Link from '../reactRouterDom/Link'
// import Switch from '../reactRouterDom/Switch'
// import Redirect from '../reactRouterDom/Redirect'

import HomePage from './HomePage';
import UserPage from './UserPage';
import LoginPage from './LoginPage';
import PrivateRoute from './PrivateRoute'
/*   */
export class RouterAllPage extends Component {
  render() {
    return (
      <div> 
        <h3>RouterAllPage</h3>
        <Router>
          <Link to="/">首页</Link>
          {/* 有权限进用户中心 没有权限进登录页 */}
          <Link to="/user">用户中心</Link>
          <Link to="/login">登录</Link>
          <Link to="/search/123">搜索</Link> 
          {/* Route一定要去包裹在Router之内 因为Route要使用history location 这些来自Router的属性 */}
          {/* 渲染页面通过route来匹配 */}
          {/* path值不写则一直匹配 */}
          <Switch>
            <Route 
              exact 
              path="/"
              component={HomePage}
              children={() => <div>children</div>}
              render={() => <div>render</div>}
            />
            {/* 尽量不要这样写，当props参数改变时 会不断地挂载卸载 */}
            {/* <Route path="/user" component={() => <UserPage />} />      */}       
            {/* <Route path="/user" component={UserPage}/> */}
            {/* <PrivateRoute path="/user" isLogin={false} component={UserPage} /> */}
            <Route path="/login" isLogin={false} component={LoginPage} />
            {/* <Route path="/search/:id" component={SearchComponent} /> */}
            {/* <Route path="/search" component={SearchComponent} /> */}
            {/* 如果route没有path参数 将始终被匹配 */}
            {/* 不给path 还要放到最后  */}
            {/* <Route render={() => <div>404</div>} /> */}
          </Switch>
        </Router>
      </div>
    )
  }
}

function DetailComponent(props) {
  console.log('DetailComponent', props)
  const { id } = props?.match?.params || {};
  return (
    <div>DetailComponent</div>
  )
}

// class DetailComponent extends Component {
//   render() {
//     const Cmp = withRouter(
//       class extends Component {
//         render() {
//           console.log('Detail', this.props)
//           return (
//             <div>
//               <div>DetailComponent</div>
//             </div>
//           )
//         }
//       }
//     );  
//     return <Cmp />
//   }
// }

@withRouter
class SearchComponent extends Component {
  constructor(props){
    super(props)
  }
  render(){
    const history = useHistory();
    const location = useLocation();
    const match = useRouteMatch();
    const params = useParams();
    console.log('SearchComponent', this.props)
    console.log('hooks', history, location, match, params);
    const { id } = this.props?.match?.params || {};
    /* 路由的嵌套 不需要额外的Router包裹 */
    return (
      <div>
        SearchComponent - {id} <Link to={'/search/' + id + '/detail'}>详情</Link>
        <Route path={"/search/:" + id + "/detail"} children={DetailComponent} />
      </div>
    )
  }
}

// function SearchComponent(props) {
//   const history = useHistory();
//   const location = useLocation();
//   const match = useRouteMatch();
//   const params = useParams();
//   console.log('SearchComponent', props)
//   console.log('hooks', history, location, match, params);
//   const { id } = props?.match?.params || {};
//   /* 路由的嵌套 不需要额外的Router包裹 */
//   return(
//     <div>
//       SearchComponent - {id} <Link to={'/search/'+id +'/detail'}>详情</Link> 
//       <Route path={"/search/:" + id + "/detail"} children={DetailComponent} />
//     </div>
//   )
// }

export default RouterAllPage
