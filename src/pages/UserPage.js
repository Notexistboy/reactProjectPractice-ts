import React, { Component } from 'react'
import { connect } from 'react-redux'

export default connect(
  // mapStateToProps
  ({ user }) => ({ isLogin: user.isLogin }),
  // mapDispatchToProps
  {
    logout: () => ({ type: 'LOGIN_FAILURE' })
  }
)(
  class UserPage extends Component {
    render() {
      const { logout } = this.props;
      return (
        <div>
          <h3>UserPage</h3>
          <button onClick={logout}>退出登录</button>
        </div>
      )
    }
  }
)
