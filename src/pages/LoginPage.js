import React, { Component, useState, useEffct, useCallback } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
// import { BrowserRouter as Router, Route, Redirect, Link, Switch, } from 'react-router-dom'
import { BrowserRouter as Router, Route, Redirect, Link, Switch } from '../kreact-router-dom';
/* 自己封装 react-router-dom  */
// import Route from '../reactRouterDom/Route'
// import Redirect from '../reactRouterDom/Redirect'

export default connect(
  // mapStateToProps
  ({ user }) => ({ isLogin: user.isLogin }),
  // mapDispatchToProps
  {
    // login: () => ({ type:'LOGIN_SUCCESS' })
    login: () => ({ type: 'login' }),
  },
)(
  class LoginPage extends Component {
    onclick = () => {
      console.log(134);
    };
    render() {
      const { isLogin, location, login } = this.props;
      const { redirect = '/' } = location?.state || {};

      console.log('LoginPage.props', this.props);
      if (isLogin) {
        //已经登录
        return <Redirect to={redirect} />;
      } else {
        //还未登陆
        return (
          <div>
            <h3>LoginPage</h3>
            <button onClick={login}>登录</button>
          </div>
        );
      }
    }
  },
);

// export default function LoginPage(props) {
//   const isLogin = useSelector(state => state.user.isLogin);
//   const dispatch = useDispatch();
//   const login = useCallback(() => dispatch({ type: "LOGIN_SUCCESS" }), []);
//   const { location } = props;
//   const { redirect = "/" } = location?.state || {};
//   if (isLogin) {
//     // 已经登录
//     return <Redirect to={redirect} />;
//   } else {
//     return (
//       <div>
//         <h3>LoginPage</h3>
//         <button onClick={login}>login click</button>
//       </div>
//     );
//   }
// }
