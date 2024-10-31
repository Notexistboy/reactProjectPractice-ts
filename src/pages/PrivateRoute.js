import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'
/* 自己封装 react-router-dom  */
// import Route from '../reactRouterDom/Route'
// import Redirect from '../reactRouterDom/Redirect'

export default connect(
  // mapStateToProps
  ({ user }) => ({ isLogin: user.isLogin }),
  // mapDispatchToProps
  // {
  //   login: () => ({ type: 'LOGIN_SUCCESS' })
  // }
)(
  class PrivateRoute extends Component {
    render() {
      const { isLogin, component, path } = this.props
      //登录
      if(isLogin){
        return <Route path={path} component={component} />
      }else{
        return <Redirect to={{ pathname: "/login", state: {redirect: path} }} />
      }

    }
  }
)
